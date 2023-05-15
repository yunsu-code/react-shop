const fonts = {
  family: {
    base: `'NotoSans', sans-serif`,
    engTitle: `'Constantia', serif`,
    eng: `'Akkurat', serif`,
  },
  size: {
    sm: '13px',
    base: '15px',
    m: '18px',
    lg: '20px',
    xl: '35px',
    title: '50px',
  },
  weight: {
    normal: 400,
    bold: 700,
  },
};

const colors = {
  pink: '#a36d6a',
  deepPink: '#936d6a',
  black: '#4e3836',
  white: '#fff',
  light: 'rgba(255, 255, 255, 0.7)',
};

// media query
const sizes = {
  desktop: 1024,
  tablet: 768,
};

const theme = {
  fonts,
  colors,
  sizes,
};

export default { fonts, colors, sizes, theme };
