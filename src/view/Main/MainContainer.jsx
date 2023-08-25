import { useEffect } from 'react';
import cx from 'classnames';
// import styles from '@scss_view/main/MainContainer.module.scss';
import S from '@scss_comp/atoms/UiHalfWrap.module.scss';
import MainFullSlide from './mainFullSlide/MainFullSlide';
import MostLoved from './mostLoved/MostLoved';
import NewProduct from './newProduct/NewProduct';
import SNS from './sns/SNS';

const MainContainer = () => {
  const container = document.getElementsByClassName(`${S.fullContainer}`);

  const listener = () => {
    const scrollY = window.scrollY;
    const offsetTopArray = [];

    for (let i = 0; i < container.length; i++) {
      offsetTopArray.push(container[i].offsetTop);
    }

    for (let i = 0; i < container.length; i++) {
      if (container[i].classList.contains(`${S.multiple}`)) {
        if (offsetTopArray[i] <= scrollY) {
          container[i].classList.add(`${S.fixed}`);

          container[i].classList.remove(`${S.end}`);

          if (offsetTopArray[i + 1] - window.innerHeight <= scrollY) {
            container[i].classList.remove(`${S.fixed}`);

            container[i].classList.add(`${S.end}`);
          }
        } else {
          container[i].classList.remove(`${S.fixed}`);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.addEventListener('scroll', listener);
    };
  }, []);

  return (
    <div>
      <MainFullSlide />
      <MostLoved />
      <NewProduct />
      <SNS />
    </div>
  );
};

export default MainContainer;
