/*==JQUERY SELECTBOX==
$(".chzn-select").chosen(); 
$(".chzn-select-deselect").chosen({allow_single_deselect: true});
/*==JQUERY UNIFORM==
$(".checkbox,.rem_me,.radio,input[type='file']").uniform();

/*==JQUERY SPINNER==
$('#spinner').spinner({ min: -100, max: 100 });
$('#spinnerfast').spinner({ min: -1000, max: 1000, increment: 'fast' });
$('#spinnerhide').spinner({ min: 0, max: 100, showOn: 'both' });
$('#spinnernull').spinner({ min: -100, max: 100, allowNull: true });
$('#spinnerdisable').spinner({ min: -100, max: 100 });
$('#spinnermaxlen').spinner();
$('#spinner5').spinner();
$('#spinnercurrency').spinner({prefix: '$', group: ',', step: 0.01, largeStep: 1, min: -1000000, max: 1000000});	
$('#spinnerconfig').spinner({min: -1000, max: 1000, step: 1, increment: 'fast'});
	
/*==UI Shortable==
$(".switch_bar ul,#sidenav, #primary_nav ul").sortable();
$(".switch_bar ul,#sidenav, #primary_nav ul").disableSelection();*/

/*==JQUERY STEPY==
$('#stepy_form').stepy({
backLabel: 'Back',
nextLabel: 'Next',
errorImage:true,
block: true,
description: true,
legend: false,
titleClick: true,
titleTarget: '#top_tabby',
validate: true
});*/


/*===================
LIST-ACCORDION
===================	  

$('#list-accordion').accordion({
header: ".title",
autoheight: false
});
	
$('#stepy_form').validate({
errorPlacement: function(error, element) {
$('#stepy_form div.stepy-error').append(error);
}, rules: {
'name':			'required',
'email':		'required'
}, messages: {
'name':		{ required:  'Name field is required!' },
'email':			{ required:  'Email field is requerid!' }
}
});
				
$('#left_stepy').stepy({
backLabel: 'Back',
nextLabel: 'Next',
errorImage:     true,
block: true,
description: true,
legend: false,
titleClick: true,
titleTarget: '#left_title',
validate: true
});		
				
$('#left_stepy').validate({
errorPlacement: function(error, element) {
$('#left_stepy div.stepy-error').append(error);
}, rules: {
'name':			'required',
'password':		'required',
}, messages: {
'name':		{ required:  'name field is required!' },
'password':			{ required:  'pass field is requerid!' },
}
});	
				
$('#stepy_no_validation').stepy({
backLabel: 'Back',
nextLabel: 'Next',
errorImage:     true,
block: true,
description: true,
legend: false,
titleClick: true,
titleTarget: '#tabby_no_validation',
validate: true
});		
	
$('#valid').stepy({
	  
		
backLabel:      'Backward',
block:          true,
errorImage:     true,
nextLabel:      'Forward',
titleClick:     true,
validate:       true
});
	
$('#valid').validate({
errorPlacement: function(error, element) {
$('#valid div.stepy-error').append(error);
}, rules: {
'user':			{ maxlength: 1 },
'email':		'email',
'checked':		'required',
'newsletter':	'required',
'password':		'required',
'bio':			'required',
'day':			'required'
}, messages: {
'user':			{ maxlength: 'User field should be less than 1!' },
'email':		{ email: 	 'Invalid e-mail!' },
'checked':		{ required:  'Checked field is required!' },
'newsletter':	{ required:  'Newsletter field is required!' },
'password':		{ required:  'Password field is requerid!' },
'bio':			{ required:  'Bio field is required!' },
'day':			{ required:  'Day field is requerid!' },
}
});
				
				
				
				

/*==AUTO GROW TEXTBOX==
$(".input_grow").autoGrow();
	
/*==INPUT MASK==
		
$("#phone").mask("(999) 999-9999");
$("#mobile").mask("(999) 999-9999");
$("#tin").mask("99-9999999");
$("#ssn").mask("999-99-9999");
   

/*======================
ACCORDION MENU
========================
$('.accordion_mnu').initMenu();
	
/*======================
DUAL LIST
========================
$.configureBoxes();
	 
/*======================
PROGRESS BAR
========================		 
	
/*======================
RATY
========================
	
/*======================
DATEPICKER
========================
$( "#datepicker" ).datepicker({ minDate: 0});  */


/*END

/*======================
IPHONE STYLE BUTTON
========================
$('.on_off :checkbox').iphoneStyle();
$('.disabled :checkbox').iphoneStyle();
$('.long_tiny :checkbox').iphoneStyle({ checkedLabel: 'Very Long Text', uncheckedLabel: 'Tiny' });
		
var onchange_checkbox = ($('.onchange :checkbox')).iphoneStyle({
onChange: function(elem, value) { 
$('span#status').html(value.toString());
}
});
*/



