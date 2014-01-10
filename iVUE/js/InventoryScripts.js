var mytable;
var CartItems;
$( function ()
{
    $( "#datepicker" ).datepicker( {
        minDate: 0
    } );
    $( "#datepicker" ).mask( "99/99/9999" );
    $( "#zipcode" ).mask( "99999-9999" );
    $( '#widget_tab ul' ).idTabs();
    $( '#widget_leftTab ul' ).idTabs( function ( id, list, set )
    {
        $( "a", set ).removeClass( "p_selected" )
    .filter( "[href='" + id + "']", set ).addClass( "p_selected" );
        for ( i in list )
            $( list[i] ).hide();
        $( id ).fadeIn();
        return false;
    } );


    jQuery( function ( $ )
    {

        var OSX = {
            container: null,
            init: function ()
            {
                $( ".showme" ).click( function ( e )
                {
                    //    debugger;

                    $( "#osx-modal-content" ).modal( {
                        overlayId: 'osx-overlay',
                        containerId: 'osx-container',
                        closeHTML: null,
                        minHeight: 80,
                        opacity: 65,
                        persist: true,
                        position: ['0', ],
                        overlayClose: true,
                        onOpen: OSX.open,
                        onClose: OSX.close
                    } );
                } );
            },
            open: function ( d )
            {
                //    debugger;
                var self = this;
                self.container = d.container[0];
                d.overlay.fadeIn( 'fast', function ()
                {
                    $( "#osx-modal-content", self.container ).show();
                    var title = $( "#osx-modal-title", self.container );
                    title.show();
                    d.container.slideDown( 'fast', function ()
                    {
                        setTimeout( function ()
                        {
                            var h = $( "#osx-modal-data", self.container ).height()
							+ title.height()
							+ 20; // padding
                            d.container.animate( 
							{ height: h },
							200,
							function ()
							{
							    $( "div.close", self.container ).show();
							    $( "#osx-modal-data", self.container ).show();
							}
						);
                        }, 300 );
                    } );
                } )
            },
            close: function ( d )
            {
                //    debugger;
                var self = this; // this = SimpleModal object
                d.container.animate( 
				{ top: "-" + ( d.container.height() + 20 ) },
				500,
				function ()
				{
				    self.close(); // or $.modal.close();
				}
			);
            }
        };

        OSX.init();

    } );





} );

function showTabs()
{
//    //    debugger;
    var tab2 = $( '#tab_2' );
    var tab3 = $( '#tab_3' );
    $( '#projectId' ).val( 12 );
    tab2.show();
    var tablink = $( 'a[href="#tab2"]' );
    tablink.click();
}

function cbChange( cb )
{
    var td;
    //    debugger;
    var mytable = $( '#data_tbl_tools' ).dataTable();
    $.each( mytable.fnGetNodes(), function ( i, row )
    {
        //    debugger;
        if ( cb.checked )
        {
            $( this ).find( 'td:eq(1)' ).find( '.tipTop.itemimg2hidden' ).removeClass( "itemimg2hidden" ).addClass( "itemimg2" );
        } else
        {
            $( this ).find( 'td:eq(1)' ).find( '.tipTop.itemimg2' ).removeClass( "itemimg2" ).addClass( "itemimg2hidden" );
        }
    } );
    if ( cb.checked )
    {
        $( 'select[name="data_tbl_tools_length"]' ).prop( 'selectedIndex', 0 );
        var tblsettings = mytable.fnSettings();
        tblsettings._iDisplayLength = 5;
        mytable.fnDraw();
    } else
    {
        $( 'select[name="data_tbl_tools_length"]' ).prop( 'selectedIndex', 1 );
        var tblsettings = mytable.fnSettings();
        tblsettings._iDisplayLength = 10;
        mytable.fnDraw();
    }
    var offsets = $( '#itemDetails' ).offset();
    var x, y;
    x = offsets.left;
    y = offsets.top;
    $( '#itemDetails' ).css( {
        position: 'fixed',
        left: "'" + x + "px'",
        top: "'" + y + "px'"
    } );
}

function ItemClass( e, t )
{
    this.id = e.replace( 'qty', '' );
    this.qty = t;
}

