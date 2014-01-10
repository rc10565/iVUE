<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="register.aspx.vb" Inherits="iVUE.register" %>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width"/>
<title>Wegman Inventory - Customer Add</title>
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
<script src="js/jquery.jqplot.min.js" type="text/javascript"></script>
<script src="js/custom-scripts.js" type="text/javascript"></script>
</head>
<body id="theme-default" class="full_block">
<div id="container">
	<div id="header" class="blue_lin">
		<div class="header_left">
			<div class="logo">
				<img src="images/wam-logo.png"   alt="Ekra">
			</div>
		
		</div>
		<div class="header_right">
		
		
		</div>
	</div>

    
	<div id="content">
		<div class="grid_container">
			<div class="grid_12">
				<div class="widget_wrap">
					<div class="widget_top">
						<span class="h_icon list"></span>
						<h6>  <asp:Label ID="lblPanelTitle" runat="server" Text="Client Registration"></asp:Label></h6>
					</div>
					<div class="widget_content">
						<form id="signupform" autocomplete="off" method="post" action="#" class="form_container left_label" runat="server">
							<ul>
							
							
								<li>
								<div class="form_grid_12">
									<label class="field_title" id="lpassword" for="password">Password<span class="req">*</span></label>
									<div class="form_input">
                                        <asp:TextBox ID="password" name="password" class="large" maxlength="50" runat="server" TextMode="Password"></asp:TextBox>
										
									</div>
								</div>
								</li>
								<li>
								<div class="form_grid_12">
									<label class="field_title" id="lpassword_confirm" for="password_confirm">Confirm Password<span class="req">*</span></label>
									<div class="form_input">
										<input id="password_confirm" name="password_confirm" type="password" maxlength="50" value="" class="large"/>
									</div>
								</div>
								</li>
							
							<%--	<li>
								<div class="form_grid_12">
									<label id="lterms" for="terms" class="field_title">I have read and accept the Terms of Use.</label>
									<div class="form_input">
										<input id="terms" type="checkbox" name="terms"/>
									</div>
								</div>
								</li>--%>
								<li>
								<div class="form_grid_12">
									<div class="form_input">
                                        <asp:Button ID="Button1" runat="server" Text="Create Password" class="btn_small btn_blue"/>
									<%--	<button id="signupsubmit" name="signup" type="submit" class="btn_small btn_blue"><span>Create Password</span></button>--%>
									</div>
								</div>
								</li>
							</ul>
						</form>
					</div>
				</div>
			</div>
		</div>
		<span class="clear"></span>
	</div>



<%--	
	<div id="content">
		<div class="grid_container">
			<div class="grid_4" >
				<div class="widget_wrap">
					<div class="widget_top">
						<span class="h_icon list"></span>
						<h6>
                            <asp:Label ID="lblPanelTitle" runat="server" Text="Client Registration"></asp:Label></h6>
					</div>
					<div class="widget_content">
						<form action="#" method="post" id="userRegister" class="form_container left_label">
							<div >
								<ul>
									<li>
									
										
										<ul>
											<li>
											<div class="form_grid_8" >
												<label class="field_title">User Information</label>
												<div class="form_input">
													<div class="form_grid_6 alpha">
                                                        <asp:Label ID="lblfullname" runat="server" Text="Label"></asp:Label>
                                                         
                                                         <span class=" label_intro">User Full Name</span>
													</div><span class="clear"></span>
                                                    <div class="form_grid_6 alpha">
                                                        <asp:Label ID="lblEmail" runat="server" Text="Label"></asp:Label>
                                                         
                                                         <span class=" label_intro">Email</span>
													</div>
													
													<span class="clear"></span>
												</div>
											</div>
											</li>
										
										
										</ul>
									
									</li>
								</ul>
							</div>
							
						</form>
					</div>
				</div>
			</div>
			</div>
		<span class="clear"></span>
	</div>
--%>
</div>
</body>
<script type="text/javascript">
    $(document).ready(function () { });

      

   








  

</script>




</html>
