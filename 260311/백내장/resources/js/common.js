gsap.registerPlugin(ScrollTrigger);

/* =======================================================
   1. 레이아웃을 바꾸는 애니메이션을 "가장 먼저" 선언합니다.
   (이 코드가 먼저 실행되어야 아래 요소들이 밀려난 위치를 정확히 잡습니다)
   ======================================================= */

// ------------------------------------------
// [inc02] 렌즈 선택 고정 애니메이션
// ------------------------------------------
const inc02Tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.inc02',
    start: 'top top', // inc02가 화면 상단에 닿을 때
    end: '+=1500', // 1500px 스크롤하는 동안 진행
    pin: true, // 화면 고정
    scrub: 1,
  },
});

inc02Tl
  .to('.inc02_lens-choice', {
    duration: 1,
    autoAlpha: 1, // CSS에 세팅된 opacity:0, visibility:hidden을 부드럽게 나타나게 함
    ease: 'power2.inOut',
  })
  .from(
    '.inc02_lens-choice ul li',
    {
      duration: 1.5,
      x: -150, // 왼쪽에서 날아옴
      opacity: 0,
      stagger: 0.15, // 0.15초 간격으로 순차적 등장
      ease: 'power3.out',
    },
    '-=0.5',
  );

/* =======================================================
   [inc03] 차트 라벨 회전 & 레이어 강조 애니메이션
   ======================================================= */
const labels = document.querySelectorAll('.inc03 .chart-label');
const allLayers = ['.chart-layer-pink', '.chart-layer-orange', '.chart-layer-red'];

// 1. 요청하신 조건에 맞춘 인덱스별 활성화 레이어 매핑 (0번 = 1번 라벨)
const layerMapping = [
  ['.chart-layer-pink'], // 1. 눈의 조건
  ['.chart-layer-orange'], // 2. 수술 이력
  ['.chart-layer-red'], // 3. 취미 활동
  ['.chart-layer-pink'], // 4. 안경 의존도
  ['.chart-layer-orange'], // 5. 빛 민감도
  ['.chart-layer-pink'], // 6. 개선 희망
  ['.chart-layer-red'], // 7. 운전 습관
  ['.chart-layer-red'], // 8. 직업/작업
];

// 2. 비활성 레이어의 기본 투명도를 0.3으로 셋팅 (활성화된 1.0이 돋보이게 함)
gsap.set(allLayers, { opacity: 0.1, zIndex: 1 });

// 3. 무한 반복되는 타임라인 생성
const radarTl = gsap.timeline({ repeat: -1 });

layerMapping.forEach((activeLayers, index) => {
  radarTl.to(
    {},
    {
      duration: 1.5, // 각 라벨이 머무는 시간 (1.5초)
      onStart: () => {
        // [클래스 제어] 모든 라벨에서 active 제거 후 현재 인덱스에만 추가
        labels.forEach((label) => label.classList.remove('active'));
        labels[index].classList.add('active');

        // [레이어 제어] 전체 레이어를 비활성 상태로 내린 뒤, 매핑된 타겟만 부드럽게 강조
        gsap.to(allLayers, { opacity: 0.1, zIndex: 1, duration: 0.4 });
        gsap.to(activeLayers, { opacity: 1, zIndex: 2, duration: 0.4 });
      },
    },
  );
});

// 4. (선택적 최적화) 화면에 섹션이 보일 때만 애니메이션이 돌도록 설정
ScrollTrigger.create({
  trigger: '.inc03',
  start: 'top bottom',
  end: 'bottom top',
  onEnter: () => radarTl.play(),
  onLeave: () => radarTl.pause(), // 화면 밖으로 나가면 일시정지 (성능 향상)
  onEnterBack: () => radarTl.play(),
  onLeaveBack: () => radarTl.pause(),
});

/* =======================================================
   [inc04] 이미지 중앙 집결 & 카드 스태킹 애니메이션
   ======================================================= */
// 1. 기존 회전 각도 배열
const cardRotations = [-18, 26, -20, 15, 10, 17, -35];

// 2. 새로 추가: 의도적으로 흐트러트리기 위한 X축, Y축 이동 값 배열 (px 단위)
// 순서대로 밑에 깔리는 이미지 ~ 맨 위에 올라오는 이미지의 삐뚤어짐 정도를 결정합니다.
const cardXOffset = [-40, 170, -110, 65, 30, 150, -90]; // 좌우로 얼마나 어긋날지
const cardYOffset = [-15, 11, -50, -30, 10, -50, 70]; // 상하로 얼마나 어긋날지

const inc04Tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.inc04',
    start: 'top top', // 섹션이 화면 상단에 닿을 때 시작
    end: '+=2000', // 2000px 스크롤하는 동안 애니메이션 진행 (길수록 천천히 모임)
    pin: true, // 화면 고정
    scrub: 1, // 마우스 스크롤에 부드럽게 동기화
  },
});