/*======================
iBUTTON Radio/Check Box
========================
	
$(".cb-enable").click(function(){
var parent = $(this).parents('.switch');
$('.cb-disable',parent).removeClass('selected');
$(this).addClass('selected');
$('.checkbox',parent).attr('checked', true);
});
	
$(".cb-disable").click(function(){
var parent = $(this).parents('.switch');
$('.cb-enable',parent).removeClass('selected');
$(this).addClass('selected');
$('.checkbox',parent).attr('checked', false);
});
	
		
	

/*======================
INPUT LIMITER
========================
	
$('.limiter').inputlimiter({limit: 100});
	
   
/*======================
Tags Input
========================
$('#tags_1').tagsInput({
width:'99%',
'defaultText':'add a test tag'
});

	
	
/*======================
DROPDOWN
========================
$('.dropdown-toggle').dropdown()
	

	
/*======================
BREADCRUMB
========================
$("#breadCrumb0").jBreadCrumb();
$("#breadCrumb1").jBreadCrumb();
$("#breadCrumb2").jBreadCrumb();
$("#breadCrumb3").jBreadCrumb();
	
	
	
/*======================
Sticky
========================
$('.s_noty').click(function(){
		
$('.s_noty').sticky('This is Simple Note');
});
$('.i_noty').click(function(){
		
$('.i_noty').sticky();
});
	
$('.click_noty_btn').click(function(){
		
$('.sticky_html').sticky();
});
	
$('.custom_n').click(function(){
		
$('.sticky_custom').sticky();
});
	
	
/*======================
TREEVIEW
========================

$(function() {
$("#tree").treeview({
collapsed: true,
animated: "fast",
control:"#sidetreecontrol",
prerendered: true,
persist: "location"
});
})
*/
/*==============================
NOTY TOP
================================
	
$('.alert_t').click(function() {
		
var noty_id = noty({
layout : 'top',
text: 'noty - a jquery notification library!',
modal : true,
type:'alert',
			
});
});

$('.error_t').click(function() {
		
var noty_id = noty({
layout : 'top',
text: 'noty - a jquery notification library!',
modal : true,
type : 'error', 
});
});
		  
$('.success_t').click(function() {
		
var noty_id = noty({
layout : 'top',
text: 'noty - a jquery notification library!',
modal : true,
type : 'success', 
});
});
		  
$('.info_t').click(function() {
		
var noty_id = noty({
layout : 'top',
text: 'noty - a jquery notification library!',
modal : true,
type : 'information', 
});
});
	
$('.confirm_t').click(function() {
		
var noty_id = noty({
layout : 'top',
text: 'noty - a jquery notification library!',
modal : true,
buttons: [
{type: 'button green', text: 'Ok', click: function($noty) {
		  
// this = button element
// $noty = $noty element
		  
$noty.close();
noty({force: true, text: 'You clicked "Ok" button', type: 'success'});
}
},
{type: 'button pink', text: 'Cancel', click: function($noty) {
$noty.close();
noty({force: true, text: 'You clicked "Cancel" button', type: 'error'});
}
}
],
type : 'success', 
});
});


/*==============================
NOTY CENTER
================================
	
$('.alert_c').click(function() {
		
var noty_id = noty({
layout : 'center',
text: 'noty - a jquery notification library!',
modal : true,
type:'alert',
			
});
});

$('.error_c').click(function() {
		
var noty_id = noty({
layout : 'center',
text: 'noty - a jquery notification library!',
modal : true,
type : 'error', 
});
});
		  
$('.success_c').click(function() {
		
var noty_id = noty({
layout : 'topCenter',
text: 'User has been invited to register',
modal : true,
timeout: 2500,
speed:500,
type : 'success'
});
});
		  
$('.info_c').click(function() {
		
var noty_id = noty({
layout : 'center',
text: 'noty - a jquery notification library!',
modal : true,
type : 'information'
});
});
	
$('.confirm_c').click(function() {
		
var noty_id = noty({
layout : 'center',
text: 'noty - a jquery notification library!',
modal : true,
buttons: [
{type: 'button green', text: 'Ok', click: function($noty) {
		  
// this = button element
// $noty = $noty element
		  
$noty.close();
noty({force: true, text: 'You clicked "Ok" button', type: 'success',layout : 'center',modal : true});
}
},
{type: 'button pink', text: 'Cancel', click: function($noty) {
$noty.close();
noty({force: true, text: 'You clicked "Cancel" button', type: 'error',layout : 'center',modal : true});
}
}
],
type : 'success' 
});
});
	
/*==============================
NOTY BOTTOM
================================
	
$('.alert_b').click(function() {
		
var noty_id = noty({
layout : 'bottom',
text: 'noty - a jquery notification library!',
modal : true,
type:'alert',
closeButton : true
			
});
});

$('.error_b').click(function() {
		
var noty_id = noty({
layout : 'bottom',
text: 'noty - a jquery notification library!',
modal : true,
type : 'error' 
});
});
		  
$('.success_b').click(function() {
		
var noty_id = noty({
layout : 'bottom',
text: 'noty - a jquery notification library!',
modal : true,
type : 'success'
});
});
		  
$('.info_b').click(function() {
		
var noty_id = noty({
layout : 'bottom',
text: 'noty - a jquery notification library!',
modal : true,
type : 'information'
});
});
	
$('.confirm_b').click(function() {
		
var noty_id = noty({
layout : 'bottom',
text: 'noty - a jquery notification library!',
modal : true,
buttons: [
{type: 'button green', text: 'Ok', click: function($noty) {
		  
// this = button element
// $noty = $noty element
		  
$noty.close();
noty({force: true, text: 'You clicked "Ok" button', type: 'success',layout : 'bottom',modal : true,});
}
},
{type: 'button pink', text: 'Cancel', click: function($noty) {
$noty.close();
noty({force: true, text: 'You clicked "Cancel" button', type: 'error',layout : 'bottom',modal : true,});
}
}
],
type : 'success'
});
});
	
	
/*==============================
NOTY TOP LEFT
================================
	
$('.alert_tl').click(function() {
		
var noty_id = noty({
layout : 'topLeft',
text: 'noty - a jquery notification library!',
modal : true,
type:'alert'
			
});
});

$('.error_tl').click(function() {
		
var noty_id = noty({
layout : 'topLeft',
text: 'noty - a jquery notification library!',
modal : true,
type : 'error', 
});
});
		  
$('.success_tl').click(function() {
		
var noty_id = noty({
layout : 'topLeft',
text: 'noty - a jquery notification library!',
modal : true,
type : 'success', 
});
});
		  
$('.info_tl').click(function() {
		
var noty_id = noty({
layout : 'topLeft',
text: 'noty - a jquery notification library!',
modal : true,
type : 'information', 
});
});
	
$('.confirm_tl').click(function() {
		
var noty_id = noty({
layout : 'topLeft',
text: 'noty - a jquery notification library!',
modal : true,
buttons: [
{type: 'button green', text: 'Ok', click: function($noty) {
		  
// this = button element
// $noty = $noty element
		  
$noty.close();
noty({force: true, text: 'You clicked "Ok" button', type: 'success',layout : 'topLeft',modal : true,});
}
},
{type: 'button pink', text: 'Cancel', click: function($noty) {
$noty.close();
noty({force: true, text: 'You clicked "Cancel" button', type: 'error',layout : 'topLeft',modal : true,});
}
}
],
type : 'success' 
});
});
	
/*==============================
NOTY TOP CENTER
================================
	
$('.alert_tc').click(function() {
		
var noty_id = noty({
layout : 'topCenter',
text: 'noty - a jquery notification library!',
modal : true,
type:'alert',
			
});
});

$('.error_tc').click(function() {
		
var noty_id = noty({
layout : 'topCenter',
text: 'noty - a jquery notification library!',
modal : true,
type : 'error'
});
});
		  
$('.success_tc').click(function() {
		
var noty_id = noty({
layout : 'topCenter',
text: 'noty - a jquery notification library!',
modal : true,
type : 'success', 
});
});
		  
$('.info_tc').click(function() {
		
var noty_id = noty({
layout : 'topCenter',
text: 'noty - a jquery notification library!',
modal : true,
type : 'information', 
});
});
	
$('.confirm_tc').click(function() {
		
var noty_id = noty({
layout : 'topCenter',
text: 'noty - a jquery notification library!',
modal : true,
buttons: [
{type: 'button green', text: 'Ok', click: function($noty) {
		  
// this = button element
// $noty = $noty element
		  
$noty.close();
noty({force: true, text: 'You clicked "Ok" button', type: 'success',layout : 'topCenter',modal : true,});
}
},
{type: 'button pink', text: 'Cancel', click: function($noty) {
$noty.close();
noty({force: true, text: 'You clicked "Cancel" button', type: 'error',layout : 'topCenter',modal : true,});
}
}
],
type : 'success', 
});
});
	
/*==============================
NOTY TOP RIGHT
================================
	
$('.alert_tr').click(function() {
		
var noty_id = noty({
layout : 'topRight',
text: 'noty - a jquery notification library!',
modal : true,
type:'alert',
			
});
});

$('.error_tr').click(function() {
		
var noty_id = noty({
layout : 'topRight',
text: 'noty - a jquery notification library!',
modal : true,
type : 'error', 
});
});
		  
$('.success_tr').click(function() {
		
var noty_id = noty({
layout : 'topRight',
text: 'noty - a jquery notification library!',
modal : true,
type : 'success', 
});
});
		  
$('.info_tr').click(function() {
		
var noty_id = noty({
layout : 'topRight',
text: 'noty - a jquery notification library!',
modal : true,
type : 'information', 
});
});
	
$('.confirm_tr').click(function() {
		
var noty_id = noty({
layout : 'topRight',
text: 'noty - a jquery notification library!',
modal : true,
buttons: [
{type: 'button green', text: 'Ok', click: function($noty) {
		  
// this = button element
// $noty = $noty element
		  
$noty.close();
noty({force: true, text: 'You clicked "Ok" button', type: 'success',layout : 'topRight',modal : true,});
}
},
{type: 'button pink', text: 'Cancel', click: function($noty) {
$noty.close();
noty({force: true, text: 'You clicked "Cancel" button', type: 'error',layout : 'topRight',modal : true,});
}
}
],
type : 'success' 
});
});
		  
		  
/*==============================
NOTY BOTTOM RIGHT
================================
	
$('.alert_br').click(function() {
		
var noty_id = noty({
layout : 'bottomRight',
text: 'noty - a jquery notification library!',
modal : true,
type:'alert'
			
});
});

$('.error_br').click(function() {
		
var noty_id = noty({
layout : 'bottomRight',
text: 'noty - a jquery notification library!',
modal : true,
type : 'error'
});
});
		  
$('.success_br').click(function() {
		
var noty_id = noty({
layout : 'bottomRight',
text: 'noty - a jquery notification library!',
modal : true,
type : 'success'
});
});
		  
$('.info_br').click(function() {
		
var noty_id = noty({
layout : 'bottomRight',
text: 'noty - a jquery notification library!',
modal : true,
type : 'information', 
});
});
	
$('.confirm_br').click(function() {
		
var noty_id = noty({
layout : 'bottomRight',
text: 'noty - a jquery notification library!',
modal : true,
buttons: [
{type: 'button green', text: 'Ok', click: function($noty) {
		  
// this = button element
// $noty = $noty element
		  
$noty.close();
noty({force: true, text: 'You clicked "Ok" button', type: 'success',layout : 'bottomRight',modal : true,});
}
},
{type: 'button pink', text: 'Cancel', click: function($noty) {
$noty.close();
noty({force: true, text: 'You clicked "Cancel" button', type: 'error',layout : 'bottomRight',modal : true,});
}
}
],
type : 'success', 
});
});
		  
		  
/*==============================
NOTY BOTTOM LEFT
================================
	
$('.alert_bl').click(function() {
		
var noty_id = noty({
layout : 'bottomLeft',
text: 'noty - a jquery notification library!',
modal : true,
type:'alert',
			
});
});

$('.error_bl').click(function() {
		
var noty_id = noty({
layout : 'bottomLeft',
text: 'noty - a jquery notification library!',
modal : true,
type : 'error', 
});
});
		  
$('.success_bl').click(function() {
		
var noty_id = noty({
layout : 'bottomLeft',
text: 'noty - a jquery notification library!',
modal : true,
type : 'success', 
});
});
		  
$('.info_bl').click(function() {
		
var noty_id = noty({
layout : 'bottomLeft',
text: 'noty - a jquery notification library!',
modal : true,
type : 'information', 
});
});
	
$('.confirm_bl').click(function() {
		
var noty_id = noty({
layout : 'bottomLeft',
text: 'noty - a jquery notification library!',
modal : true,
buttons: [
{type: 'button green', text: 'Ok', click: function($noty) {
		  
// this = button element
// $noty = $noty element
		  
$noty.close();
noty({force: true, text: 'You clicked "Ok" button', type: 'success',layout : 'bottomLeft',modal : true,});
}
},
{type: 'button pink', text: 'Cancel', click: function($noty) {
$noty.close();
noty({force: true, text: 'You clicked "Cancel" button', type: 'error',layout : 'bottomLeft',modal : true,});
}
}
],
type : 'success'
});
});
	
/*======================
DRILL MINEU
========================	

// BUTTONS
$('.fg-button').hover(
function(){ $(this).removeClass('ui-state-default').addClass('ui-state-focus'); },
function(){ $(this).removeClass('ui-state-focus').addClass('ui-state-default'); }
);
    	
// MENUS    	
$('#flat').menu({ 
content: $('#flat').next().html(), // grab content from this page
showSpeed: 400 
});
		
$('#hierarchy').menu({
content: $('#hierarchy').next().html(),
crumbDefaultText: ' '
});
		
$('#hierarchybreadcrumb').menu({
content: $('#hierarchybreadcrumb').next().html(),
backLink: false
});
		
// or from an external source
$.get('menuContent.html', function(data){ // grab content from another page
$('#flyout').menu({ content: data, flyOut: true });
});

/*Colapsible Widget
$(".collapsible_widget").collapse({ head : ".widget_top",
group : ".widget_content", show: function(){
				
this.animate({
opacity: 'toggle', 
height: 'toggle'
}, 300);
},
hide : function() {
                    
this.animate({
opacity: 'toggle', 
height: 'toggle'
}, 300);
}
});

// Slider
$( "#slider-range" ).slider({
range: true,
min: 0,
max: 500,
values: [ 75, 300 ],
slide: function( event, ui ) {
$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
}
});
$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	
$( "#master" ).slider({
value: 60,
orientation: "horizontal",
range: "min",
animate: true
});
// setup graphic EQ
$( "#eq > span" ).each(function() {
// read initial values from markup and remove that
var value = parseInt( $( this ).text(), 10 );
$( this ).empty().slider({
value: value,
range: "min",
animate: true,
orientation: "vertical"
});
});
	
	
	
			
//CLE EDITOR
		
$("#txt_editor").cleditor({
width:"100%", 
height:"100%",
bodyStyle: "margin: 10px; font: 12px Arial,Verdana; cursor:text"
});
	
//TIPSY
$('.tip_top').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 's' });// nw | n | ne | w | e | sw | s | se
	
$('.go_to a').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 'e' });// nw | n | ne | w | e | sw | s | se

$('#primary_nav li a').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 'w' });// nw | n | ne | w | e | sw | s | se


$('.tipTop').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 's' });// nw | n | ne | w | e | sw | s | se

$('.tipLeft').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 'e' });// nw | n | ne | w | e | sw | s | se

$('.tipRight').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 'w' });// nw | n | ne | w | e | sw | s | se
	
$('.tipBot').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 'n'});// nw | n | ne | w | e | sw | s | se

$('.tipTopL').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 'sw' });// nw | n | ne | w | e | sw | s | se
	
$('.tipTopR').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 'se' });// nw | n | ne | w | e | sw | s | se

$('.tipBotL').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 'nw' });// nw | n | ne | w | e | sw | s | se

$('.tipBotR').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 'ne' });// nw | n | ne | w | e | sw | s | se

$('.action-icons').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 's' });// nw | n | ne | w | e | sw | s | se

$('.post_action_bar a, .invoice_action_bar a').tipsy({
title: 'title',
fade: 'out',     // fade tooltips in/out?
gravity: 's' });// nw | n | ne | w | e | sw | s | se




jQuery(function ($) {
$('#confirm-dialog input.confirm, #confirm-dialog a.confirm').click(function (e) {
e.preventDefault();

// example of calling the confirm function
// you must use a callback function to perform the "yes" action
confirm("Continue to the SimpleModal Project page?", function () {
window.location.href = 'http://www.ericmmartin.com/projects/simplemodal/';
});
});
});

function confirm(message, callback) {
$('#confirm').modal({
closeHTML: "<a href='#' title='Close' class='modal-close'>x</a>",
position: ["20%",],
overlayId: 'confirm-overlay',
containerId: 'confirm-container', 
onShow: function (dialog) {
var modal = this;

$('.message', dialog.data[0]).append(message);

// if the user clicks "yes"
$('.yes', dialog.data[0]).click(function () {
// call the callback
if ($.isFunction(callback)) {
callback.apply();
}
// close the dialog
modal.close(); // or $.modal.close();
});
}
});
}
*/




