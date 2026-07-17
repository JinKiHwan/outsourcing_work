<?php
 include_once('../../common.php');
include_once(G5_PATH.'/sub/inc/inc_sub.php');
$page = "sub8";
$idx ="1";

 define('NO_AOS', true); 
if(!G5_IS_MOBILE){
    header("Location: ".G5_SUB_URL."/".$page."-".$idx.".php"); exit;
}

$data = get_navi($page, $idx);
$g5['title'] = $data[$idx]['title'];
include_once(G5_PATH.'/head.php');
// sub_visual($page, $idx);

?>
<style>
.busan_first .inc09_link01,.busan_first .inc09_link02{color: #fff;}
</style>
        <link rel="stylesheet" href="./resources/css/style.min.css" />
        <div class="busan_first">
            <!-- Header -->
            <header class="header"><!-- white 일시 클래스 white 추가 -->
                <div class="inner">
                    <h1 class="logo">
                      <!-- white 일시 파일명 말미에 -w 추가 [예: logo-w.webp] -->
                        <a href="#!"><img src="./resources/images/logo.webp" alt="퍼스트 안과 의원 로고" /></a>
                    </h1>

                    <button class="btn">
                        <img src="./resources/images/btn.webp" alt="햄버거버튼" />
                    </button>
                </div>
            </header>

            <!-- Main Visual -->
            <section class="main_visual">
                <div class="inner">
                    <div class="main_visual_text">
                        <p data-aos="fade-up" data-aos-duration="1000">
                            성공적인 렌즈삽입술,
                            <br />
                            <b>검사 시스템</b>과 <b>의료진</b>이 중요합니다.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
                            오차없는 렌즈삽입술의 기준,
                            <br />
                            신동민 대표원장이 만듭니다.
                        </p>
                        <h2>
                            <span class="gradient" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">퍼스트</span>
                            <span class="gradient" data-aos="fade-up" data-aos-delay="750" data-aos-duration="1000">EVO+ICL 센터</span>
                        </h2>
                    </div>
                </div>
            </section>

            <!-- inc01 -->
            <section class="inc01">
                <div class="inner">
                    <div class="inc01_text">
                        <h2>
                            0.1mm를 다루는 집도의
                            <br />
                            퍼스트안과 신동민 대표원장
                        </h2>
                        <p>
                            19년 경력의 노하우와 7,000례 이상의 임상 데이터를 바탕으로
                            <br />
                            0.1mm의 오차까지 계산합니다.
                            <br /><br />
                            의사를 가르치는 의사, 신동민 원장이 상담부터 수술까지 <br />직접 집도하여 더욱 안전하고 차원이 다른 시력의 질을 약속드립니다.
                        </p>
                    </div>

                    <ul class="inc01_list">
                        <li data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">
                            <figure>
                                <img src="./resources/images/inc01_item01.webp" alt="경력" />
                            </figure>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
                            <figure>
                                <img src="./resources/images/inc01_item02.webp" alt="EVO + ICL 단독집도" />
                            </figure>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            <figure>
                                <img src="./resources/images/inc01_item03.webp" alt="인증된 집도의" />
                            </figure>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- inc02 -->
            <section class="inc02">
                <div class="inner inc02_top">
                    <div class="inc02_text-gray">
                        <p data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">3mm의 공간,</p>
                    </div>

                    <figure>
                        <img src="./resources/images/inc02_item01.webp" alt="" />
                    </figure>

                    <div class="inc02_text-red" data-aos="fade-left" data-aos-delay="250" data-aos-duration="800">
                        <p>0.1mm의 판단.</p>
                        <span
                            >렌즈삽입술은 레이저 시력교정술보다
                            <br />
                            고려해야 하는 결과값이 많고 복잡합니다.</span
                        >
                    </div>
                </div>
                <div class="inner inc02_bottom">
                    <div class="pointer_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">전방 깊이(ACD)</li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">Vault 예측값</li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">각막내피세포 밀도</li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">안압</li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">각막 곡률(K-value)</li>
                            <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">전방각 구조</li>
                            <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">난시축</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- inc03 -->
            <section class="inc03">
                <div class="inner">
                    <h2>
                        수치는 기계가 측정하지만<br />
                        해석은 집도의가 합니다.
                    </h2>
                    <p>같은 검사 결과라도, 숙련도에 따라 렌즈 선택이 달라집니다.</p>

                    <div class="sticky-wrap">
                        <ul class="item-list">
                            <li data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
                                <figure><img src="./resources/images/inc03_item01.webp" alt="렌즈크기 4단계" /></figure>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
                                <figure><img src="./resources/images/inc03_item02.webp" alt="렌즈크기 4단계" /></figure>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                                <figure><img src="./resources/images/inc03_item03.webp" alt="렌즈크기 4단계" /></figure>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
                                <figure><img src="./resources/images/inc03_item04.webp" alt="렌즈크기 4단계" /></figure>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
                                <figure><img src="./resources/images/inc03_item05.webp" alt="렌즈크기 4단계" /></figure>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                                <figure><img src="./resources/images/inc03_item06.webp" alt="절개창 방향 및 길이 4단계" /></figure>
                            </li>
                        </ul>

                        <div class="inc03_text">
                            <div class="text_01">약 300여가지의 ICL 중</div>
                            <div class="text_02">내 눈에 맞는 렌즈는 <i>단 하나.</i></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- inc04 -->
            <section class="inc04">
                <div class="inner">
                    <article class="stat-row">
                        <div class="text-area">
                            <h2>
                                300가지 이상의 조합 속에서<br />
                                단 한 번의 정확한 설계.
                            </h2>
                        </div>
                        <div class="data-area">
                            <p class="label"><span>&middot;</span> 퍼스트안과 렌즈 교체율</p>
                            <div class="number"><span class="count-percent">0.05</span><em>%</em></div>
                        </div>
                    </article>

                    <article class="stat-row">
                        <div class="text-area">
                            <h2>
                                설계가 정확하면<br />
                                수술은 길어질 이유가 없습니다.
                            </h2>
                        </div>
                        <div class="data-area">
                            <p class="label"><span>&middot;</span> 평균 수술 시간(단안기준)</p>
                            <div class="number"><span class="count-min">4</span><em>분</em> <span class="count-sec">15</span><em>초</em></div>
                        </div>
                    </article>
                </div>
            </section>

            <!-- inc05 -->
            <section class="inc05">
                <article class="inc05_intro">
                    <div class="inner">
                        <div class="left">
                            <p>EVO + ICL 엑설런트 서전</p>
                            <h2>신동민 대표원장</h2>
                        </div>
                        <div class="right">
                            <dl>
                                <dt>
                                    <b>19년의 숙련</b>으로
                                    <br />
                                    <b>만들어 낸 결과</b>입니다.
                                </dt>
                                <dd>
                                    19년 이상 경력의 퍼스트안과 신동민 대표원장은
                                    <br />
                                    렌즈삽입술에 대한 수많은 노하우를 가지고 있습니다.
                                    <br /><br />
                                    특히 EVO + ICL 엑설런트 서전으로 제조사에서 실력을 인증받았으며,
                                    <br />
                                    EVO + ICL을 단독으로 5,000례 이상 집도하여 안정적인 수술을
                                    <br />
                                    시행하고 있습니다.
                                </dd>
                            </dl>
                        </div>
                    </div>
                </article>
                <article class="inc05_lens" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
                    <div class="inner">
                        <div class="lens_title">
                            <p>정확한 설계는 정확한 검사에서 시작됩니다.</p>
                            <h2>
                                렌즈는 3mm
                                <br />
                                공간 안에 들어가며,
                                <br />
                                오차는 0.1mm 이하로
                                <br />
                                관리되어야 합니다.
                            </h2>
                        </div>
                    </div>
                    <div class="lens_img">
                        <figure class="lens">
                            <div>
                                <img src="./resources/images/inc05_item01.webp" alt="렌즈" />
                            </div>
                        </figure>
                        <figure class="lens_line">
                            <img src="./resources/images/inc05_item03.webp" alt="렌즈 라인" />
                        </figure>
                    </div>
                    <div class="blur"></div>
                </article>
                <article class="inc05_machine">
                    <div class="inner">
                        <h2>
                            퍼스트 안과는
                            <br />
                            <span>대학병원급 검사 장비</span>를
                            <br />
                            기반으로 눈 속 구조를
                            <br />
                            정밀하게 분석합니다.
                        </h2>

                        <div class="machine_intro casia2">
                            <div class="machine_text" data-parallax="60">
                                <h3 class="machine_name">CASIA2</h3>
                                <p class="machine_desc">3차원 안구 공간 측정 시스템</p>
                                <ul>
                                    <li><span>&middot;</span>정밀한 눈 속 구조 분석</li>
                                    <li><span>&middot;</span>고해상도 이미지 제공</li>
                                    <li><span>&middot;</span>빠른 검사 속도</li>
                                </ul>
                            </div>

                            <figure class="video" data-parallax="50">
                                <iframe src="https://player.vimeo.com/video/1176460051?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="casia2"></iframe>
                            </figure>

                            <div class="blur"></div>

                            <figure class="machine_img">
                                <img src="./resources/images/inc05_item04.webp" alt="렌즈 분석 이미지" />
                            </figure>
                        </div>

                        <div class="machine_intro" data-parallax="80">
                            <p class="machine_extra_text">
                                눈 안 3mm의 공간을 초고해상도 단층 촬영으로 분석해
                                <br />
                                전방 깊이와 <sup>*</sup>볼트 예측값 등 '렌즈 사이즈 결정'의
                                <br />
                                결정적 단서를 제공합니다.
                            </p>
                            <p class="machine_ps"><i>*</i> 볼트(Vault)는 눈 속에 삽입된 렌즈와 원래 수정체 사이의 미세한 간격을 의미</p>
                        </div>

                        <div class="machine_intro pentacam">
                            <div class="machine_text" data-parallax="80">
                                <h3 class="machine_name">PENTACAM HR</h3>
                                <p class="machine_desc">각막·전방 형태 3D 분석</p>
                                <ul>
                                    <li><span>&middot;</span>각막 지형도 분석</li>
                                    <li><span>&middot;</span>난시 축 정밀 확인</li>
                                    <li><span>&middot;</span>전방각 구조 평가</li>
                                    <li><span>&middot;</span>비대칭/비정상 각막 스크리닝</li>
                                </ul>
                            </div>

                            <figure class="video" data-parallax="70">
                                <iframe src="https://player.vimeo.com/video/1176460033?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="pentacam"></iframe>
                            </figure>

                            <div class="blur"></div>

                            <figure data-parallax="30" class="machine_img">
                                <img src="./resources/images/inc05_item07.webp" alt="각막 분석 이미지" />
                            </figure>
                        </div>

                        <div class="machine_intro cornea">
                            <p class="machine_extra_text">
                                각막의 형태를 3D로 분석하여 렌즈가 들어갈 공간이 충분한지를
                                <br />
                                교차 검증하고, 수술 후 렌즈 위치 변화나 부작용 가능성을 낮춥니다.
                            </p>
                        </div>

                        <div class="machine_intro itrace">
                            <div class="machine_text" data-parallax="50">
                                <h3 class="machine_name">iTrace</h3>
                                <p class="machine_desc">초정밀 안구 측정 시스템</p>
                                <ul>
                                    <li><span>&middot;</span>안축장(Axial Length) 측정</li>
                                    <li><span>&middot;</span>도수 계산</li>
                                    <li><span>&middot;</span>렌즈 파워 결정</li>
                                </ul>
                            </div>
                            <div>
                                <figure class="video" data-parallax="30">
                                    <iframe src="https://player.vimeo.com/video/1176489479?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="아이트레이스_1" data-ready="true"></iframe>
                                </figure>
                                <p class="machine_ps">
                                    도수는 감으로 정하지 않습니다.
                                    <br />
                                    안구 길이와 굴절 데이터를 기반으로 계산합니다.
                                </p>
                            </div>

                            <figure class="machine_img">
                                <img src="./resources/images/inc05_item09.webp" alt="IOLMaster" data-parallax="0" />
                            </figure>

                            <div class="blur"></div>
                        </div>
                    </div>
                </article>
            </section>

            <!-- inc06 -->
            <section class="inc06 gradient-bg">
                <!-- gradient-bg 클래스 삭제시 gif[x] -> 정적이미지 배경적용 -->
                <div class="inner">
                    <div class="inc06_text">
                        <div class="top">
                            <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
                                <b
                                    >오차 ZERO
                                    <br />
                                    시력교정</b
                                >을 위해
                            </p>
                        </div>
                        <div class="center">
                            <figure>
                                <img src="./resources/images/inc06_item01.webp" alt="" />
                            </figure>
                        </div>
                        <div class="bottom">
                            <p data-aos="fade-left" data-aos-delay="500" data-aos-duration="800">
                                <b>단면을 보고,</b>
                                <br />
                                <b>형태를 분석</b>하고,
                                <br />
                                <b>길이를 계산</b>합니다.
                            </p>
                            <br />
                            <p data-aos="fade-left" data-aos-delay="500" data-aos-duration="800">그 다음, <b>설계</b>합니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- inc07 -->
            <section class="inc07">
                <div class="inner">
                    <h2 data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">퍼스트는 <br />수평형·수직형 토릭 렌즈 <br />모두 컨트롤합니다.</h2>

                    <article class="inc07_contents">
                        <figure data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                            <img src="./resources/images/inc07_item01.webp" alt="" />
                        </figure>
                        <figure data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                            <img src="./resources/images/inc07_item02.webp" alt="" />
                        </figure>
                        <div class="inc07_text" data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
                            <dl>
                                <dt>수직형 토릭 렌즈는</dt>
                                <dd>
                                    <span>+</span>
                                    안내 공간을 효율적으로 활용하면서
                                </dd>
                                <dd>
                                    <span>+</span>
                                    난시 교정 효과가 우수하지만
                                </dd>
                            </dl>
                            <p>
                                삽입 각도와 공간 계산이 더욱 정밀해야 합니다.
                                <br />
                                작은 오차에도 회전 가능성이 달라 질 수 있기 때문입니다.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <!-- inc08 -->
            <section class="inc08">
                <div class="inner">
                    <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">수직형 토릭은 <br />누구나 집도할 수 있는 <br />방식이 아닙니다.</p>
                    <h2 data-aos="fade-left" data-aos-delay="500" data-aos-duration="800">
                        눈 속 공간을 읽는
                        <br />집도의만이 <br />진행할 수 있습니다.
                    </h2>
                </div>
            </section>

            <!-- inc09 -->
            <section class="inc09">
                <div class="inner">
                    <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                        내 눈에 맞는
                        <br />
                        단 하나의 렌즈.
                        <br />
                        선택은
                        <br />
                        설계로 증명합니다.
                    </h2>
                    <a href="https://blog.naver.com/firsteyeclinic1/224060049444" target="_blank" class="inc09_link01" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">신동민 원장 설계 철학 자세히 보기 <span>></span></a>
                    <a href="/bbs/board.php?bo_table=consulting" class="inc09_link02" data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">온라인 상담 바로가기</a>
                </div>
            </section>
        </div>

        <!-- JS -->
        <script defer src="https://code.jquery.com/jquery-4.0.0.min.js" integrity="sha256-OaVG6prZf4v69dPg6PhVattBXkcOWQB62pdZ3ORyrao=" crossorigin="anonymous"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
        <script defer src="./resources/js/common.js"></script>
<?php include_once(G5_THEME_MOBILE_PATH.'/tail.php'); ?>
