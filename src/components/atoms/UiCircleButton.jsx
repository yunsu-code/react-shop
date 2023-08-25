import React from 'react';
import cx from 'classnames';
import styles from '@scss_comp/atoms/UiCircleButton.module.scss';

const UiCircleButton = ({
  color = 'white',
  hover = false,
  num = 1,
  className,
  onClick,
}) => {
  return (
    <span
      className={cx(
        `${styles.circleBtn}`,
        hover ? styles.hover : '',
        `${styles[color]}`,
        className,
      )}
      onClick={onClick}
    >
      <span>{num}</span>
    </span>
  );
};

export default UiCircleButton;
