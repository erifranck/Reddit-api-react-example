const colorpalette = {
  aqua: '#20A39E',
  red: '#931621',
  sky: '#2274A5',
  yellow: '#FFC70E',
  white: '#E0E4EE',
  charcoal: '#061426'

}

const fontRules = {
  color: colorpalette.white,
  baseSize: 16
}

export default {
  colors: {
    primary: colorpalette.aqua,
    secondary: colorpalette.red
  },
  fonts: { ...fontRules },
  buttons: {
    colors: {
      primary: colorpalette.aqua,
      secondary: colorpalette.red
    },
    fonts: {
      color: colorpalette.white,
      size: '16px'
    },
    height: '40px',
    padding: '10px'
  },
  palette: {
    ...colorpalette
  }
}
