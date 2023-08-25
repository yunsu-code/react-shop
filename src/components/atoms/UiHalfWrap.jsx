import React from 'react';
import cx from 'classnames';
import styles from '@scss_comp/atoms/UiHalfWrap.module.scss';
import useMediaQuery from 'assets/js/useMediaQuery';

const UiHalfWrap = ({ firstChild, secondChild, className }) => {
  const isTablet = useMediaQuery(900);
  return (
    <>
      <div
        className={cx(
          styles.fullContainer,
          firstChild && secondChild
            ? isTablet
              ? styles.single
              : styles.multiple
            : '',
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
