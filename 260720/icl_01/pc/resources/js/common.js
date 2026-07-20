$(function () {
    AOS.init();

    // inc05_scripts li 클릭 시 active 토글 및 형제 li active 제거
    $('.inc05_scripts ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // inc06_items li 클릭 시 active 토글 및 형제 li active 제거
    $('.inc06_items > li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});