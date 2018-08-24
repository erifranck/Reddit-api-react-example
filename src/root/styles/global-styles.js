import { injectGlobal } from 'styled-components'
import theme from './theme'

const calculateFont = (scale) => theme.fonts.baseSize * scale
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: ${theme.palette.grey}
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  h1 {
    font-size: ${calculateFont(3)}px;
  }
  h2 {
    font-size: ${calculateFont(2.5)}px;
  }
  h3 {
    font-size: ${calculateFont(2)}px;
  }
  h4 {
    font-size: ${calculateFont(1.5)}px;
  }
  h5 {
    font-size: ${calculateFont(1.25)}px;
  }
  h6 {
    font-size: ${calculateFont(1)}px;
  }
`
