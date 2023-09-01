import { useRef } from 'react';
import UiHalfWrap from '@components/atoms/UiHalfWrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from '@scss_view/main/mainFullSlide/MainFullSlide.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import VideoSection from './template/VideoSection';
import ProductSelectSection from './template/ProductSelectSection';

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
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={swiper => {
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
