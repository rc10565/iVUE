Public Class register
    Inherits BaseClasses
    Dim currentSessionUser As New UserClass
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim userid As Integer

        Dim user As New UserClass

        If Session("uid") <> Nothing Then
            userid = CInt(Session("uid"))
            currentSessionUser = DirectCast(Session("user"), UserClass)
            'GetUser(userid)

        ElseIf Request.QueryString("u") <> Nothing Then

            userid = CInt(Request.QueryString("u").ToString())
            user = GetInvitedUser(userid)
            Session("user") = user
            currentSessionUser = user
        Else
            Response.Redirect("404.html")


            'user = GetInvitedUser(5) 'REMOVE for testing only
            'Session("user") = user
            'currentSessionUser = user
            'this is where we would redirect to an error or unauthorized page
        End If
        lblPanelTitle.Text = "Create Password for : " + currentSessionUser.fullname + " with " + currentSessionUser.CompanyName
    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

        Dim registeredUser As New UserClass
        If Not IsNothing(currentSessionUser) Then

        Else
            currentSessionUser = DirectCast(Session("user"), UserClass)
        End If
       

        With currentSessionUser
            Dim scrambler As New Simple3Des(password.Text)
            .pwd_Encrypted = scrambler.EncryptData(password.Text)
            .pwd_ClearText = scrambler.DecryptData(.pwd_Encrypted)
        End With

        If RegisterUser(currentSessionUser) Then
            Session("uid") = Nothing
            Session("user") = Nothing
            Response.Redirect("login.aspx")
        End If
        'If (currentSessionUser) Then

        'End If

        ' TODO save password call registeruser on success redirect to login page

    End Sub
End Class