function cartClear()
{
    $( "#tblCart" ).html( "" );
    $( "#counter" ).html( "0" );
}

function OnError( e, t )
{
    alert( "An Error has Occurred" );
}

function UserName( e )
{
    $.ajax( {
        url: "BaseClasses.aspx/GetUserName",
        type: "POST",
        data: "{UserID:" + e + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function ( e )
        {
            $( "#currentUser" ).html( e.d );
        },
        error: OnError
    } );
}

function cartSave()
{
    //    debugger;
    var e = new Object( {} );
    e.CompanyId = localStorage["companyID"];
    e.ProjectId = $( '#projectId' ).val();
    e.items = [];
    var t = $( "#tblCart tr" ).each( function ()
    {
        var t = $( this );
        var n = new ItemClass( t.find( "input" ).attr( "id" ), t.find( "input" ).val() );
        //    debugger;
        e.items.push( n );
        return $( this ).text();
    } ).get();
    var n = new Object( {} );
    n.Cart = e;
    var r = JSON.stringify( n );
    $.ajax( {
        contentType: "application/json; charset=utf-8",
        data: r,
        dataType: "json",
        type: "POST",
        url: "BaseClasses.aspx/SaveCart"
    } );
}

function setRowSelect()
{
    //    debugger;
    $( "#data_tbl_tools tbody" ).click( function ( event )
    {
        $( oTable.fnSettings().aoData ).each( function ()
        {
            $( this.nTr ).removeClass( 'row_selected' );
        } );
        $( event.target.parentNode ).addClass( 'row_selected' );
    } );
}

