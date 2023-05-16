import React from 'react';
import cx from 'classnames';
import styles from 'assets/scss/components/atoms/UiCircleButton.module.scss';

const UiCircleButton = ({ color = 'white', hover = false, num = 1 }) => {
  return (
    <span
      className={cx(
        `${styles.circleBtn}`,
        hover ? styles.hover : '',
        `${styles[color]}`,
      )}
    >
      <span>{num}</span>
    </span>
  );
};

export default UiCircleButton;
