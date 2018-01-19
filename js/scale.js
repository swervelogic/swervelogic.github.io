$(function () {
    var $w = $(window).width();
    if ($w < 1400) {
        $('.intro').css("background-image", "url(img/intro-667.jpg)");
    }
    else {
        $('.intro').css("background-image", "url(img/intro-1334.jpg)");
    }
});