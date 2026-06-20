gsap.registerPlugin(ScrollTrigger);

/* =======================================================
   1. 레이아웃을 바꾸는 애니메이션을 "가장 먼저" 선언합니다.
   (이 코드가 먼저 실행되어야 아래 요소들이 밀려난 위치를 정확히 잡습니다)
   ======================================================= */
// [inc03] 고정 애니메이션
const stickyWrap = document.querySelector('.inc03 .sticky-wrap');
const items = gsap.utils.toArray('.inc03 .item-list li');
const bottomTexts = gsap.utils.toArray('.inc03_text div');

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: stickyWrap,
        start: 'center center',
        end: '+=250%',
        pin: true,
        scrub: 1,
    },
});

// Phase 1
tl.from(items, {
    x: (index, element) => {
        const parent = element.closest('.item-list');
        const parentRect = parent.getBoundingClientRect();
        const parentCenter = parentRect.left + parentRect.width / 2;
        const itemRect = element.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        return parentCenter - itemCenter;
    },
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
})
    // Phase 2
    .to(
        items,
        {
            y: -30,
            boxShadow: (index) => {
                const centerIndex = 2.5;
                const xDirection = centerIndex - index;
                const layers = 4;
                const yGap = 30;
                const xGap = 10;
                const sizeShrink = -4;
                let shadows = [];
                for (let i = 1; i <= layers; i++) {
                    const offsetX = xDirection * xGap * i;
                    const offsetY = yGap * i;
                    const blur = 0;
                    const spread = sizeShrink * i;
                    const opacity = Math.max(0.05, 0.4 - i * 0.05);
                    shadows.push(`${offsetX}px ${offsetY}px ${blur}px ${spread}px rgba(255, 180, 180, ${opacity})`);
                }
                return shadows.join(', ');
            },
            duration: 1.5,
            ease: 'power2.out',
        },
        '+=0.2',
    )
    // Phase 3
    .from(
        bottomTexts,
        {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: 'power2.out',
        },
        '+=0.3',
    );

/* =======================================================
   2. 개별 섹션 효과 (레이아웃 변형 없음) 선언
   ======================================================= */
/* [s]icn04 카운트 효과 */
const percentEl = document.querySelector('.count-percent');
let percentObj = { val: 5 };
percentEl.innerHTML = percentObj.val.toFixed(2);

gsap.to(percentObj, {
    val: 0.05,
    duration: 2,
    ease: 'expo.out',
    scrollTrigger: {
        trigger: '.stat-row:nth-child(1)',
        start: 'top 75%',
    },
    onUpdate: () => {
        percentEl.innerHTML = percentObj.val.toFixed(2);
    },
});

const minEl = document.querySelector('.count-min');
const secEl = document.querySelector('.count-sec');
let timeObj = { val: 540 };

minEl.innerHTML = '9';
secEl.innerHTML = '00';

gsap.to(timeObj, {
    val: 255,
    duration: 2,
    ease: 'expo.out',
    scrollTrigger: {
        trigger: '.stat-row:nth-child(2)',
        start: 'top 75%',
    },
    onUpdate: () => {
        let totalSecs = Math.floor(timeObj.val);
        let mins = Math.floor(totalSecs / 60);
        let secs = totalSecs % 60;
        minEl.innerHTML = mins;
        secEl.innerHTML = secs.toString().padStart(2, '0');
    },
});
/* [e]icn04 카운트 효과 */

/* =======================================================
   3. AOS 대체 스크립트를 "가장 마지막"에 선언합니다.
   (inc03의 공간이 다 늘어난 뒤에 최종 위치를 계산합니다)
   ======================================================= */
const aosElements = document.querySelectorAll('[data-aos]');

