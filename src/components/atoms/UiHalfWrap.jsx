import React from 'react';
import cx from 'classnames';
import styles from 'assets/scss/components/atoms/UiHalfWrap.module.scss';

const UiHalfWrap = ({ firstChild, secondChild, className }) => {
  return (
    <>
      <div
        className={cx(
          `${styles.fullContainer}`,
          firstChild && secondChild ? 'multiple' : '',
          className,
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
