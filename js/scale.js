$(function () {
    var $w = $(window).width();
    if ($w < 1400) {
        $('.intro').css("background-image", "url(img/intro-667.png)");
    }
    else {
        $('.intro').css("background-image", "url(img/intro-1334.png)");
    }
});
