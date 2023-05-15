import React from 'react';
import cx from 'classnames';
import styles from 'assets/scss/components/atoms/UiHalfWrap.module.scss';

const UiHalfWrap = ({ firstChild, secondChild }) => {
  return (
    <>
      <div
        className={cx(
          `${styles.fullContainer}`,
          firstChild && secondChild ? 'multiple' : '',
        )}
      >
        {firstChild ? (
          <div className={styles.firstChild}>{firstChild}</div>
        ) : (
          ''
        )}
        {secondChild ? (
          <div className={styles.secondChild}>{secondChild}</div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default UiHalfWrap;

// const FullContainer = styled.div`
//   width: 100%;
//   position: relative;
//   overflow-y: visible;
//   min-height: 100vh;
//   .fixed .first
//     position: fixed;
//     top: 0;
//     left: 0;
//     bottom: auto;

// }

// .fixEnd {

// position: absolute

// top: auto

// left:0

// bottom: 0

// }
// `;

// const FirstChild = styled.div`
//   width: 50%;
//   height: 100vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   div {
//     width: 100%;
//     height: 100%;
//   }
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const SecondChild = styled.div`
//   height: auto;
//   padding-left: 50vw;
//   img {
//     width: 100%;
//     object-fit: cover;
//   }
// `;
