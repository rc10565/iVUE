<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="UserInvite.aspx.vb" Inherits="iVUE.UserInvite" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <table>
    <tr><td>First Name</td><td>Last Name</td></tr>
    <tr><td><asp:TextBox ID="txtFname" runat="server"></asp:TextBox></td><td><asp:TextBox ID="txtLname" runat="server"></asp:TextBox></td></tr>
    <tr><td>Enter Email</td></tr>
    <tr><td colspan=2> <asp:TextBox ID="txtEmail" runat="server" Width="248px"></asp:TextBox></td></tr>
    <tr><td style="text-align:center;"colspan=2> <asp:Button ID="Button1" runat="server" Text="Button" /></td></tr>
    
    </table>

      

  
        <asp:Label ID="result" runat="server" Text="Label"></asp:Label>




    </div>
    
    </form>
</body>
</html>
