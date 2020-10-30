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
/*
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
        slideToClickedSlide: true
    });
    swiper06Main.params.control = swiper06Thumb;
    swiper06Thumb.params.control = swiper06Main;
}, false);*/

/*
$(function () {
    $('.thumb-item').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumb-item-nav',//サムネイルのクラス名
        responsive: [{
            breakpoint: 768,
            settings: 'unslick'
        }]
    });
    $('.thumb-item-nav').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.thumb-item', //スライダー本体のクラス名
        focusOnSelect: true,
    });


    $(window).on('resize orientationchange', function () {
        $('.thumb-item').slick('resize');
    });
});*/
/*slick.min.js:1 Uncaught TypeError: Cannot read property 'add' of null at Object.e.initADA (slick.min.js:1)
https://www.proglad.tokyo/2017/08/slickjs-uncaught-typeerror-cannot-read.html */



/*var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-my-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<img src="https://haniwaman.com/wp-content/uploads/2018/05/swiper-thumbnail' + (index + 1) + '.png" alt="">' + '</span>';
        },
    },
});*/




var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});