$(function () {
    // AOS 옵션 통일 설정 (속도: 800ms, 감속: ease-out-cubic)
    AOS.init({
        duration: 500,
        easing: 'ease-out-cubic',
        once: true
    });

    // half_line 스크롤 감지 시 위에서 아래로 펼쳐지는 애니메이션 (IntersectionObserver)
    var halfLines = document.querySelectorAll('.half_line');
    if (halfLines.length > 0) {
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0,
            rootMargin: '0px 0px -50px 0px'
        });

        halfLines.forEach(function (line) {
            observer.observe(line);
        });
    }
});