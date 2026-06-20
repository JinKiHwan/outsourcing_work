$(document).ready(function() {
    let currentIndex = 1; // Starts on the second card (index 1: EVO+ Lens)
    let currentAngle = -10; // -10deg aligns Card 1 (at 10deg) to the top center
    const totalCards = 36;
    const angleStep = 10; // 360 / 36
    let autoPlayTimer = null;

    function updateSlider() {
        // Rotate the giant circle track
        $('.circle_track').css('transform', 'rotate(' + currentAngle + 'deg)');

        // Update card classes for visual feedback (active, prev, next)
        $('.circle_card').removeClass('active prev next');

        const activeCard = $('.circle_card').eq(currentIndex);
        activeCard.addClass('active');

        const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
        const nextIndex = (currentIndex + 1) % totalCards;

        $('.circle_card').eq(prevIndex).addClass('prev');
        $('.circle_card').eq(nextIndex).addClass('next');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        currentAngle -= angleStep;
        updateSlider();
    }

    function startAutoPlay() {
        autoPlayTimer = setInterval(nextSlide, 4000);
    }

    // Initialize
    updateSlider();
    startAutoPlay();

    // GSAP ScrollTrigger for inc07
    gsap.registerPlugin(ScrollTrigger);

    const inc07Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".inc07",
            start: "top top",
            end: "+=2500",
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true
        }
    });

    // 1. "비용 그 이상의 가치" fade-up
    inc07Timeline.fromTo(".inc07_intro .gradient", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" }
    );

    // 2. "비싸지 않나?" fade-up
    inc07Timeline.fromTo(".inc07_intro .gray", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
        "+=0.4"
    );

    // 3. "평생을 따져보면 가장 경제적입니다." fade-up
    inc07Timeline.fromTo(".inc07_intro .black", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
        "+=0.4"
    );

    // 4. Fade-out 1st screen texts & release clip-path with overlay
    inc07Timeline.to(".inc07_intro .gradient, .inc07_intro .gray, .inc07_intro .black", { 
        opacity: 0, 
        y: -30, 
        duration: 0.8, 
        ease: "power2.in" 
    }, "+=1.2");

    inc07Timeline.to(".inc07_bg", { 
        clipPath: "circle(150% at 50% 50%)", 
        webkitClipPath: "circle(150% at 50% 50%)",
        "--overlay-opacity": 1,
        duration: 4.5, 
        ease: "power2.inOut" 
    }, "<");

    // 5. "inner p" fade-up
    inc07Timeline.fromTo(".inc07 .inner p", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "+=0.4"
    );

    // 6. "inner h2" fade-up
    inc07Timeline.fromTo(".inc07 .inner h2", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "+=0.4"
    );

    // 7. 여운을 위한 빈 대기 시간 추가 (완성된 마지막 화면이 스크롤 중 고정되어 유지됨)
    inc07Timeline.to({}, { duration: 2.5 });

    /* =======================================================
       AOS 대체 GSAP 스크립트
       ======================================================= */
    const aosElements = document.querySelectorAll('[data-aos]');

    aosElements.forEach((el) => {
        const animationType = el.getAttribute('data-aos');
        const delay = el.getAttribute('data-aos-delay') ? parseInt(el.getAttribute('data-aos-delay')) / 1000 : 0;
        const duration = el.getAttribute('data-aos-duration') ? parseInt(el.getAttribute('data-aos-duration')) / 1000 : 1;
        const easingAttr = el.getAttribute('data-aos-easing') || 'ease-out';

        // 1. AOS의 easing 이름을 GSAP의 easing으로 변환
        let gsapEase = 'power2.out';
        if (easingAttr === 'linear') gsapEase = 'none';
        if (easingAttr === 'ease-in') gsapEase = 'power2.in';
        if (easingAttr === 'ease-out') gsapEase = 'power2.out';
        if (easingAttr === 'ease-in-out') gsapEase = 'power2.inOut';
        if (easingAttr.includes('back')) gsapEase = 'back.out(1.7)';

        // 2. 기본 GSAP 애니메이션 세팅
        let fromVars = {
            opacity: 0,
            duration: duration,
            delay: delay,
            ease: gsapEase,
            scrollTrigger: {
                trigger: el,
                start: 'top 90%', // 요소가 화면 아래 15%쯤 보일 때 실행
                toggleActions: 'play none none none', // 한번만 실행
            },
        };

        // 3. AOS 애니메이션 종류(Type)에 따른 움직임 값 부여
        switch (animationType) {
            case 'fade-up':
                fromVars.y = 50;
                break;
            case 'fade-blur':
                fromVars.filter = 'blur(10px)';
                break;
            case 'clip-right':
                delete fromVars.opacity;
                fromVars.clipPath = 'inset(0% 100% 0% 0%)';
                fromVars.webkitClipPath = 'inset(0% 100% 0% 0%)';
                break;
            case 'clip-left':
                delete fromVars.opacity;
                fromVars.clipPath = 'inset(0% 0% 0% 100%)';
                fromVars.webkitClipPath = 'inset(0% 0% 0% 100%)';
                break;
            case 'fade-down':
                fromVars.y = -50;
                break;
            case 'fade-left':
                fromVars.x = 50;
                break;
            case 'fade-right':
                fromVars.x = -50;
                break;
            case 'zoom-in':
                fromVars.scale = 0.5;
                break;
            case 'zoom-out':
                fromVars.scale = 1.2;
                break;
            case 'flip-left':
                fromVars.rotationY = -90;
                gsap.set(el.parentNode, { perspective: 1000 });
                break;
            case 'flip-right':
                fromVars.rotationY = 90;
                gsap.set(el.parentNode, { perspective: 1000 });
                break;
            case 'flip-up':
                fromVars.rotationX = -90;
                gsap.set(el.parentNode, { perspective: 1000 });
                break;
            case 'flip-down':
                fromVars.rotationX = 90;
                gsap.set(el.parentNode, { perspective: 1000 });
                break;
        }

        // 4. GSAP에 설정값 적용하여 실행
        gsap.from(el, fromVars);
    });

    // 모든 스크롤 트리거 등록 완료 후 레이아웃 위치 강제 갱신 (섹션 간 벌어짐 방지)
    ScrollTrigger.refresh();
});
