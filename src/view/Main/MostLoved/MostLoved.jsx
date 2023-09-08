import * as ReactDOMServer from 'react-dom/server';
import cx from 'classnames';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import UiHalfWrap from '@components/atoms/UiHalfWrap';
import UiContainer from '@components/atoms/UiContainer';
import useMediaQuery from 'assets/js/useMediaQuery';
import styles from '@scss_view/main/mostLoved/MostLoved.module.scss';

const MostLoved = () => {
  const isTablet = useMediaQuery(900);
  const posters = [
    {
      mo: '03_main_mloved_banner1_mo_bg',
      pc: '03_main_mloved_banner1_pc_bg',
    },
    {
      mo: '03_main_mloved_banner2_mo_bg',
      pc: '03_main_mloved_banner2_pc_bg',
    },
    {
      mo: '03_main_mloved_banner3_mo_bg',
      pc: '03_main_mloved_banner3_pc_bg',
    },
    {
      mo: '03_main_mloved_banner4_mo_bg',
      pc: '03_main_mloved_banner4_pc_bg',
    },
    {
      mo: '03_main_mloved_banner5_mo_bg',
      pc: '03_main_mloved_banner5_pc_bg',
    },
  ];
  const products = [
    {
      img: '03_main_mloved1_tag',
      name: '세컨 스킨 파운데이션',
      sub: '21호 아이보리',
    },
    {
      img: '03_main_mloved2_tag',
      name: '세컨 스킨 커버 컨실러',
      sub: '21호 라이트',
    },
    {
      img: '03_main_mloved3_tag',
      name: '시그니처 브로우 쉐이퍼',
      sub: '그레이 브라운',
    },
    {
      img: '03_main_mloved4_tag',
      name: '슬림핏 리퀴드 벨벳',
      sub: '딜라이티드',
    },
    {
      img: '03_main_mloved5_tag',
      name: '뉴 뎁스 아이섀도우',
      sub: '얼루어 인 모션',
    },
  ];

  const [pdActive, setPdActive] = useState(0);
  const posterSlideRef = useRef();
  const pdSlideRef = useRef();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const PdClick = index => {
    setPdActive(index);
    posterSlideRef.current.swiper.slideTo(index);
    pdSlideRef.current.swiper.slideTo(index);
  };

  return (
    <UiContainer tablet={styles.tablet} pc={styles.pc}>
      <UiHalfWrap
        firstChild={
          <Swiper
            className={styles.posterSlide}
            ref={posterSlideRef}
            modules={[Navigation, Pagination]}
            onSlideChange={e => {
              setPdActive(e.activeIndex);
              pdSlideRef.current.swiper.slideTo(e.activeIndex);
            }}
            watchSlidesProgress={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              type: 'progressbar',
              renderProgressbar: function (progressbarFillClass) {
                return ReactDOMServer.renderToStaticMarkup(
                  <span
                    className={cx(progressbarFillClass, styles.progressbar)}
                  ></span>,
                );
              },
            }}
          >
            {posters?.map((item, index) => (
              <SwiperSlide className={styles.poster} key={index}>
                <img
                  src={require(`assets/img/home/${
                    isTablet ? item?.mo : item?.pc
                  }.jpg`)}
                  className="swiper-lazy"
                  alt=""
                />
              </SwiperSlide>
            ))}
            <div ref={prevRef} className={styles.prev}></div>
            <div ref={nextRef} className={styles.next}></div>
          </Swiper>
        }
        secondChild={
          <>
            <Swiper
              ref={pdSlideRef}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              allowTouchMove={false}
              centeredSlides={true}
            >
              {products.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={cx(
                    styles.pdList,
                    index === pdActive ? styles.active : '',
                  )}
                  onClick={() => PdClick(index)}
                >
                  <img
                    src={require(`assets/img/home/${item.img}.jpg`)}
                    className="swiper-lazy"
                    alt=""
                  />
                  <p>{item.name}</p>
                  <p>{item.sub}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        }
      ></UiHalfWrap>
    </UiContainer>
  );
};

export default MostLoved;
