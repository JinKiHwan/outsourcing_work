$(function () {
    // AOS 옵션 통일 설정 (속도: 800ms, 감속: ease-out-cubic)
    AOS.init({
        duration: 500,
        easing: 'ease-out-cubic',
        once: true
    });

    // inc05_items li 클릭 시 active 토글 및 형제 li active 제거
    $('.inc05_items ul li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        
        if (idx === 1) {
            $('.inc05_item').addClass('active');
        } else {
            $('.inc05_item').removeClass('active');
        }
    });
});