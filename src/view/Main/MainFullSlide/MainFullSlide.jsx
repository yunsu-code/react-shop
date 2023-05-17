import React from 'react';
import { useRef } from 'react';
import cx from 'classnames';
import UiHalfWrap from '../../../components/atoms/UiHalfWrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import styles from 'assets/scss/view/Main/MainFullSlide/MainFullSlide.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import VideoSection from './template/VideoSection';
import ProductSelectSection from './template/ProductSelectSection';

const MainFullSlide = () => {
  SwiperCore.use([Navigation]);
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
          <SwiperSlide>
            <VideoSection />
          </SwiperSlide>
          <SwiperSlide>
            <ProductSelectSection />
          </SwiperSlide>
          <div ref={prevRef} className={styles.prev}></div>
          <div ref={nextRef} className={styles.next}></div>
        </Swiper>
      }
    ></UiHalfWrap>
  );
};

export default MainFullSlide;
