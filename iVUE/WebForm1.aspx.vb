Public Class WebForm1
    Inherits BaseClasses

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Dim url As String = String.Empty
        Dim uid As Integer

        uid = DropDownList1.SelectedValue
        Dim sb As New StringBuilder


        sb.Append("register.aspx")

        Dim x As New mySession

        x = GetSession()
        Session("uid") = uid
        Dim CurrentSession_User As New UserClass
        CurrentSession_User = GetInvitedUser(uid)
        Session("user") = CurrentSession_User

        url = sb.ToString
        url += "?uid=" + uid.ToString
        Response.Redirect(url)
    End Sub
End Class