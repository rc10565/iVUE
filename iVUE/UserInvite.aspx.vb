Public Class UserInvite
    Inherits BaseClasses


   

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click



   

        Dim user As New UserClass
        user.firstname = txtFname.Text
        user.lastname = txtLname.Text
        user.email = txtEmail.Text
        Dim uid As Integer = InviteUser(user)
        user.UserId = uid



    End Sub
End Class