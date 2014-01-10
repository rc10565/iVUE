var mytable;
var CartItems;

$(document).ready(function () {


    LoadCompanyDropDown();
    //    debugger;
    $('#selCompanies').change(function UpdateTable() {

        var CompanyID = $('#selCompanies').val();
        MakeTable(CompanyID)
        var text = $("#selCompanies option:selected").text();
        $('#CurrentCompany').html('Showing Inventory for : ' + text);
    });


});





function MakeTable(CompanyID) {
    $.ajax({
        type: 'POST',
        url: 'wegInventory_srvc.asmx/GetInventory',
        data: "{CompanyID:" + CompanyID + "}",
        contentType: 'application/json; charset=utf-8',
        dataType: "json",
        success: function (msg) { BuildTable(msg.d); }

    });
};

function LoadCompanyDropDown() {
    //    debugger;
    $.ajax({
        url: 'wegInventory_srvc.asmx/GetCompanies',
        type: 'POST',
        data: JSON.stringify({ foo: null }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg) { OnSuccess(msg.d); },
        error: OnError

    });


};



function OnSuccess(msg) {
    //    debugger;

    var $select = $('#selCompanies');
    $select.empty().append('<option value="-1">Select a Company...</option>');
    for (var post in msg) { $select.append($("<option></option>").val(msg[post].ID).html(msg[post].Company)); }

    //    debugger;
    $select.append($("<option></option>").val('0').html("Show All"));



};





function OnError(data, status) {
    //    debugger;
    alert('An Error has Occurred');

};
function BuildTable(msg) {
    //    debugger;
    var table = '<table class="display" id="data_tbl_tools" <thead><tr><th>Item ID</th><th>Tag Number</th><th>Item</th><th>Total Items</th><th>On Hold</th> <th>Available</th><th>Asset Type</th></tr><tr><th>Item ID</th><th>Tag Number</th><th>Item</th><th>Total Items</th><th>On Hold</th> <th>Available</th><th>Asset Type</th></tr></thead><tboby>'
    for (var post in msg) {
        var row = '<tr data-id=' + msg[post].ItemID + ' id="' + msg[post].ItemID + '" >';
        row += '<td>' + msg[post].ItemID + '</td>';
        row += '<td>' + msg[post].TagNumber + '</td>';
        row += '<td>' + msg[post].Item + '</td>';
        row += '<td>' + msg[post].TotalItems + '</td>';
        row += '<td>' + msg[post].OnHold + '</td>';
        row += '<td>' + msg[post].Available + '</td>';
        row += '<td>' + msg[post].AssetType + '</td>';
        row += '</tr>';
        table += row;
    }

    table += '</tbody></table>';

    $('#tbl').html(table);

    mytable = $('#data_tbl_tools').dataTable({

        "sPaginationType": "full_numbers"
    }).columnFilter({ sPlaceHolder: "head:after", "bAutoWidth": false,
        aoColumns: [
                                                                         { type: "text" },
                                                                         { type: "text" },
                                                                         { type: "text" },
																		  { type: "text" },
																		    { type: "text" },
                                                                              { type: "text" },
                                                                                { type: "select", values: ['Accessory',
'Based Power',
'Bookcase',
'Bridge',
'Cabinet',
'Chair',
'Conference Table',
'Connector',
'Credenza',
'Desk',
'Drawer',
'Electrical',
'File',
'Finished End',
'Flipper Door',
'Keyboard Tray',
'Lateral Files',
'Leg Base',
'Misc',
'Outlet Cover',
'Overhead',
'Overhead Storage',
'Panel',
'Pedestal File',
'Pinboard',
'Privacy Screen',
'Recptacle Duplex',
'Return',
'Shelf',
'Table',
'Task Light',
'Tile',
'Tool Bar',
'Top Cap',
'Track',
'Transaction Top',
'Trim',
'Vertical File',
'Wall Frame',
'Wall Track',
'Whiteboard',
'Work Surface Leg',
'Worksurface']
                                                                                }
                                                                         ]
    });
    //            $(mytable.fnGetNodes()).draggable({

    //                opacity: 0.7,
    //                revert: true,
    //                cursor: 'pointer',
    //                helper: function () {
    //                    var text = this.children[0].innerText;
    //                    var result = "<span id='" + this.id + "'>" + text + "</span>";
    //                    return result;
    //                } 
    //            });




    // jQuery Ui Droppable
    //            $(".basket").droppable({
    //                greedy: true,
    //                // The class that will be appended to the to-be-dropped-element (basket)
    //                activeClass: "active",

    //                // The class that will be appended once we are hovering the to-be-dropped-element (basket)
    //                hoverClass: "hover",

    //                // The acceptance of the item once it touches the to-be-dropped-element basket
    //                // For different values http://api.jqueryui.com/droppable/#option-tolerance
    //                tolerance: 'fit',
    //                drop: function (event, ui) {
    //                    // var target = $(event.target);
    //                    var basket = $(this),
    //				move = ui.draggable;

    //                    itemId = basket.find("ul li[id='" + move.attr("data-id") + "']");

    //                    // To increase the value by +1 if the same item is already in the basket
    //                    if (itemId.html() != null) {
    //                        itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);
    //                    }
    //                    else {
    //                        // Add the dragged item to the basket
    //                        addBasket(basket, move);

    //                        //Updating the quantity by +1" rather than adding it to the basket
    //                        move.find("input").val(parseInt(move.find("input").val()) + 1);
    //                    }
    //                }
    //            });


    //            function addBasket(basket, move) {

    //                basket.find("ul").append('<li id="' + move.attr("data-id") + '">'
    //            + '<span class="name">' + move.find("td").html() + '</span>'
    //            + '<input id="' + move.attr("data-id") + '"class="qty" value=1 type="text">'
    //					+ '<button class="delete">&#10005;</button>');


    //            }


    //            // The function that is triggered once delete button is pressed
    //            $(".basket ul li button.delete").live("click", function () {
    //                $(this).closest("li").remove();
    //            });
    //            OpenNoty();
}