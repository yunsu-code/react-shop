import { createGlobalStyle, css } from 'styled-components';
import { sizes } from './Theme';
import reset from 'styled-reset';

const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const GlobalFont = createGlobalStyle`
  /* Akkurat */
  @font-face {
    font-family: "Akkurat";
    src: local("Akkurat"),
    url("../fonts/Akkurat-Regular.woff") format('woff')
    url("../fonts/Akkurat-Regular.eot") format('eot')
    url("../fonts/Akkurat-Regular.woff2") format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Akkurat";
    src: local("Akkurat"),
    url("../fonts/Akkurat-Bold.woff") format('woff')
    url("../fonts/Akkurat-Bold.eot") format('eot')
    url("../fonts/Akkurat-Bold.woff2") format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  /* Constantia */
  @font-face {
    font-family: "Constantia";
    src: local("Constantia"),
    url("../fonts/Constantia-Regular.woff") format('woff')
    url("../fonts/Constantia-Regular.eot") format('eot')
    url("../fonts/Constantia-Regular.woff2") format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Constantia";
    src: local("Constantia"),
    url("../fonts/Constantia-Bold.woff") format('woff')
    url("../fonts/Constantia-Bold.eot") format('eot')
    url("../fonts/Constantia-Bold.woff2") format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  /* NotoSansKR */
  @font-face {
    font-family: "NotoSans";
    src: local("NotoSans"),
    url("../fonts/NotoSansKR-Regular.woff") format('woff')
    url("../fonts/NotoSansKR-Regular.eot") format('eot')
    url("../fonts/NotoSansKR-Regular.woff2") format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "NotoSans";
    src: local("NotoSans"),
    url("../fonts/NotoSansKR-Bold.woff") format('woff')
    url("../fonts/NotoSansKR-Bold.eot") format('eot')
    url("../fonts/NotoSansKR-Bold.woff2") format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`;
export { reset, Media, GlobalFont };
