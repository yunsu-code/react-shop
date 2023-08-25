import React from 'react';
import styles from '@scss_comp/atoms/UiUnderlineLink.module.scss';
import cx from 'classnames';

const UiUnderlineLink = ({
  link = '',
  text,
  fontSize = '12px',
  color = 'pink',
}) => {
  return (
    <a
      href={link}
      style={{ fontSize: fontSize }}
      className={cx(`${styles.lineLink}`, styles[color])}
    >
      {text}
    </a>
  );
};

export default UiUnderlineLink;
