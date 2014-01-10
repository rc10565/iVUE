﻿Imports System.Web
Imports System.Web.Services
Imports System.Security.Cryptography
Imports System.Web.Services.Protocols
Imports System.Collections.Generic
Imports System.Data
Imports System.Data.SqlClient
Imports System.Net.Mail
Imports System.Net
Imports System.Net.Mime
Imports System.IO
Imports System.Text


Partial Public Class pageLogic
    Inherits System.Web.UI.Page

#Region "Email Code"
    Public Class EmailClass

        Public Property Email_TO As String
        Public Property Email_From As String
        Public Property Email_Name As String
        Public Property Email_Subject As String
        Public Property Email_Body As String
        Public Property emailerror As String



        Public Sub New()
            Email_TO = String.Empty
            Email_From = String.Empty
            Email_Name = String.Empty
            Email_Subject = String.Empty
            Email_Body = String.Empty
            emailerror = String.Empty
        End Sub







        Public Function Send() As Boolean
            Dim success As Boolean = False
            'Create the msg object to be sent
            Dim msg As New MailMessage()
            'msg.Body = htmlBody
            msg.IsBodyHtml = True

            'Add your email address to the recipients
            msg.[To].Add(Email_TO)
            'Configure the address we are sending the mail from
            Dim address As New MailAddress("Assets@wegmancompany.com", Email_From)
            msg.From = address
            'Append their name in the beginning of the subject
            msg.Subject = Email_Subject
            msg.Body = Email_Body

            'Configure an SmtpClient to send the mail.
            Dim client As New SmtpClient()
            client.EnableSsl = False
            client.Host = "mail.cunningit.com"
            client.Port = 25

            ' client.UseDefaultCredentials = True
            'only enable this if your provider requires it
            'Setup credentials to login to our sender email address ("UserName", "Password")
            Dim credentials As New NetworkCredential()
            credentials.UserName = "Rick@cunningit.com"
            credentials.Password = "stacey71"

            '   client.UseDefaultCredentials = False
            client.Credentials = credentials
            Try
                'Send the msg
                client.Send(msg)
                success = True


            Catch ex As SmtpFailedRecipientsException
                success = False
                For i = 0 To ex.InnerExceptions.Length - 1
                    Dim status As SmtpStatusCode = ex.InnerExceptions(i).StatusCode
                    If status = SmtpStatusCode.MailboxBusy OrElse status = SmtpStatusCode.MailboxUnavailable Then
                        Console.WriteLine("Delivery failed - retrying in 5 seconds.")
                        Threading.Thread.Sleep(5000)
                        client.Send(msg)
                        success = True
                    Else
                        success = False
                        Console.WriteLine("Failed to deliver message to {0}", ex.InnerExceptions(i).FailedRecipient)
                    End If
                Next i
            Catch ex As Exception
                emailerror = ex.ToString()
                Console.WriteLine("Exception caught in RetryIfBusy(): {0}", ex.ToString())
                success = False
            End Try


            Return success

        End Function









    End Class