aosElements.forEach((el) => {
    const animationType = el.getAttribute('data-aos');
    const delay = el.getAttribute('data-aos-delay') ? parseInt(el.getAttribute('data-aos-delay')) / 1000 : 0;
    const duration = el.getAttribute('data-aos-duration') ? parseInt(el.getAttribute('data-aos-duration')) / 1000 : 1;
    const easingAttr = el.getAttribute('data-aos-easing') || 'ease-out'; // 기본값

    // 1. AOS의 easing 이름을 GSAP의 easing으로 변환
    let gsapEase = 'power2.out'; // GSAP 기본 부드러운 감속
    if (easingAttr === 'linear') gsapEase = 'none';
    if (easingAttr === 'ease-in') gsapEase = 'power2.in';
    if (easingAttr === 'ease-out') gsapEase = 'power2.out';
    if (easingAttr === 'ease-in-out') gsapEase = 'power2.inOut';
    if (easingAttr.includes('back')) gsapEase = 'back.out(1.7)'; // back 효과 대응

    // 2. 기본 GSAP 애니메이션 세팅 (투명도 및 타이밍)
    let fromVars = {
        opacity: 0,
        duration: duration,
        delay: delay,
        ease: gsapEase,
        scrollTrigger: {
            trigger: el,
            start: 'top 95%', // 요소가 화면 아래 15%쯤 보일 때 실행
            toggleActions: 'play none none none', // 한번만 실행 (AOS 기본 동작)
            // 만약 스크롤 올릴 때마다 다시 실행하게 하려면: 'play none none reverse' 로 변경
        },
    };

    // 3. AOS 애니메이션 종류(Type)에 따른 움직임 값 부여
    switch (animationType) {
        /* Fade 애니메이션 */
        case 'fade-up':
            fromVars.y = 50;
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

        /* Zoom 애니메이션 */
        case 'zoom-in':
            fromVars.scale = 0.5;
            break;
        case 'zoom-out':
            fromVars.scale = 1.2;
            break;

        /* Flip 애니메이션 (3D 회전 효과) */
        case 'flip-left':
            fromVars.rotationY = -90; // Y축 기준 -90도에서 원래대로
            gsap.set(el.parentNode, { perspective: 1000 }); // 3D 원근감 부여(필수)
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

/* =======================================================
       마우스 스크롤 연동 패럴랙스(Parallax) 효과
       ======================================================= */
const parallaxElements = document.querySelectorAll('[data-parallax]');

parallaxElements.forEach((el) => {
    // HTML에 설정한 data-parallax 숫자를 가져옵니다. (이동 거리 픽셀)
    const movement = parseFloat(el.getAttribute('data-parallax'));

    // 부모 컨테이너(machine_intro 등)를 기준으로 작동 범위를 잡습니다.
    // 만약 부모를 못 찾으면 자기 자신을 트리거로 사용합니다.
    const triggerEl = el.closest('.machine_intro') || el.closest('.inc05_lens') || el;

    gsap.fromTo(
        el,
        {
            y: movement, // 시작 위치 (스크롤 진입 전)
        },
        {
            y: -movement, // 끝나는 위치 (스크롤 벗어날 때)
            ease: 'none', // 💡 스크롤 속도와 1:1로 일정하게 움직이게 하려면 ease를 꺼야 합니다.
            scrollTrigger: {
                trigger: triggerEl,
                start: 'top bottom', // 컨테이너 상단이 화면 하단에 닿을 때 시작
                end: 'bottom top', // 컨테이너 하단이 화면 상단으로 나갈 때 끝
                scrub: 1, // 💡 1초의 부드러운 딜레이를 주어 스크롤보다 살짝 쫀득하게 따라오게 만듭니다.
            },
        },
    );
});

/* =======================================================
   만능 해결사: 페이지 로드 완료 후 전체 재계산
   ======================================================= */
// 이미지, 웹 폰트 등이 늦게 로딩되어 높이가 달라지는 것을 방지하기 위해
// 모든 로딩이 끝난 직후 ScrollTrigger에게 "좌표 다시 계산해!" 라고 명령합니다.
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
