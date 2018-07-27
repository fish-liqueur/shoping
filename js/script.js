var cart = [];
var sum = 0;

$(document).ready(function () {
    $(".buy").click(function () {
        var id = $(this).closest("div").attr('id').replace("id-", "");
        if (typeof cart[id] === 'undefined') {
            cart[id] = 1;
        } else {
            cart[id]++;
        }
    });

    $("#view-cart").click(function () {
        dispayCart();
    });

    $(document).on("click", ".delete", function () {
        console.log('hoho');
        var id = $(this).closest("tr").attr('id').replace("cartId-", "");
        delete cart[id];
        dispayCart();
    });


});

function tableRowAdd(itemsId) {
    var itemName = $("#id-" + itemsId + " h3").text();
    var itemPrice = Number($("#id-" + itemsId + " .price").text());
    sum = sum + cart[itemsId] * itemPrice;
    return "<tr id='cartId-" + itemsId + "'><td>" + itemName + "</td><td>" + cart[itemsId] + "</td><td>" + itemPrice + "</td><td>" + cart[itemsId] * itemPrice + "</td><td><button class='delete'>X</button></td></tr>";
}

function dispayCart() {
    $("#cart-contents").text("");
    sum = 0;
    for (var itemsId = 0; itemsId < cart.length; itemsId++) {
        if (typeof cart[itemsId] !== 'undefined') {
            $("#cart-contents").append(tableRowAdd(itemsId));
        }
    }
    $("#summa").text(sum);
}