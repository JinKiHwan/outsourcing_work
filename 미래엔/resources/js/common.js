document.addEventListener('DOMContentLoaded', function () {
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
});