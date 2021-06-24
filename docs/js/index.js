
// 追従ナビ・スマホでハンバーガーメニューになる
(function ($) {
    $(function () {
        var $header = $('#head_wrap');
        var $mobile_head = $('#mobile-head');
        // Nav Fixed
        $(window).scroll(function () {
            if ($(window).scrollTop() > 650) {
                $header.addClass('fixed');
                console.log("fixed");
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle, #global-nav ul li a').click(function () {
            $header.toggleClass('open');
            $mobile_head.toggleClass('color-key');
        });
    });
})(jQuery);

// ゆっくりスクロールする
$(function () {
    $('a[href^="#"]').click(function () {
        var adjust = 0;
        var speed = 1200;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

/*---------topへ戻るボタン-------------*/
function getScrolled() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop;
}

//トップに戻るボタンの要素を取得
var topButton = document.getElementById('js-scroll-fadein');

//ボタンの表示・非表示
window.onscroll = function () {
    (getScrolled() > 500) ? topButton.classList.add('is-fadein') : topButton.classList.remove('is-fadein');
};

//トップに移動する関数
function scrollToTop() {
    var scrolled = getScrolled();
    window.scrollTo(0, Math.floor(scrolled / 2));
    if (scrolled > 0) {
        window.setTimeout(scrollToTop, 30);
    }
};

//イベント登録
topButton.onclick = function () {
    scrollToTop();
};




/*---------Swiper.js　スライドショー-------------*/

window.addEventListener('DOMContentLoaded', function () {
    var swiper06Main = new Swiper('.sample06 .main', {

        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    })

    var swiper06Thumb = new Swiper('.sample06 .thumbnail', {

        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 4,
        slideToClickedSlide: true,
    });
    swiper06Main.params.control = swiper06Thumb;
    swiper06Thumb.params.control = swiper06Main;
}, false);
