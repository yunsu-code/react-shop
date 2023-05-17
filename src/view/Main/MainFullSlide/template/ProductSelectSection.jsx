import * as ReactDOMServer from 'react-dom/server';
import React from 'react';
import styles from 'assets/scss/view/Main/MainFullSlide/template/ProductSelectSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductSelectSection = () => {
  SwiperCore.use([Pagination]);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return ReactDOMServer.renderToStaticMarkup(
        <button
          type="button"
          className={`${styles.paginationBtn} ${index} ${className}`}
        ></button>,
      );
    },
  };
  return (
    <div className={styles.pdSlide}>
      <div className={styles.imgSec}>
        <img
          src={require('assets/img/home/01_main_slider2_pc_bg.jpg')}
          alt=""
        />
      </div>
      <div className={styles.productSec}>
        <Swiper pagination={pagination} className={styles.productSecSwiper}>
          <SwiperSlide className={styles.pd}>
            <img
              src={require('assets/img/home/01_main_slider2_pdt01.png')}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.pd}>
            <img
              src={require('assets/img/home/01_main_slider2_pdt02.png')}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSelectSection;
