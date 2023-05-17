import React from 'react';
import { useRef } from 'react';
import cx from 'classnames';
import video from 'assets/video/main_vd.mp4';
import UiHalfWrap from '../../../components/atoms/UiHalfWrap';
import UiUnderlineLink from 'components/atoms/UiUnderlineLink';
import styles from 'assets/scss/view/Main/MainFullSlide/MainFullSlide.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const MainFullSlide = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <UiHalfWrap
      className={styles.mainSection}
      firstChild={
        <Swiper
          className={styles.swiper}
          modules={[Navigation]}
          onInit={swiper => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide className={styles.vdSlide}>
            <video autoPlay muted loop>
              <source src={video} type="video/mp4"></source>
            </video>
            <div className={styles.desc}>
              <span>8th New Collection</span>
              <h2>BREEZE OF NEW CHANGE</h2>
              <p>
                Face the breeze of change
                <br />
                and step out of your comfort zone
              </p>
              <UiUnderlineLink color="white" text={'Go Shop >'} />
            </div>
          </SwiperSlide>
          <SwiperSlide>페이지 페이지</SwiperSlide>
          <div ref={prevRef} className={styles.prev}></div>
          <div ref={nextRef} className={styles.next}></div>
        </Swiper>
      }
    ></UiHalfWrap>
  );
};

export default MainFullSlide;