// Phase 1: 기존 상단의 인트로 텍스트 부드럽게 숨기기
inc04Tl
  .to(
    '.inc04_intro-text',
    {
      autoAlpha: 0,
      y: -30,
      duration: 1,
    },
    'start',
  ) // "start" 라벨을 줘서 애니메이션 동시 실행 타이밍을 맞춤

  // Phase 2: 7개의 흩어진 이미지를 중앙으로 모으고 회전시키기
  .to(
    '.inc04_images figure',
    {
      left: (index) => `calc(50% + ${cardXOffset[index] || 0}px)`,
      top: (index) => `${cardYOffset[index] || 0}px`,
      xPercent: -65,
      yPercent: -50,
      scale: 0.8,
      rotation: (index) => cardRotations[index],
      transformOrigin: 'center center',
      duration: 2,
      ease: 'power2.inOut',
    },
    'start',
  )

  // Phase 3: 이미지가 다 모여갈 때쯤 양옆의 스크롤 텍스트 등장
  .to(
    '.inc04_scroll-text',
    {
      autoAlpha: 1,
      duration: 1.5,
    },
    'start+=1.2',
  ); // 애니메이션 시작(start) 후 1.2초 뒤에 등장

/* =======================================================
   [inc07] 텍스트 왼쪽에서 오른쪽으로 채워지는 효과 (Text Fill)
   ======================================================= */
const fillTexts = document.querySelectorAll('.inc07 h2 span');

fillTexts.forEach((span) => {
  gsap.to(span, {
    backgroundPosition: '0% 0', // 100% 위치에 있던 배경을 0%로 당겨옴
    ease: 'none', // 스크롤 속도와 일정하게 맞추기 위해 none 사용
    scrollTrigger: {
      trigger: span,
      start: 'top 80%', // 글자가 화면 아래 80% 지점에 도달하면 시작
      end: 'top 40%', // 글자가 화면 40% 지점에 도달할 때까지 진행 (스크롤 길이 조절)
      scrub: 1, // 💡 마우스 스크롤에 맞춰 부드럽게 채워졌다 빠졌다 하도록 설정
    },
  });
});

/* =======================================================
   2. 개별 섹션 효과 (레이아웃 변형 없음) 선언
   ======================================================= */
/* [s]icn04 카운트 효과 */
const percentEl = document.querySelector('.count-percent');
// 요소가 실제로 있을 때만 에러 없이 실행되도록 방어 코드 추가
if (percentEl) {
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
}

const minEl = document.querySelector('.count-min');
const secEl = document.querySelector('.count-sec');
if (minEl && secEl) {
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
}
/* [e]icn04 카운트 효과 */

/* =======================================================
   3. AOS 대체 스크립트를 "가장 마지막"에 선언합니다.
   (inc02, inc03의 공간이 다 늘어난 뒤에 최종 위치를 계산합니다)
   ======================================================= */
const aosElements = document.querySelectorAll('[data-aos]');

aosElements.forEach((el) => {
  const animationType = el.getAttribute('data-aos');
  const delay = el.getAttribute('data-aos-delay') ? parseInt(el.getAttribute('data-aos-delay')) / 1000 : 0;
  const duration = el.getAttribute('data-aos-duration') ? parseInt(el.getAttribute('data-aos-duration')) / 1000 : 1;
  const easingAttr = el.getAttribute('data-aos-easing') || 'ease-out';

  let gsapEase = 'power2.out';
  if (easingAttr === 'linear') gsapEase = 'none';
  if (easingAttr === 'ease-in') gsapEase = 'power2.in';
  if (easingAttr === 'ease-out') gsapEase = 'power2.out';
  if (easingAttr === 'ease-in-out') gsapEase = 'power2.inOut';
  if (easingAttr.includes('back')) gsapEase = 'back.out(1.7)';

  let fromVars = {
    opacity: 0,
    duration: duration,
    delay: delay,
    ease: gsapEase,
    scrollTrigger: {
      trigger: el,
      start: 'top 100%',
      toggleActions: 'play none none none',
    },
  };

  switch (animationType) {
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

  gsap.from(el, fromVars);
});

/* =======================================================
       마우스 스크롤 연동 패럴랙스(Parallax) 효과
       ======================================================= */
const parallaxElements = document.querySelectorAll('[data-parallax]');

parallaxElements.forEach((el) => {
  const movement = parseFloat(el.getAttribute('data-parallax'));
  const triggerEl = el.closest('.machine_intro') || el.closest('.inc05_lens') || el;

  gsap.fromTo(
    el,
    { y: movement },
    {
      y: -movement,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    },
  );
});

/* =======================================================
   만능 해결사: 페이지 로드 완료 후 전체 재계산
   ======================================================= */
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
