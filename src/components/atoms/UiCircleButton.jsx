import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
const UiCircleButton = ({ color, hover, num }) => {
  return <span>{num}</span>;
};

UiCircleButton.defaultProps = {};

UiCircleButton.propTypes = {
  num: PropTypes.number,
};

export default UiCircleButton;
