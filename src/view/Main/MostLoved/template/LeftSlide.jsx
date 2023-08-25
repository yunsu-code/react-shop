import cx from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '@scss_view/main/mostLoved/template/LeftSlide.module.scss';

const LeftSlide = () => {
  return (
    <>
      <Swiper className={styles.leftSlide}>
        <SwiperSlide className={styles.pd}>
          {/* <img
            src={require('assets/img/home/01_main_slider2_pdt01.png')}
            alt=""
          /> */}
        </SwiperSlide>
        <SwiperSlide className={styles.pd}>
          {/* <img
            src={require('assets/img/home/01_main_slider2_pdt02.png')}
            alt=""
          /> */}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LeftSlide;
