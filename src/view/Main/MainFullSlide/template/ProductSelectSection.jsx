import * as ReactDOMServer from 'react-dom/server';
import { useEffect, useState, useRef } from 'react';
import cx from 'classnames';
import styles from '@scss_view/main/mainFullSlide/template/ProductSelectSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import UiCircleButton from '@components/atoms/UiCircleButton';
import useMediaQuery from 'assets/js/useMediaQuery';

const ProductSelectSection = () => {
  const colorBtn = [
    {
      name: 'numbtn1',
      active: true,
    },
    {
      name: 'numbtn2',
      active: false,
    },
  ];
  const isTablet = useMediaQuery(900);
  const sliderRef = useRef();
  const [menuItems, setMenuItems] = useState(colorBtn);
  const [swiperIndex, setSwiperIndex] = useState(0);
  var pageBtn = document.getElementsByClassName(`${styles.paginationBtn}`);

  SwiperCore.use([Pagination]);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return ReactDOMServer.renderToStaticMarkup(
        <button
          type="button"
          className={`${styles.paginationBtn} ${className}`}
        >
          <span>{index + 1}</span>
        </button>,
      );
    },
  };

  const clickHandler = (name, index) => {
    setMenuItems(items =>
      items.map(item => ({
        ...item,
        active: item.name === name,
      })),
    );
    setSwiperIndex(index);
  };

  useEffect(() => {
    sliderRef.current.swiper.slideTo(swiperIndex);
  }, [swiperIndex]);

  useEffect(() => {
    for (let i = 0; i < pageBtn.length; i++) {
      if (pageBtn[i].classList.contains('swiper-pagination-bullet-active')) {
      }
      pageBtn[i].addEventListener('click', e => {
        var num = parseInt(e.target.innerText) - 1;
        setMenuItems(items =>
          items.map((item, index) => ({
            ...item,
            active: index === num,
          })),
        );
      });
    }
  }, []);

  return (
    <div className={cx(styles.pdSlide, isTablet ? styles.sm : styles.lg)}>
      <div className={styles.imgSec}>
        <div className={styles.imgWrap}>
          <img
            src={require('assets/img/home/01_main_slider2_pc_bg.jpg')}
            alt=""
          />
          {menuItems.map((item, index) => (
            <UiCircleButton
              className={cx(`${styles.numbtn}`, `${styles[item.name]}`)}
              color={item.active ? 'white' : 'pink'}
              num={index + 1}
              key={index}
              onClick={() => {
                clickHandler(item.name, index);
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.productSec}>
        <Swiper
          ref={sliderRef}
          onSlideChange={e => setSwiperIndex(e.activeIndex)}
          pagination={pagination}
          className={styles.productSecSwiper}
        >
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