/*
* SimpleModal Basic Modal Dialog
* http://www.ericmmartin.com/projects/simplemodal/
* http://code.google.com/p/simplemodal/
*
* Copyright (c) 2010 Eric Martin - http://ericmmartin.com
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* Revision: $Id: basic.js 254 2010-07-23 05:14:44Z emartin24 $


jQuery(function ($) {
// Load dialog on page load
//$('#basic-modal-content').modal();

// Load dialog on click
$('.basic-modal').click(function (e) {
$('#basic-modal-content').modal();

return false;
});
}); 

// color picker

$('.colorpicker').colorpicker();*/

/*
$("#adv2").idTabs(function(id,list,set){ 
$("a",set).removeClass("selected") 
.filter("[href='"+id+"']",set).addClass("selected"); 
for(i in list) 
$(list[i]).hide(); 
$(id).fadeIn(); 
return false; 
}); 
  
$("#commentForm").validate();
$("#regitstraion_form").validate({
rules: {
name: "required",
username: {
required: true,
minlength: 2
},
password: {
required: true,
minlength: 5
},
confirm_password: {
required: true,
minlength: 5,
equalTo: "#password"
},
email: {
required: true,
email: true
},
agree: "required"
},
messages: {
name: "Please enter your firstname",
username: {
required: "Please enter a username",
minlength: "Your username must consist of at least 2 characters"
},
password: {
required: "Please provide a password",
minlength: "Your password must be at least 5 characters long"
},
confirm_password: {
required: "Please provide a password",
minlength: "Your password must be at least 5 characters long",
equalTo: "Please enter the same password as above"
},
email: "Please enter a valid email address",
agree: "Please accept our policy"
}
});
  
$(function() {
	
var container = $('div.container');
// validate the form when it is submitted
var validator = $("#form2").validate({
errorContainer: container,
errorLabelContainer: $("ol", container),
wrapper: 'li',
meta: "validate"
});
	
	
});
	
  
$("#form103").validate();

  
$(".elem_extend").EnableMultiField({
linkText: 'Add More',
linkClass: 'addMoreFields',
removeLinkText: 'Remove',
removeLinkClass: 'removeFields',
	
});


$('.item .delete').click(function(){
		
var elem = $(this).closest('.item');
		
$.confirm({
'title'		: 'Delete Confirmation',
'message'	: 'You are about to delete this item. <br />It cannot be restored at a later time! Continue?',
'buttons'	: {
'Yes'	: {
'class'	: 'btn_30_blue',
'action': function(){
elem.slideUp();
}
},
'No'	: {
'class'	: 'btn_30_blue',
'action': function(){}	// Nothing to do in this case. You can as well omit the action property.
}
}
});
		
});



$('.confirm_dialog').click(function(){
		
		
		
$.confirm({
'title'		: 'Delete Confirmation',
'message'	: 'You are about to delete this item. <br />It cannot be restored at a later time! Continue?',
'buttons'	: {
'Yes'	: {
'class'	: 'yes',
},
'No'	: {
'class'	: 'no',
'action': function(){}	// Nothing to do in this case. You can as well omit the action property.
}
}
});
		
});


//mosaic
$('.circle').mosaic({
opacity		:	0.8			//Opacity for overlay (0-1)
});
				
$('.fade').mosaic();
				
$('.bar').mosaic({
animation	:	'slide'		//fade or slide
});
				
$('.bar2').mosaic({
animation	:	'slide'		//fade or slide
});
				
$('.bar3').mosaic({
animation	:	'slide',	//fade or slide
anchor_y	:	'top'		//Vertical anchor position
});
				
$('.cover').mosaic({
animation	:	'slide',	//fade or slide
hover_x		:	'400px'		//Horizontal position on hover
});
				
$('.cover2').mosaic({
animation	:	'slide',	//fade or slide
anchor_y	:	'top',		//Vertical anchor position
hover_y		:	'80px'		//Vertical position on hover
});
				
$('.cover3').mosaic({
animation	:	'slide',	//fade or slide
hover_x		:	'400px',	//Horizontal position on hover
hover_y		:	'300px'		//Vertical position on hover
});
		 

	
	
$("#suggest1").focus().autocomplete(cities);
$("#month").autocomplete(months, {
minChars: 0,
max: 12,
autoFill: true,
mustMatch: true,
matchContains: false,
scrollHeight: 220,
formatItem: function(data, i, total) {
// don't show the current month in the list of values (for whatever reason)
if ( data[0] == months[new Date().getMonth()] ) 
return false;
return data[0];
}
});
$("#suggest13").autocomplete(emails, {
minChars: 0,
width: 310,
matchContains: "word",
autoFill: false,
formatItem: function(row, i, max) {
return i + "/" + max + ": \"" + row.name + "\" [" + row.to + "]";
},
formatMatch: function(row, i, max) {
return row.name + " " + row.to;
},
formatResult: function(row) {
return row.to;
}
});
$('.checkall').checkAll('.tr_select input:checkbox');	
	
});
	
$(function(){

// Blur images on mouse over
$(".portfolio a").hover( function(){ 
$(this).children("img").animate({ opacity: 0.75 }, "fast"); 
}, function(){ 
$(this).children("img").animate({ opacity: 1.0 }, "slow"); 
}); 
	

// Clone portfolio items to get a second collection for Quicksand plugin
var $portfolioClone = $(".portfolio").clone();
	
// Attempt to call Quicksand on every click event handler
$(".filter a").click(function(e){
		
$(".filter li").removeClass("current");	
		
// Get the class attribute value of the clicked link
var $filterClass = $(this).parent().attr("class");
var $filteredPortfolio ;
if ( $filterClass == "all" ) {
$filteredPortfolio = $portfolioClone.find("li");
} else {
$filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
}
		
// Call quicksand
$(".portfolio").quicksand( $filteredPortfolio, { 
duration: 800, 
easing: 'easeInOutQuad' 
}, function(){
			
// Blur newly cloned portfolio items on mouse over and apply prettyPhoto
$(".portfolio a").hover( function(){ 
$(this).children("img").animate({ opacity: 0.75 }, "fast"); 
}, function(){ 
$(this).children("img").animate({ opacity: 1.0 }, "slow"); 
}); 
			
});


$(this).parent().addClass("current");

// Prevent the browser jump to the link anchor
e.preventDefault();
});
});


*/




