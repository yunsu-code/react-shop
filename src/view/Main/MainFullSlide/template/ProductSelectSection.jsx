import * as ReactDOMServer from 'react-dom/server';
import { useEffect, useState, useRef } from 'react';
import cx from 'classnames';
import styles from '@scss_view/main/mainFullSlide/template/ProductSelectSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import UiCircleButton from '@components/atoms/UiCircleButton';
import UiUnderlineLink from '@components/atoms/UiUnderlineLink';
import useMediaQuery from 'assets/js/useMediaQuery';
import UiPrice from '@components/atoms/UiPrice';

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
    {
      name: 'numbtn3',
      active: false,
    },
  ];
  const products = [
    {
      img: '01_main_slider2_pdt01.png',
      name: '뉴 엠비언스 컬러 마스카라 얼루어드',
      price: 21000,
    },
    {
      img: '01_main_slider2_pdt02.png',
      name: '트루 디멘션 레이어링 치크',
      price: 29000,
    },
    {
      img: '01_main_slider2_pdt03.png',
      name: '무드인핸서 리퀴드 마뜨 해치아웃',
      price: 19000,
    },
  ];
  const isTablet = useMediaQuery(900);
  const sliderRef = useRef();
  const [circleBtrns, setcircleBtrns] = useState(colorBtn);
  const [swiperIndex, setSwiperIndex] = useState(0);
  var pageBtn = document.getElementsByClassName(`${styles.paginationBtn}`);

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
    setcircleBtrns(items =>
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
        setcircleBtrns(items =>
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
          {circleBtrns.map((item, index) => (
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
          allowTouchMove={false}
          onSlideChange={e => setSwiperIndex(e.activeIndex)}
          pagination={pagination}
          modules={[Pagination]}
          className={styles.productSecSwiper}
        >
          {products.map((item, index) => (
            <SwiperSlide className={styles.pd} key={index}>
              <div className={styles.pdInner}>
                <img src={require(`assets/img/home/${item.img}`)} alt="" />
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>
                  <UiPrice num={item.price} />
                </p>
                <UiUnderlineLink
                  className={styles.linkBtn}
                  text={'shop >'}
                  color={'light'}
                  fontSize={'16px'}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSelectSection;
