document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: false
        });
    }

    // 텍스트 입력 글자 수 카운트
    const textarea = document.querySelector('.form_section-textarea');
    const countDisplay = document.querySelector('.form_section-count');

    if (textarea && countDisplay) {
        textarea.addEventListener('input', function () {
            const currentLength = this.value.length;
            const maxLength = 2000;

            countDisplay.textContent = `${currentLength.toLocaleString()}/${maxLength.toLocaleString()}`;
        });
    }

    // 히스토리 섹션 비디오 플레이 버튼
    const videoArea = document.querySelector('.history_section-video_area');

    if (videoArea) {
        const btnPlay = videoArea.querySelector('.btn_play');
        const thumbnail = videoArea.querySelector('.thumbnail');
        const video = videoArea.querySelector('video');

        btnPlay.addEventListener('click', function () {
            thumbnail.style.display = 'none';
            btnPlay.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });

        // 영상 재생 종료 시 썸네일·버튼 복원
        video.addEventListener('ended', function () {
            video.style.display = 'none';
            thumbnail.style.display = '';
            btnPlay.style.display = '';
        });
    }

    // 과목별 한눈에 보기 - Swiper + 탭 연동
    const swiperEl = document.querySelector('.subject_overview-swiper');

    if (swiperEl) {
        const tabItems = document.querySelectorAll('.subject_overview-tab .tab-item');

        const swiper = new Swiper('.subject_overview-swiper', {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            allowTouchMove: true,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            on: {
                // 슬라이드 변경 시 탭 활성화 동기화
                slideChange: function () {
                    tabItems.forEach(function (tab) {
                        tab.classList.remove('is-active');
                    });
                    if (tabItems[this.activeIndex]) {
                        tabItems[this.activeIndex].classList.add('is-active');
                    }
                },
            },
        });

        // 탭 클릭 시 해당 슬라이드로 이동
        tabItems.forEach(function (tab) {
            tab.addEventListener('click', function () {
                const index = parseInt(this.dataset.tab, 10);
                swiper.slideTo(index);
            });
        });
    }

    // 사이드 네비 TOP 버튼 클릭 이벤트
    const btnTop = document.querySelector('.side_nav .btn_top');
    if (btnTop) {
        btnTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 사이드 네비게이션 스크롤 스파이 & 클릭 이동
    const sideNav = document.querySelector('.side_nav');
    if (sideNav) {
        const toggleBtn = sideNav.querySelector('.side_nav-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                sideNav.classList.toggle('is-open');
            });
        }

        document.addEventListener('click', function (e) {
            if (!sideNav.contains(e.target)) {
                sideNav.classList.remove('is-open');
            }
        });

        const navItems = sideNav.querySelectorAll('.side_nav-item');
        const navLinks = sideNav.querySelectorAll('.side_nav-item a');

        // 클릭 시 해당 섹션으로 부드럽게 스크롤 이동
        navLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                sideNav.classList.remove('is-open');
                const targetId = this.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    const targetEl = document.querySelector(targetId);
                    if (targetEl) {
                        e.preventDefault();
                        targetEl.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // 섹션 스크롤 위치 감지하여 is-active 클래스 변경
        const sections = Array.from(navLinks)
            .map(function (link) {
                const id = link.getAttribute('href');
                return id && id.startsWith('#') ? document.querySelector(id) : null;
            })
            .filter(Boolean);

        function updateActiveNav() {
            const scrollPos = window.scrollY + window.innerHeight / 3;

            let currentSection = null;
            sections.forEach(function (section) {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    currentSection = section;
                }
            });

            navItems.forEach(function (item) {
                item.classList.remove('is-active');
            });

            if (currentSection) {
                const activeLink = sideNav.querySelector(`.side_nav-item a[href="#${currentSection.id}"]`);
                if (activeLink && activeLink.parentElement) {
                    activeLink.parentElement.classList.add('is-active');
                }
            }
        }

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    }
});