#End Region
#Region "Encryption Helper"
    Public NotInheritable Class Simple3Des
        Private TripleDes As New TripleDESCryptoServiceProvider

        Private Function TruncateHash(
        ByVal key As String,
        ByVal length As Integer) As Byte()

            Dim sha1 As New SHA1CryptoServiceProvider

            ' Hash the key. 
            Dim keyBytes() As Byte =
                System.Text.Encoding.Unicode.GetBytes(key)
            Dim hash() As Byte = sha1.ComputeHash(keyBytes)

            ' Truncate or pad the hash. 
            ReDim Preserve hash(length - 1)
            Return hash
        End Function

        Sub New(ByVal key As String)
            ' Initialize the crypto provider.
            TripleDes.Key = TruncateHash(key, TripleDes.KeySize \ 8)
            TripleDes.IV = TruncateHash("", TripleDes.BlockSize \ 8)
        End Sub

        Public Function EncryptData(
        ByVal plaintext As String) As String

            ' Convert the plaintext string to a byte array. 
            Dim plaintextBytes() As Byte =
                System.Text.Encoding.Unicode.GetBytes(plaintext)

            ' Create the stream. 
            Dim ms As New System.IO.MemoryStream
            ' Create the encoder to write to the stream. 
            Dim encStream As New CryptoStream(ms,
                TripleDes.CreateEncryptor(),
                System.Security.Cryptography.CryptoStreamMode.Write)

            ' Use the crypto stream to write the byte array to the stream.
            encStream.Write(plaintextBytes, 0, plaintextBytes.Length)
            encStream.FlushFinalBlock()

            ' Convert the encrypted stream to a printable string. 
            Return Convert.ToBase64String(ms.ToArray)
        End Function

        Public Function DecryptData(
        ByVal encryptedtext As String) As String

            ' Convert the encrypted text string to a byte array. 
            Dim encryptedBytes() As Byte = Convert.FromBase64String(encryptedtext)

            ' Create the stream. 
            Dim ms As New System.IO.MemoryStream
            ' Create the decoder to write to the stream. 
            Dim decStream As New CryptoStream(ms,
                TripleDes.CreateDecryptor(),
                System.Security.Cryptography.CryptoStreamMode.Write)

            ' Use the crypto stream to write the byte array to the stream.
            decStream.Write(encryptedBytes, 0, encryptedBytes.Length)
            decStream.FlushFinalBlock()

            ' Convert the plaintext stream to a string. 
            Return System.Text.Encoding.Unicode.GetString(ms.ToArray)
        End Function

    End Class
#End Region
#Region "State Management Classes"

    <Serializable()> _
    Public Class mySession
        Public Property uid As String
        Public Property cid As String
        Public Property pwd As String
        Public Property user As UserClass

        Public Sub New()
            uid = String.Empty
            cid = String.Empty
            pwd = String.Empty
            user = New UserClass
        End Sub
    End Class

#End Region
#Region "User Class"
    <Serializable()> _
    Public Class UserClass
        Private _CompanyName As String
        Public Property UserId As Integer
        Public Property firstname As String
        Public Property lastname As String
        Public ReadOnly Property fullname As String
            Get
                Return firstname + " " + lastname
            End Get
        End Property
        Public Property email As String
        Public Property CompanyID As Integer
        Public Property pwd_Encrypted As String
        Public Property pwd_ClearText As String
        Public ReadOnly Property isWegman As Boolean
            Get
                Return CompanyName.ToUpper = "WEGMAN"
            End Get
        End Property

        Public ReadOnly Property CompanyName As String
            Get
                If (CompanyID > 0) Then
                    _CompanyName = GetCompanyName(CompanyID)
                Else
                    _CompanyName = String.Empty
                End If
                Return _CompanyName
            End Get
        End Property


        Public Sub New()
            UserId = 0
            email = String.Empty
            firstname = String.Empty
            lastname = String.Empty
            CompanyID = 0
            pwd_Encrypted = String.Empty
            pwd_ClearText = String.Empty
            _CompanyName = String.Empty

        End Sub


        Private Function GetCompanyName(ByVal CompanyID As Integer) As String
            Dim returnCompany As String = String.Empty
            Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
            Try
                Using con As New SqlConnection(conString)
                    Dim cmd As New SqlCommand
                    cmd.Connection = con
                    cmd.CommandType = CommandType.StoredProcedure
                    cmd.Parameters.AddWithValue("@companyID", CompanyID)
                    cmd.CommandText = "GetCompanyName"

                    con.Open()
                    Dim reader As SqlDataReader = cmd.ExecuteReader()
                    If reader.HasRows Then
                        While reader.Read
                            returnCompany = reader("CompanyName")

                        End While
                    End If

                End Using
            Catch ex As Exception
            End Try
            Return returnCompany
        End Function
    End Class




#End Region
    Public Class AddressClass
        Public Property address1 As String
        Public Property address2 As String
        Public Property city As String
        Public Property StateId As String
        Public Property Zip As String
        Public Property Mobile As String
        Public Property Phone As String

        Public Sub New()
            address1 = String.Empty
            address2 = String.Empty
            city = String.Empty
            StateId = String.Empty
            Zip = String.Empty
            Mobile = String.Empty
            Phone = String.Empty
        End Sub
    End Class