/*======================
DATA TABLE
========================
$(function() {
$('.data_tbl').dataTable({   
"sPaginationType": "full_numbers",
"iDisplayLength": 10,
"oLanguage": {
"sLengthMenu": "<span class='lenghtMenu'> _MENU_</span><span class='lengthLabel'>Entries per page:</span>",	
},
"sDom": '<"table_top"fl<"clear">>,<"table_content"t>,<"table_bottom"p<"clear">>'
	 
});
$("div.table_top select").addClass('tbl_length');
$(".tbl_length").chosen({
disable_search_threshold: 4	
});
		
});
	

$(function() {
	
	
$('#data_tbl_tools').dataTable({   
"sPaginationType": "full_numbers",
"iDisplayLength": 10,
"oLanguage": {
"sLengthMenu": "<span class='lenghtMenu'> _MENU_</span><span class='lengthLabel'>Entries per page:</span>",	
},
"sDom":  '<"table_top"fl<"clear">>,<"tbl_tools"CT<"clear">>,<"table_content"t>,<"table_bottom"p<"clear">>',
				
"oTableTools": {
"sSwfPath": "copy_cvs_xls_pdf.swf" 
}
} );
$("div.table_top select").addClass('tbl_length');
$(".tbl_length").chosen({
disable_search_threshold: 4	
});		
});
	

	
$(function() {
$('#action_tbl').dataTable({   
"aoColumnDefs": [
{ "bSortable": false, "aTargets": [ 0 , 7 ] }
],
"aaSorting": [[1, 'asc']],
"sPaginationType": "full_numbers",
"iDisplayLength": 10,
"oLanguage": {
"sLengthMenu": "<span class='lenghtMenu'> _MENU_</span><span class='lengthLabel'>Entries per page:</span>",	
},
"sDom": '<"table_top"fl<"clear">>,<"table_content"t>,<"table_bottom"p<"clear">>'
	 
});
$("div.table_top select").addClass('tbl_length');
$(".tbl_length").chosen({
disable_search_threshold: 4	
});
		
});
	
$(function() {
	
$('.data_editable').dataTable({   
"sPaginationType": "full_numbers",
"iDisplayLength": 10,
"oLanguage": {
"sLengthMenu": "<span class='lenghtMenu'> _MENU_</span><span class='lengthLabel'>Entries per page:</span>",	
},
"sDom": '<"table_top"fl<"clear">>,<"table_content"t>,<"table_bottom"p<"clear">>'
/*
"fnDrawCallback": function () {
$('.data_editable tbody td').editable();
},
	 
});
$("div.table_top select").addClass('tbl_length');
$(".tbl_length").chosen({
disable_search_threshold: 4	
});
/* Apply the jEditable handlers to the table 
$('.data_editable td').editable( '../examples_support/editable_ajax.php', {
"callback": function( sValue, y ) {
var aPos = oTable.fnGetPosition( this );
oTable.fnUpdate( sValue, aPos[0], aPos[1] );
},
"submitdata": function ( value, settings ) {
return {
"row_id": this.parentNode.getAttribute('id'),
"column": oTable.fnGetPosition( this )[2]
};
}
} );		
			
});
	
	
$(function() {
	
$('.data_tbl_search').dataTable({   
"bPaginate": false,
"bLengthChange": false,
"bFilter": true,
"bSort": false,
"bInfo": false,
"bAutoWidth": false,
"oLanguage": {
"sLengthMenu": "<span class='lenghtMenu'> _MENU_</span><span class='lengthLabel'>Entries per page:</span>",	
},
"sDom": '<"table_top"fl<"clear">>,<"table_content"t>'
	 
});		
		
	
	
});
	
	
/* Formating function for row details 
function fnFormatDetails ( oTable, nTr )
{
var aData = oTable.fnGetData( nTr );
var sOut = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
sOut += '<tr><td>Rendering engine:</td><td>'+aData[1]+' '+aData[4]+'</td></tr>';
sOut += '<tr><td>Link to source:</td><td>Could provide a link here</td></tr>';
sOut += '<tr><td>Extra info:</td><td>And any further details here (images etc)</td></tr>';
sOut += '</table>';
     
return sOut;
}
 
$(function() {
/*
* Insert a 'details' column to the table
   
var nCloneTh = document.createElement( 'th' );
var nCloneTd = document.createElement( 'td' );
nCloneTd.innerHTML = '<img src="images/details_open.png">';
nCloneTd.className = "center";
     
$('.tbl_details thead tr').each( function () {
this.insertBefore( nCloneTh, this.childNodes[0] );
} );
     
$('.tbl_details tbody tr').each( function () {
this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
} );
     
/*
* Initialse DataTables, with no sorting on the 'details' column
    
var oTable = $('.tbl_details').dataTable( {
		
"aoColumnDefs": [
{ "bSortable": false, "aTargets": [ 0 ] }
],
"aaSorting": [[1, 'asc']],
"sPaginationType": "full_numbers",
"iDisplayLength": 10,
"oLanguage": {
"sLengthMenu": "<span class='lenghtMenu'> _MENU_</span><span class='lengthLabel'>Entries per page:</span>",	
},
"sDom": '<"table_top"fl<"clear">>,<"table_content"t>,<"table_bottom"p<"clear">>'

		
		
});
$("div.table_top select").addClass('tbl_length');
$(".tbl_length").chosen({
disable_search_threshold: 4	
});
     
/* Add event listener for opening and closing details
* Note that the indicator for showing which row is open is not controlled by DataTables,
* rather it is done here
    
$('.tbl_details tbody td img').live('click', function () {
var nTr = $(this).parents('tr')[0];
if ( oTable.fnIsOpen(nTr) )
{
/* This row is already open - close it 
this.src = "images/details_open.png";
oTable.fnClose( nTr );
}
else
{
/* Open this row
this.src = "images/details_close.png";
oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
}
} );
} );
	



$(function() {
/* tells us if we dragged the box 
var dragged = false;
				
/* timeout for moving the mox when scrolling the window 
var moveBoxTimeout;
				
/* make the actionsBox draggable 
$('#actionsBox').draggable({
start: function(event, ui) {
dragged = true;
},
stop: function(event, ui) {
var $actionsBox = $('#actionsBox');
/*
calculate the current distance from the window's top until the element
this value is going to be used further, to move the box after we scroll
                        
$actionsBox.data('distanceTop',parseFloat($actionsBox.css('top'),10) - $(document).scrollTop());
}
});
				
/*
when clicking on an input (checkbox),
change the class of the table row,
and show the actions box (if any checked)
                
$('#action_tbl input[type="checkbox"]').bind('click',function(e) {
var $this = $(this);
if($this.is(':checked'))
$this.parents('tr:first').addClass('selected');
else
$this.parents('tr:first').removeClass('selected');
showActionsBox();
});
				
function showActionsBox(){
/* number of checked inputs 
var BoxesChecked = $('#action_tbl input:checked').length;
/* update the number of checked inputs 
$('#cntBoxMenu').html(BoxesChecked);
/*
if there is at least one selected, show the BoxActions Menu
otherwise hide it
                     
var $actionsBox = $('#actionsBox');
if(BoxesChecked > 0){
/*
if we didn't drag, then the box stays where it is
we know that that position is the document current top
plus the previous distance that the box had relative to the window top (distanceTop)
                       
if(!dragged)
$actionsBox.stop(true).animate({'top': parseInt(15 + $(document).scrollTop()) + 'px','opacity':'1'},500);
else
$actionsBox.stop(true).animate({'top': parseInt($(document).scrollTop() + $actionsBox.data('distanceTop')) + 'px','opacity':'1'},500);
}
else{
$actionsBox.stop(true).animate({'top': parseInt($(document).scrollTop() - 50) + 'px','opacity':'0'},500,function(){
$(this).css('left','50%');
dragged = false;
/* if the submenu was open we hide it again 
var $toggleBoxMenu = $('#toggleBoxMenu');
if($toggleBoxMenu.hasClass('closed')){
$toggleBoxMenu.click();
}
});
}
}
				
/*
when scrolling, move the box to the right place
                
$(window).scroll(function(){
clearTimeout(moveBoxTimeout);
moveBoxTimeout = setTimeout(showActionsBox,500);
});
				
/* open sub box menu for other actions
$('#toggleBoxMenu').toggle(
function(e){
$(this).addClass('closed').removeClass('open');
$('#actionsBox .submenu').stop(true,true).slideDown();
},
function(e){
$(this).addClass('open').removeClass('closed');
$('#actionsBox .submenu').stop(true,true).slideUp();
}
);
				
/*
close the actions box menu:
hides it, and then removes the element from the DOM,
meaning that it will no longer appear
                
$('#closeBoxMenu').bind('click',function(e){
$('#actionsBox').animate({'top':'-50px','opacity':'0'},1000,function(){
$(this).remove();
});
});
				
/*
as an example, for all the actions (className:box_action)
alert the values of the checked inputs
                
$('#actionsBox .box_action').bind('click',function(e){
var ids = '';
$('#action_tbl input:checked').each(function(e,i){
var $this = $(this);
ids += 'id : ' + $this.attr('id') + ' , value : ' + $this.val() + '\n';
});
alert('checked inputs:\n'+ids);
}); */