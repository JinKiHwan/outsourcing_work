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
            end: "+=1200",
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true
        }
    });

    // 1. "비용 그 이상의 가치" fade-up
    inc07Timeline.fromTo(".inc07_intro .gradient", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // 2. "비싸지 않나?" fade-up
    inc07Timeline.fromTo(".inc07_intro .gray", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "+=0.25"
    );

    // 3. "평생을 따져보면 가장 경제적입니다." fade-up
    inc07Timeline.fromTo(".inc07_intro .black", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "+=0.25"
    );

    // 4. Fade-out 1st screen texts & release clip-path with overlay
    inc07Timeline.to(".inc07_intro .gradient, .inc07_intro .gray, .inc07_intro .black", { 
        opacity: 0, 
        y: -30, 
        duration: 0.6, 
        ease: "power2.in" 
    }, "+=0.8");

    inc07Timeline.to(".inc07_bg", { 
        clipPath: "circle(150% at 50% 50%)", 
        webkitClipPath: "circle(150% at 50% 50%)",
        "--overlay-opacity": 1,
        duration: 3.0, 
        ease: "power2.inOut" 
    }, "<");

    // 5. "inner p" fade-up
    inc07Timeline.fromTo(".inc07 .inner p", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "+=0.2"
    );

    // 6. "inner h2" fade-up
    inc07Timeline.fromTo(".inc07 .inner h2", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "+=0.2"
    );
});
