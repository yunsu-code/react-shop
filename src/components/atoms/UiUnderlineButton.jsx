import React from 'react';
import styled, { css } from 'styled-components';

const UiUnderlineButton = ({ link, text, fontSize, fontColor }) => {
  return (
    <LineLink
      href={link}
      style={{ fontSize }}
      fontColor={fontColor}
      target="_blank"
    >
      {text}
    </LineLink>
  );
};

export default UiUnderlineButton;

const LineLink = styled.a`
  font-size: ${props =>
    props.theme.fonts.size[props.style.fontSize] ||
    props.style.fontSize + 'px' ||
    '13px'};
  color: ${props =>
    props.theme.colors[props.fontColor] || props.theme.colors.black};
  text-decoration: underline;
  &:hover {
    text-decoration: unset;
  }
`;
