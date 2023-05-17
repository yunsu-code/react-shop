import { useEffect } from 'react';
import cx from 'classnames';
import styles from 'assets/scss/view/Main/MainContainer.module.scss';
import S from 'assets/scss/components/atoms/UiHalfWrap.module.scss';
import MainFullSlide from './MainFullSlide/MainFullSlide';
import MostLoved from './MostLoved/MostLoved';
import NewProduct from './NewProduct/NewProduct';
import SNS from './SNS/SNS';

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
