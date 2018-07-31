<?php

session_start();
$filteredCart = filter_input(INPUT_POST, 'crt', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);
if (empty($filteredCart)) {
    $_SESSION['cart'] = array();
    echo 0;
    die();
}
$items = $filteredCart;
$itemsCount = 0;
for ($i = 0; $i < count($items); $i++) {
    $itemsCount = !empty($items[$i]) ? $itemsCount + $items[$i] : $itemsCount;
}
$_SESSION['cart'] = $items;
echo $itemsCount;
