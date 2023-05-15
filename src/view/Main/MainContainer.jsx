import { useEffect } from 'react';
import UiHalfWrap from '../../components/atoms/UiHalfWrap';
import styles from 'assets/scss/components/atoms/UiHalfWrap.module.scss';
import UiCircleButton from 'components/atoms/UiCircleButton';

const MainContainer = () => {
  const container = document.getElementsByClassName(`${styles.fullContainer}`);

  const listener = () => {
    const scrollY = window.scrollY;
    const offsetTopArray = [];

    for (var i = 0; i < container.length; i++) {
      offsetTopArray.push(container[i].offsetTop);
    }

    for (var i = 0; i < container.length; i++) {
      if (container[i].classList.contains('multiple')) {
        if (offsetTopArray[i] <= scrollY) {
          container[i].classList.add(`${styles.fixed}`);

          container[i].classList.remove(`${styles.end}`);

          if (offsetTopArray[i + 1] - window.innerHeight <= scrollY) {
            container[i].classList.remove(`${styles.fixed}`);

            container[i].classList.add(`${styles.end}`);
          }
        } else {
          container[i].classList.remove(`${styles.fixed}`);
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
      <UiHalfWrap></UiHalfWrap>
      <UiHalfWrap
        firstChild={<div></div>}
        secondChild={
          <div style={{ fontSize: 50 + 'px', backgroundColor: 'steelblue' }}>
            <UiCircleButton num={3} />
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
      <UiHalfWrap
        firstChild={
          <div style={{ backgroundColor: 'yellow' }}>ddfdgsdggsd</div>
        }
        secondChild={
          <div style={{ fontSize: 50 + 'px', backgroundColor: 'red' }}>
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
      <UiHalfWrap
        firstChild={<div style={{ backgroundColor: 'blue' }}>zvdgsgtwsfds</div>}
        secondChild={
          <div style={{ fontSize: 50 + 'px', backgroundColor: 'yellow' }}>
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
    </div>
  );
};

export default MainContainer;
