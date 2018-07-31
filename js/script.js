var cart = [];
var sum = 0;


$(document).ready(function () {
    $(".buy").click(function () {
        var id = $(this).parents("div").eq(1).attr('id').replace("id-", "");
        if (typeof cart[id] === 'undefined') {
            cart[id] = 1;
        } else {
            cart[id]++;
        }
        cartItemsCount();
    });

    $("#view-cart").click(function () {
        dispayCart();
        toggleTable();
    });

    $(document).on("click", ".delete", function () {
        var id = $(this).closest("tr").attr('id').replace("cartId-", "");
        delete cart[id];
        cartItemsCount();
        dispayCart();
    });

    $("#close").click(function () {
        toggleTable();
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

function toggleTable() {
    $('#cart-section').toggleClass("hide");
}

function cartItemsCount() {
    $.ajax({
        method: "POST",
        url: "shopscript/shop.php",
        data: {crt: cart}
    }).done(function (itemCount) {
        $("#view-cart").text("Корзина (" + itemCount + ")");
    });
}