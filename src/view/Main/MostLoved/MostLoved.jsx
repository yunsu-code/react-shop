import React from 'react';
import cx from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import UiHalfWrap from '@components/atoms/UiHalfWrap';
import useMediaQuery from 'assets/js/useMediaQuery';
import styles from '@scss_view/main/mainFullSlide/MainFullSlide.module.scss';

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
      img: '03_main_mloved_banner1_mo_bg',
      name: '',
    },
    {
      img: '03_main_mloved_banner2_mo_bg',
      name: '',
    },
    {
      img: '03_main_mloved_banner3_mo_bg',
      name: '',
    },
    {
      img: '03_main_mloved_banner4_mo_bg',
      name: '',
    },
    {
      img: '03_main_mloved_banner5_mo_bg',
      name: '',
    },
  ];
  return (
    <UiHalfWrap
      firstChild={
        <Swiper className={styles.leftSlide}>
          {isTablet
            ? posters.map((item, index) => (
                <SwiperSlide className={styles.poster} key={index}>
                  <img src={require(`assets/img/home/${item.mo}.jpg`)} alt="" />
                </SwiperSlide>
              ))
            : posters.map((item, index) => (
                <SwiperSlide className={styles.poster} key={index}>
                  <img src={require(`assets/img/home/${item.pc}.jpg`)} alt="" />
                </SwiperSlide>
              ))}
        </Swiper>
      }
      secondChild={
        <div>
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
          Hello World
          <br />
        </div>
      }
    ></UiHalfWrap>
  );
};

export default MostLoved;
