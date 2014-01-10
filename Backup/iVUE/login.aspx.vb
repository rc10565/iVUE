Imports System.ComponentModel
Imports System.Web.Script.Serialization
Imports System.Web.Script.Services
Imports System.Web
Imports System.Web.Services
Imports System.Security.Cryptography
Imports System.Web.Services.Protocols
Imports System.Collections.Generic
Imports System.Data
Imports System.Data.SqlClient



Partial Public Class login
    Inherits BaseClasses
    Private Class Validation
        Property valid As Boolean
        Property fields As List(Of TextBox)

        Sub New()
            valid = False
            fields = New List(Of TextBox)
        End Sub
    End Class


    Private Function isForm() As Validation
        Dim result As New Validation
        Dim validPwd, validUser As Boolean
        validPwd = True
        validUser = True
        If txtUser.Text = String.Empty Then
            result.fields.Add(txtUser)
            validUser = False

        End If
        If txtPwd.Text = String.Empty Then
            result.fields.Add(txtPwd)
            validPwd = False

        End If
        result.valid = validPwd And validUser

        Return result
    End Function

    Protected Sub btnLogin_Click(sender As Object, e As EventArgs) Handles btnLogin.Click

        Dim validForm As New Validation
        Dim User As New UserClass
        validForm = isForm()
        If validForm.valid Then

            Dim username As String
            Dim pwd As String
            Dim mask As New Simple3Des(txtPwd.Text)


            username = txtUser.Text
            pwd = mask.EncryptData(txtPwd.Text)

            User = GetValidUser(username, pwd)
            If User.UserId > 0 Then
                PageDirector(User)


            Else
                'show error message on screen add 1 to tries counter
                Dim sb As New StringBuilder
                sb.Append("Errornoty();")
                Dim s As String = sb.ToString
                ClientScript.RegisterStartupScript(Me.GetType(), "LoginError", s, True)
                txtUser.Text = String.Empty
                txtUser.Focus()
            End If
        Else
            Dim sb As New StringBuilder
            sb.Append("InvalidNoty();")
            Dim s As String = sb.ToString
            ClientScript.RegisterStartupScript(Me.GetType(), "Required", s, True)
            validForm.fields(0).Text = String.Empty
            validForm.fields(0).Focus()

        End If
    End Sub




End Class