function MakeTable( e )
{
    $.ajax( {
        type: "POST",
        url: "BaseClasses.aspx/GetInventory",
        data: "{CompanyID:" + e + "}",
        beforeSend: function ()
        {
            $( ".loader" ).toggle();
        },
        complete: function ()
        {
            $( ".loader" ).toggle();
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function ( e )
        {
            BuildTable( e.d );
        },
        error: OnError
    } );
}

function LoadCompanyDropDown()
{
    $.ajax( {
        url: "BaseClasses.aspx/GetCompanies",
        type: "POST",
        data: JSON.stringify( {
            foo: null
        } ),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function ( e )
        {
            OnSuccess( e.d );
        },
        error: OnError
    } );
}

function OnSuccess( e )
{
    var t = $( "#selCompanies" );
    t.empty().append( '<option value="-1">Select a Company...</option>' );
    for ( var n in e )
    {
        t.append( $( "<option></option>" ).val( e[n].ID ).html( e[n].Name ) );
    }
    t.append( $( "<option></option>" ).val( "0" ).html( "Show All" ) );
}

function showDetails( e )
{
    //    debugger;
    var Mfg, MfgNumber, itemDescription, assetType, productImage, id, td, tblRow, img, TagNum, FinFab, Color, Height, Width, Condition, Depth, Qty, Hold, Available;
    var row = $( e );
    row.click();
    id = e.id;
    tblRow = document.getElementById( id );
    var RowData = mytable.fnGetData( tblRow );
    productImage = document.getElementById( "img_" + id );
    img = document.getElementById( "productImage" );
    img.src = productImage.src;
    itemDescription = document.getElementById( 'itemDescription' );
    itemDescription.innerHTML = $.trim( RowData[11] );
    assetType = document.getElementById( 'assetType' );
    assetType.innerHTML = $.trim( RowData[4] );
    Mfg = document.getElementById( 'Mfg' );
    Mfg.innerHTML = $.trim( RowData[5] );
    Qty = document.getElementById( 'qty' );
    Qty.innerHTML = $.trim( RowData[6] );
    Hold = document.getElementById( 'held' );
    Hold.innerHTML = $.trim( RowData[7] );
    Available = document.getElementById( 'avail' );
    Available.innerHTML = $.trim( RowData[8] );
    MfgNumber = document.getElementById( 'MfgNumber' );
    MfgNumber.innerHTML = $.trim( RowData[13] );
    TagNum = document.getElementById( 'TagNum' );
    TagNum.innerHTML = $.trim( RowData[10] );
    FinFab = document.getElementById( 'FinFab' );
    FinFab.innerHTML = $.trim( RowData[14] );
    Color = document.getElementById( 'Color' );
    Color.innerHTML = $.trim( RowData[15] );
    Height = document.getElementById( 'Height' );
    Height.innerHTML = $.trim( RowData[2] );
    Width = document.getElementById( 'Width' );
    Width.innerHTML = $.trim( RowData[3] );
    Depth = document.getElementById( 'Depth' );
    Depth.innerHTML = $.trim( RowData[17] );
    Condition = document.getElementById( 'Condition' );
    Condition.innerHTML = $.trim( RowData[16] );
    var offsets = $( '#itemDetails' ).offset();
    var x, y;
    x = offsets.left;
    y = offsets.top;
    $( '#itemDetails' ).css( {
        position: 'fixed',
        left: "'" + x + "px'",
        top: "'" + y + "px'"
    } );
    $( '#details_wrap' ).show();
}

function AddRow( e, t, qty )
{
    //    debugger;
    var n = "qty" + e;
    var r = document.getElementById( n );
    if ( $( r ).val() === undefined )
    {
        var i = $( "#tblCart >tbody >tr" ).length + 1;
        var s = '<tr id="row_' + i + '"><td style="width:50px"><input onfocus="this.select()" onMouseUp="return false" style="width:25px; margin-left:5px" id=qty' + e + ' type="text" value=' + qty + '  /></td><td style="width:100px">' + e + '</td><td style="width:384px">' + t + '</td><td class="tipTop" title="Delete Item" id="cell_' + i + '"><img class="deleteRow" src="http://wegmancompany.com/Inventory/images/delete_file_icon%2020x20.png" onclick="deleteRow(this)";/></td></tr>';
        $( "#tblCart" ).append( s );
    } else
    {
        var o = $( r ).val();
        o = ++o;
        $( r ).val( o );
    }
    var u = $( "#tblCart >tbody >tr" ).length;
    $( "#counter" ).html( u );
    var a = "#row_" + u;
}

function deleteRow( e )
{
    var t = e.parentNode.parentNode.rowIndex;
    document.getElementById( "tblCart" ).deleteRow( t );
    var n = $( "#tblCart >tbody >tr" ).length;
    $( "#counter" ).html( n );
}

function imageClick( e )
{
    //    debugger;
    var t = mytable.fnGetData( $( $( $( e ).parent() ).parent() ).parent()[0] );
    var n = t.length;
    var qty = $( e ).parent().find( 'input' ).val();
    if ( isNaN( qty ) )
    {
        qty = 1;
        $( e ).parent().find( 'input' ).val( 1 );
    } else if ( qty < 1 )
    {
        qty = 1;
        $( e ).parent().find( 'input' ).val( 1 );
    }
    var r = t[9];
    var i = t[11];
    var s = t[8];
    var o = $( "#top_notification" );
    var u = $( "#tableholder" );
    var a = $( e ).offset();
    var f = a.left;
    var l = a.top;
    var c = document.createElement( "div" );
    c.innerHTML = "<span>" + i + "</span>";
    AddRow( r, i, qty );
    var h = $( c ).clone().offset( {
        top: l,
        left: f
    } ).css( {
        opacity: "1",
        position: "absolute",
        height: "25px",
        width: "150px",
        color: "blue",
        "z-index": "99999"
    } ).appendTo( $( "body" ) ).animate( {
        top: o.offset().top,
        left: o.offset().left,
        width: 75,
        height: 75
    }, 750, "easeInOutExpo" );
    setTimeout( function ()
    {
        o.effect( "shake", {
            times: 1
        }, 100 );
    }, 500 );
    h.animate( {
        width: 0,
        height: 0
    }, function ()
    {
        $( this ).detach();
    } );
}

function BuildTable( e )
{
    var t = $( "#selCompanies option:selected" ).text();
    var n = '<table class="display" id="data_tbl_tools"><thead><tr><th>&nbsp;</th><th>Item</th><th>H</th><th>W</th><th>Type</th><th>Mfg</th><th>Qty</th><th>Hold</th><th>Avail</th></tr><th>Qty+</th><th>Item</th><th>H</th><th>W</th><th>Type</th><th>Mfg</th><th>Qty</th><th>Hold</th><th>Avail</th></tr></thead><tbody>';
    for ( var r in e )
    {
        var i = "<tr data-id=" + e[r].ItemID + ' id="' + e[r].ItemID + '" >';
        i += '<td>' + '<div class= "addItem"><input name="qty" id="qty_' + e[r].ItemID + '"/>';
        i += '<button type="button" name="addButton" class="tipTop" title="Add to Cart" onclick="imageClick(this)";><img src="http://wegmancompany.com/Inventory/images/add_icon.png" alt="Add Item" /></button></div></td>';
        i += '<td><img  class="tipTop itemimg2" title="Click for Details" id="img_' + e[r].ItemID + '" src="' + e[r].ImageFile + '" onclick="showDetails(' + e[r].ItemID + ');"/><span class="tiptop description" title="Click for Details" onclick="showDetails(' + e[r].ItemID + ');"><b>' + $.trim( e[r].Item ) + "</b></span></td>";
        i += '<td class="center">' + e[r].Height + "</td>";
        i += '<td class="center">' + e[r].Width + "</td>";
        i += '<td class="center">' + e[r].AssetType + "</td>";
        i += '<td class="center" >' + e[r].Mfg + "</td>";
        i += '<td class="center">' + e[r].TotalItems + "</td>";
        i += '<td class="center">' + e[r].OnHold + "</td>";
        i += '<td class="center">' + e[r].Available + "</td>";
        i += "<td>" + e[r].ItemID + "</td>";
        i += "<td>" + e[r].TagNumber + "</td>";
        i += "<td>" + e[r].Item + "</td>";
        i += "<td>" + e[r].CompanyID + "</td>";
        i += "<td>" + e[r].MfgNumber + "</td>";
        i += "<td>" + e[r].FinFab + "</td>";
        i += "<td>" + e[r].Color + "</td>";
        i += "<td>" + e[r].Condition + "</td>";
        i += "<td>" + e[r].Depth + "</td>";
        i += "</tr>";
        n += i;
    }
    n += "<tfoot><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tfoot></tbody></table>";
    $( "#tableholder" ).html( n );
    mytable = $( "#data_tbl_tools" ).dataTable( {
        bAutoWidth: false,
        aLengthMenu: [
            [5, 10, 15, -1],
            [5, 10, 15, "All"]
        ],
        iDisplayLength: 5,
        sPaginationType: "full_numbers",
        aoColumns: [{
            bVisible: true
        }, {
            bVisible: true
        }, {
            bVisible: true
        }, {
            bVisible: true
        }, {
            bVisible: true
        }, {
            bVisible: true
        }, {
            bVisible: true
        }, {
            bVisible: true
        }, {
            bVisible: true
        }, {
            bVisible: false
        }, {
            bVisible: false
        }, {
            bVisible: false
        }, {
            bVisible: false
        }, {
            bVisible: false
        }, {
            bVisible: false
        }, {
            bVisible: false
        }, {
            bVisible: false
        }, {
            bVisible: false
        }]
    } ).columnFilter( {
        sPlaceHolder: "head:after",
        aoColumns: [null,
        {
            type: "text"
        }, {
            type: "text"
        }, {
            type: "text"
        }, {
            type: "select",
            values: ["Accessory", "Based Power", "Bookcase", "Bridge", "Cabinet", "Chair", "Conference Table", "Connector", "Credenza", "Desk", "Drawer", "Electrical", "File", "Finished End", "Flipper Door", "Keyboard Tray", "Lateral Files", "Leg Base", "Misc", "Outlet Cover", "Overhead", "Overhead Storage", "Panel", "Pedestal File", "Pinboard", "Privacy Screen", "Recptacle Duplex", "Return", "Shelf", "Table", "Task Light", "Tile", "Tool Bar", "Top Cap", "Track", "Transaction Top", "Trim", "Vertical File", "Wall Frame", "Wall Track", "Whiteboard", "Work Surface Leg", "Worksurface"]
        }, {
            type: "text"
        }, {
            type: "text"
        }, {
            type: "text"
        }, {
            type: "text"
        }, {
            type: "text"
        }]
    } );
    setRowSelect();
}