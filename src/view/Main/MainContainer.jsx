import { useEffect } from 'react';
import cx from 'classnames';
import video from 'assets/video/main_vd.mp4';
import UiHalfWrap from '../../components/atoms/UiHalfWrap';
import UiCircleButton from 'components/atoms/UiCircleButton';
import UiUnderlineLink from 'components/atoms/UiUnderlineLink';
import styles from 'assets/scss/view/Main/MainContainer.module.scss';
import S from 'assets/scss/components/atoms/UiHalfWrap.module.scss';

const MainContainer = () => {
  const container = document.getElementsByClassName(`${S.fullContainer}`);

  const listener = () => {
    const scrollY = window.scrollY;
    const offsetTopArray = [];

    for (let i = 0; i < container.length; i++) {
      offsetTopArray.push(container[i].offsetTop);
    }

    for (let i = 0; i < container.length; i++) {
      if (matchMedia('screen and (min-width: 900px)').matches) {
        container[i].classList.remove('single');

        if (container[i].classList.contains('multiple')) {
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
      } else {
        console.log('ssss');
        if (container[i].classList.contains('multiple')) {
          container[i].classList.add('single');
          container[i].classList.remove(`${S.fixed}`);
          container[i].classList.remove(`${S.end}`);
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
      <UiHalfWrap
        className={cx(styles.mainSection)}
        firstChild={
          <>
            <video autoPlay muted loop>
              <source src={video} type="video/mp4"></source>
            </video>
            <div className={styles.desc}>
              <span>8th New Collection</span>
              <h2>BREEZE OF NEW CHANGE</h2>
              <p>
                Face the breeze of change
                <br />
                and step out of your comfort zone
              </p>
              <UiUnderlineLink color="white" text={'Go Shop >'} />
            </div>
          </>
        }
      ></UiHalfWrap>
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
