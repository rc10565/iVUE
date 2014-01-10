<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="login.aspx.vb" Inherits="iVUE.login" %>

<!DOCTYPE html>

<html >
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width"/>
<title>Wegman Company Web Portal Login</title>
<link href="css/reset.css" rel="stylesheet" type="text/css">
<link href="css/layout.css" rel="stylesheet" type="text/css">
<link href="css/themes.css" rel="stylesheet" type="text/css">
<link href="css/typography.css" rel="stylesheet" type="text/css">
<link href="css/styles.css" rel="stylesheet" type="text/css">
<link href="css/shCore.css" rel="stylesheet" type="text/css">
<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="css/jquery.jqplot.css" rel="stylesheet" type="text/css">
<link href="css/jquery-ui-1.8.18.custom.css" rel="stylesheet" type="text/css">
<link href="css/data-table.css" rel="stylesheet" type="text/css">
<link href="css/form.css" rel="stylesheet" type="text/css">
<link href="css/ui-elements.css" rel="stylesheet" type="text/css">
<link href="css/wizard.css" rel="stylesheet" type="text/css">
<link href="css/sprite.css" rel="stylesheet" type="text/css">
<link href="css/gradient.css" rel="stylesheet" type="text/css">
<!--[if IE 7]>
<link rel="stylesheet" type="text/css" href="css/ie/ie7.css" />
<![endif]-->
<!--[if IE 8]>
<link rel="stylesheet" type="text/css" href="css/ie/ie8.css" />
<![endif]-->
<!--[if IE 9]>
<link rel="stylesheet" type="text/css" href="css/ie/ie9.css" />
<![endif]-->
<!-- Jquery -->
<script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
<script src="js/jquery-ui-1.8.18.custom.min.js" type="text/javascript"></script>
<script src="js/jquery.ui.touch-punch.js" type="text/javascript"></script>
<script src="js/chosen.jquery.js" type="text/javascript"></script>
<script src="js/uniform.jquery.js" type="text/javascript"></script>
<script src="js/bootstrap-dropdown.js" type="text/javascript"></script>
<script src="js/bootstrap-colorpicker.js" type="text/javascript"></script>
<script src="js/sticky.full.js" type="text/javascript"></script>
<script src="js/jquery.noty.js" type="text/javascript"></script>
<script src="js/selectToUISlider.jQuery.js" type="text/javascript"></script>
<script src="js/fg.menu.js" type="text/javascript"></script>
<script src="js/jquery.tagsinput.js" type="text/javascript"></script>
<script src="js/jquery.cleditor.js" type="text/javascript"></script>
<script src="js/jquery.tipsy.js" type="text/javascript"></script>
<script src="js/jquery.peity.js" type="text/javascript"></script>
<script src="js/jquery.simplemodal.js" type="text/javascript"></script>
<script src="js/jquery.jBreadCrumb.1.1.js" type="text/javascript"></script>
<script src="js/jquery.colorbox-min.js" type="text/javascript"></script>
<script src="js/jquery.idTabs.min.js" type="text/javascript"></script>
<script src="js/jquery.multiFieldExtender.min.js" type="text/javascript"></script>
<script src="js/jquery.confirm.js" type="text/javascript"></script>
<script src="js/elfinder.min.js" type="text/javascript"></script>
<script src="js/accordion.jquery.js" type="text/javascript"></script>
<script src="js/autogrow.jquery.js" type="text/javascript"></script>
<script src="js/check-all.jquery.js" type="text/javascript"></script>
<script src="js/data-table.jquery.js" type="text/javascript"></script>
<script src="js/ZeroClipboard.js" type="text/javascript"></script>
<script src="js/TableTools.min.js" type="text/javascript"></script>
<script src="js/jeditable.jquery.js" type="text/javascript"></script>
<script src="js/duallist.jquery.js" type="text/javascript"></script>
<script src="js/easing.jquery.js" type="text/javascript"></script>
<script src="js/full-calendar.jquery.js" type="text/javascript"></script>
<script src="js/input-limiter.jquery.js" type="text/javascript"></script>
<script src="js/inputmask.jquery.js" type="text/javascript"></script>
<script src="js/iphone-style-checkbox.jquery.js" type="text/javascript"></script>
<script src="js/meta-data.jquery.js" type="text/javascript"></script>
<script src="js/quicksand.jquery.js" type="text/javascript"></script>
<script src="js/raty.jquery.js" type="text/javascript"></script>
<script src="js/smart-wizard.jquery.js" type="text/javascript"></script>
<script src="js/stepy.jquery.js" type="text/javascript"></script>
<script src="js/treeview.jquery.js" type="text/javascript"></script>
<script src="js/ui-accordion.jquery.js" type="text/javascript"></script>
<script src="js/vaidation.jquery.js" type="text/javascript"></script>
<script src="js/mosaic.1.0.1.min.js" type="text/javascript"></script>
<script src="js/jquery.collapse.js" type="text/javascript"></script>
<script src="js/jquery.cookie.js" type="text/javascript"></script>
<script src="js/jquery.autocomplete.min.js" type="text/javascript"></script>
<script src="js/localdata.js" type="text/javascript"></script>
<script src="js/excanvas.min.js" type="text/javascript"></script>
<script src="js/custom-scripts.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () {
        $(window).resize(function () {
            $('.login_container').css({
                position: 'absolute',
                left: ($(window).width() - $('.login_container').outerWidth()) / 2,
                top: ($(window).height() - $('.login_container').outerHeight()) / 2
            });
        });
        // To initially run the function:
        $(window).resize();
    });

    function Errornoty() {
        var options = JSON.parse('{"text":"Invalid Username or Password - Please ReEnter","layout":"top","type":"error"}');
        noty(options);
    }

    function InvalidNoty() {
        var options = JSON.parse('{"text":"Username and Password are required!","layout":"top","type":"error"}');
        noty(options);
    }
  
</script>


</head>
<body id="theme-default" class="full_block">
 <form id="frmLogin" runat="server">
<div id="login_page">
	<div class="login_container">
	<div class="block_container blue_d">
        <img src="images/ivue-txt2.png"  width="60px" alt="Wegman Asset Management"><br />
   
   <div class="block_form">
					<ul>
						<li class="login_user">
						<asp:TextBox ID="txtUser" placeholder="User Name: " runat="server"></asp:TextBox>
						</li>
						<li class="login_pass">
						<asp:TextBox ID="txtPwd" textmode=Password placeholder="Password" runat="server"></asp:TextBox>
						</li>
                        <li> 
                         
					</ul>

      
					 <asp:Button ID="btnLogin" class="login_btn blue_lgel" runat="server" Text="Sign In" />
				</div>
		


  
		</div>
	</div>
</div> </form>
</body>
</html>