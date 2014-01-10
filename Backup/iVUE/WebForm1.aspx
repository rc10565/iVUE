<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="WebForm1.aspx.vb" Inherits="iVUE.WebForm1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="UserIDSource" 
            DataTextField="name" DataValueField="UserId">
        </asp:DropDownList>
        <asp:SqlDataSource ID="UserIDSource" runat="server" 
            ConnectionString="<%$ ConnectionStrings:conString %>" 
            SelectCommand="SELECT UserId, firstname + ' ' + lastname AS name FROM UserInvites">
        </asp:SqlDataSource>
    </div>

    <asp:Button ID="Button1" runat="server" Text="Button" />

    </form>
</body>
</html>
