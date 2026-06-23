$(document).ready(function() {
    let currentIndex = 1; // Starts on the second card (index 1: EVO+ Lens)
    let currentAngle = -10; // -10deg aligns Card 1 (at 10deg) to the top center
    const totalCards = 36;
    const angleStep = 10; // 360 / 36
    let autoPlayTimer = null;

    // inc05 카드 타이틀 및 alt 속성 동적 업데이트
    $('.circle_card').each(function(idx) {
        const typeIndex = idx % 3;
        const titles = [
            `영구적인 자외선(UV)<br>차단 기능`,
            `자연 그대로의 방수 흐름<br>EVO+ 렌즈`,
            `초고도 근시·난시도<br>완벽 교정`
        ];
        const alts = [
            `영구적인 자외선(UV) 차단 기능`,
            `자연 그대로의 방수 흐름 EVO+ 렌즈`,
            `초고도 근시·난시도 완벽 교정`
        ];
        $(this).find('.card_title').html(titles[typeIndex]);
        $(this).find('img').attr('alt', alts[typeIndex]);
    });

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

        // 하단 설명글 동적 업데이트
        const typeIndex = currentIndex % 3;
        const descriptions = [
            `ICL 렌즈의 재질인 ‘콜라머(Collamer)’는 인체 정화 물질을<br>포함하고 있어 눈 속에서 거부반응을 일으키지 않으며,<br>유해한 UVA와 UVB를 99% 이상 차단하여 현대인의<br>망막과 수정체를 황반변성 등 질환으로부터 보호합니다.`,
            `본원에서 사용하는 EVO+ ICL 렌즈는 센터 홀(통기공) 기술이 <br>적용되어, 안구 내의 자연스러운 눈물(방수) 흐름을 유지합니다.<br>이로 인해 과거 렌즈삽입술의 단점이었던 홍채 절개술이 필요 없고, <br>안압 상승이나 백내장 유발 가능성을 원천적으로 차단했습니다.`,
            `렌즈의 도수를 정밀하게 맞추어 삽입하기 때문에,<br>각막 두께와 상관없이 -10디옵터 이상의<br>초고도 근시 환자도 단 한 번에 정상 시력을<br>찾을 수 있습니다.`
        ];
        
        const $descText = $('.desc_block .desc_text');
        $descText.html(descriptions[typeIndex]);
        
        // GSAP fade-up 효과 적용
        gsap.fromTo($descText, 
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", overwrite: "auto" }
        );
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        currentAngle -= angleStep;
        updateSlider();
    }

    function startAutoPlay() {
        autoPlayTimer = setInterval(nextSlide, 4000);
    }

    // 카드 클릭 이벤트 추가 (클릭 시 해당 카드로 회전)
    $('.circle_card').on('click', function() {
        clearInterval(autoPlayTimer);
        const clickedIndex = $(this).index();
        
        // 회전 방향 최적화 (가장 가까운 거리로 회전하는 로직)
        let diff = clickedIndex - currentIndex;
        
        // 36개 카드 안에서 최단 거리가 되도록 보정 (-18 ~ 18 범위)
        if (diff > totalCards / 2) {
            diff -= totalCards;
        } else if (diff < -totalCards / 2) {
            diff += totalCards;
        }
        
        currentIndex = (currentIndex + diff + totalCards) % totalCards;
        currentAngle -= diff * angleStep;

        updateSlider();
        startAutoPlay();
    });

    // Initialize
    updateSlider();
    startAutoPlay();


    // GSAP ScrollTrigger for inc07
    gsap.registerPlugin(ScrollTrigger);

    // 메인 섹션 첫 로드 애니메이션 (AOS 없이 바로 실행)
    gsap.from(".main_bg", { opacity: 0, duration: 1.2, ease: "power2.out" });
    gsap.from(".main .inner p:nth-child(1)", { opacity: 0, y: 50, duration: 1.0, delay: 1.0, ease: "power2.out" });
    gsap.from(".main .inner p:nth-child(2)", { opacity: 0, y: 50, duration: 1.0, delay: 1.3, ease: "power2.out" });
    gsap.from(".main .inner h2", { opacity: 0, y: 50, duration: 1.0, delay: 1.6, ease: "power2.out" });

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
                start: 'top 70%', // 요소가 화면 아래 30%쯤 보일 때 실행 (시작 위치 지연)
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
