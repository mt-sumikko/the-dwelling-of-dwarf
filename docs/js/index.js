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




/*---------swiper.js　スライドショー-------------*/
var slider = new Swiper('#slider', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
})
var thumbs = new Swiper('#thumbs', {
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true
});
slider.params.control = thumbs;
thumbs.params.control = slider;