#Region "Company Class"



    Public Class Company_kvp
        Public Property companyid As Integer
        Public companyName As String

        Public Sub New()
            companyid = 0
            companyName = String.Empty
        End Sub

    End Class



    Public Class Company
        Public Property companyID As Integer
        Public Property invCode As String
        Public Property companyName As String
        Public Property Address As AddressClass
        'Public Property cmpName_extended As String
        'Public Property NAICS_ID As String
        'Public Property Status As String
        'Public Property DateCreated As DateTime
        'Public Property old_Ique_ID As String
        'Public Property salesForce_ID As String


        Public Sub New()
            companyID = 0
            invCode = String.Empty
            companyName = String.Empty
            Address = New AddressClass
            'cmpName_extended = String.Empty
            'NAICS_ID = String.Empty
            'Status = String.Empty
            'DateCreated = New DateTime
            'DateCreated = Today()
            'old_Ique_ID = String.Empty
            'salesForce_ID = String.Empty

        End Sub



    End Class

#End Region




    <WebMethod()> _
    Public Shared Function GetSession() As mySession
        Dim o As New Object
        Dim p As New mySession
        With p
            If Not IsNothing(HttpContext.Current.Session("uid")) Then .uid = HttpContext.Current.Session("uid")
            If Not IsNothing(HttpContext.Current.Session("cid")) Then .cid = HttpContext.Current.Session("cid")
            If Not IsNothing(HttpContext.Current.Session("pwd")) Then .pwd = HttpContext.Current.Session("pwd")
            If Not IsNothing(HttpContext.Current.Session("user")) Then
                o = HttpContext.Current.Session("user")
                .user = DirectCast(o, UserClass)
            End If

        End With
        Return p
    End Function


    <WebMethod()> _
    Public Shared Function AddUser(ByVal User As UserClass) As Integer
        Dim userid As New SqlParameter("@uid", Data.SqlDbType.Int)
        userid.Direction = Data.ParameterDirection.Output
        'userid.Value = 0
        Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
        Try
            Using con As New SqlConnection(conString)
                Dim cmd As New SqlCommand
                cmd.Connection = con
                cmd.CommandType = CommandType.StoredProcedure
                cmd.CommandText = "AddClientUser"
                cmd.Parameters.AddWithValue("@email", User.email)
                cmd.Parameters.AddWithValue("@pwd", User.pwd_Encrypted)
                cmd.Parameters.AddWithValue("@CustID", User.CompanyID)
                cmd.Parameters.Add(userid)
                con.Open()
                cmd.ExecuteNonQuery()
            End Using
        Catch ex As SqlException
        End Try
        If IsDBNull(userid.Value) Then Return -99 Else Return userid.Value
    End Function

    Public Shared Sub AddCompanyAddress(ByVal Companyid As Integer, addressid As Integer)
        Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
        Try
            Using con As New SqlConnection(conString)
                Dim cmd As New SqlCommand
                cmd.Connection = con
                cmd.CommandType = CommandType.StoredProcedure
                cmd.CommandText = "AddCompanyAddress"
                cmd.Parameters.AddWithValue("@CompanyId", Companyid)
                cmd.Parameters.AddWithValue("@AddressID", addressid)
                con.Open()
                cmd.ExecuteNonQuery()
            End Using
        Catch ex As SqlException
        End Try
    End Sub




    Public Shared Sub AddAddress(ByVal Companyid As Integer, Address As AddressClass)
        Dim AddressID As New SqlParameter("@AddressID", Data.SqlDbType.Int)
        AddressID.Direction = Data.ParameterDirection.Output
        Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
        Try
            Using con As New SqlConnection(conString)
                Dim cmd As New SqlCommand
                cmd.Connection = con
                cmd.CommandType = CommandType.StoredProcedure
                cmd.CommandText = "AddAddress"
                cmd.Parameters.AddWithValue("@address1", Address.address1)
                cmd.Parameters.AddWithValue("@address2", Address.address2)
                cmd.Parameters.AddWithValue("@city", Address.city)
                cmd.Parameters.AddWithValue("@StateID", Address.StateId)
                cmd.Parameters.AddWithValue("@Zip", Address.Zip)
                cmd.Parameters.AddWithValue("@Mobile", Address.Mobile)
                cmd.Parameters.AddWithValue("@Phone", Address.Phone)
                cmd.Parameters.Add(AddressID)
                con.Open()
                cmd.ExecuteNonQuery()
                AddCompanyAddress(Companyid, AddressID.Value)
            End Using

        Catch ex As SqlException

        End Try

    End Sub

    <WebMethod()> _
    Public Shared Function AddCompany(ByVal Company As Company) As Integer
        Dim companyid As New SqlParameter("@companyID", Data.SqlDbType.Int)
        companyid.Direction = Data.ParameterDirection.Output
        'userid.Value = 0

        Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
        Try
            Using con As New SqlConnection(conString)
                Dim cmd As New SqlCommand
                cmd.Connection = con
                cmd.CommandType = CommandType.StoredProcedure
                cmd.CommandText = "AddCompany"
                cmd.Parameters.AddWithValue("@invCode", Company.invCode)
                cmd.Parameters.AddWithValue("@companyName", Company.companyName)
                cmd.Parameters.Add(companyid)

                con.Open()

                cmd.ExecuteNonQuery()
            End Using

        Catch ex As SqlException
        End Try
        If IsDBNull(companyid.Value) Then
            Return -99
        Else
            AddAddress(companyid.Value, Company.Address)
            Return companyid.Value
        End If
    End Function

    <WebMethod()> _
    Public Shared Function GetCompanies() As List(Of Company_kvp)
        Dim returnList As New List(Of Company_kvp)
        Dim comp As New Company_kvp
        Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
        Try
            Using con As New SqlConnection(conString)
                Dim cmd As New SqlCommand
                cmd.Connection = con
                cmd.CommandType = CommandType.StoredProcedure
                cmd.CommandText = "GetCompanies"
                con.Open()
                Dim reader As SqlDataReader = cmd.ExecuteReader()
                If reader.HasRows Then
                    While reader.Read
                        With comp
                            .companyid = reader("ID")
                            .companyName = reader("Company").ToString
                        End With
                        returnList.Add(comp)
                        comp = New Company_kvp
                    End While
                End If

            End Using
        Catch ex As SqlException
        End Try
        Return returnList


    End Function

    Private Shared Function Exists(ByVal email As String) As Boolean
        Dim result As Integer
        Dim blnExists As Boolean = False
        '  Dim result As New UserClass
        Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
        Try
            Using con As New SqlConnection(conString)
                Dim cmd As New SqlCommand
                cmd.Connection = con
                cmd.CommandType = CommandType.Text
                cmd.CommandText = "Select dbo.UserExists(@email)"
                cmd.Parameters.AddWithValue("@email", email)
                con.Open()
                result = cmd.ExecuteScalar()
                If result >= 1 Then blnExists = True Else blnExists = False
            End Using
        Catch ex As SqlException
            result = False
        End Try
        Return blnExists
    End Function


    <WebMethod()> _
    Public Shared Function InviteUser(ByVal NewUser As UserClass) As Integer
        Dim returnvalue As Integer = 0
        If Not Exists(NewUser.email) Then
            Dim uid As New SqlParameter("@uid", Data.SqlDbType.Int)
            uid.Direction = Data.ParameterDirection.Output
            Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
            Try
                Using con As New SqlConnection(conString)
                    Dim cmd As New SqlCommand
                    cmd.Connection = con
                    cmd.CommandType = CommandType.StoredProcedure
                    cmd.CommandText = "AddInvite"
                    cmd.Parameters.AddWithValue("@firstname", NewUser.firstname)
                    cmd.Parameters.AddWithValue("@lastname", NewUser.lastname)
                    cmd.Parameters.AddWithValue("@email", NewUser.email)
                    cmd.Parameters.AddWithValue("@companyid", NewUser.CompanyID)
                    cmd.Parameters.Add(uid)
                    con.Open()
                    cmd.ExecuteNonQuery()
                End Using
            Catch ex As SqlException
            End Try
            If IsDBNull(uid.Value) Then
                returnvalue = -1
            Else
                NewUser.UserId = uid.Value
                SendInvite(NewUser)
                returnvalue = uid.Value
            End If
        Else
            returnvalue = -99
        End If
        Return returnvalue
    End Function

    Private Shared Sub SendInvite(user As UserClass)
        Dim mail As New EmailClass
        mail.Email_TO = user.email
        mail.Email_Subject = "Welcome to Wegman Company Inventory Portal for Client Access"
        mail.Email_From = "Wegman Inventory"
        mail.Email_Body = CreateEmail(user)
        If mail.Send() Then

        End If

    End Sub
    Public Shared Function HyperLink(ByVal ID As Integer) As String
        Dim result As String = String.Empty
        Dim sb As New StringBuilder(String.Empty)
        Dim path As String = HttpContext.Current.Server.MapPath("Register.aspx")
        sb.AppendFormat("<a href=""{0}?u={1}"">Click to Register</a>", path, ID)
        result = sb.ToString
        Return result
    End Function

    Private Shared Function CreateEmail(ByRef User As UserClass) As String
        Dim fields() As String = {"%fullname%", "%weblink%"}
        Dim strmReader As StreamReader
        Dim path As String = HttpContext.Current.Server.MapPath("docs\Template.htm")
        strmReader = File.OpenText(path)
        Dim html As String = String.Empty
        html = strmReader.ReadToEnd
        strmReader.Close()
        Dim body As String = ProcessedEmail(html, fields, User)
        Dim fs As StreamWriter = Nothing
        fs = File.CreateText(HttpContext.Current.Server.MapPath("docs\invite.htm"))
        fs.WriteLine(body)
        fs.Close()
        Return body
    End Function

    Public Shared Function ProcessedEmail(ByVal oldhtml As String, fields() As String, user As UserClass)
        Dim result As String = String.Empty
        result = oldhtml
        For i = 0 To UBound(fields)
            Select Case fields(i)
                Case "%fullname%"
                    result = result.Replace(fields(i), user.fullname)
                Case "%weblink%"
                    Dim link As String = HyperLink(user.UserId)
                    result = result.Replace(fields(i), link)
            End Select

        Next
        Return result
    End Function

    <WebMethod()> _
    Public Shared Function GetInvitedUser(ByVal userid As Integer) As UserClass
        Dim returnUser As New UserClass
        Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
        Try
            Using con As New SqlConnection(conString)
                Dim cmd As New SqlCommand
                cmd.Connection = con
                cmd.CommandType = CommandType.StoredProcedure
                cmd.Parameters.AddWithValue("@UserID", userid)
                cmd.CommandText = "GetInvitedUser"
                con.Open()
                Dim reader As SqlDataReader = cmd.ExecuteReader()
                If reader.HasRows Then
                    While reader.Read
                        With returnUser
                            .firstname = reader("firstname")
                            .lastname = reader("lastname")
                            .email = reader("email")
                            .UserId = reader("userid")
                            .CompanyID = reader("companyid")
                        End With
                    End While
                End If
            End Using
        Catch ex As SqlException
        End Try
        Return returnUser


    End Function
    <WebMethod()> _
    Public Shared Function RegisterUser(ByVal User As UserClass) As Boolean
        Dim result As Boolean = False
        Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
        Try
            Using con As New SqlConnection(conString)
                Dim cmd As New SqlCommand
                cmd.Connection = con
                cmd.CommandType = CommandType.StoredProcedure
                cmd.CommandText = "RegisterUser"
                cmd.Parameters.AddWithValue("@UserId", User.UserId)
                cmd.Parameters.AddWithValue("@pwd", User.pwd_Encrypted)

                con.Open()
                cmd.ExecuteNonQuery()
                result = True
            End Using

        Catch ex As SqlException
            result = False
        End Try
        Return result
    End Function



    <WebMethod()> _
    Public Shared Function ValidUser(ByVal username As String, pwd As String) As Integer
        Dim result As Integer
        '  Dim result As New UserClass
        Dim conString As String = ConfigurationManager.ConnectionStrings("constring").ConnectionString
        Try
            Using con As New SqlConnection(conString)
                Dim cmd As New SqlCommand
                cmd.Connection = con
                cmd.CommandType = CommandType.Text
                cmd.CommandText = "Select dbo.ValidUser(@username,@pwd)"
                cmd.Parameters.AddWithValue("@username", username)
                cmd.Parameters.AddWithValue("@pwd", pwd)
                con.Open()
                result = cmd.ExecuteScalar()

            End Using

        Catch ex As SqlException
            result = False
        End Try


        Return result

    End Function

End Class
