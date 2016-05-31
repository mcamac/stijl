
import C from 'tinycolor2'

const defaultBase = {
  fontSize: 15,
  // H0, H1, H2, H3, H4, H5, H6
  scale: [48, 32, 24, 20, 16, 14, 12],
  gutter: 15 / 2,
  fontFamily: 'Open Sans',
  color: '#242426',
  background: '#eee',
  hover: 'hsl(0, 60%, 52%)',
  focus: 'hsl(32, 78%, 55%)',
  borderWidth: 2,
  borderRadius: 0,
  backgroundCard: 'hsl(195, 3%, 78%)',
  lineHeight: 1.4,
  flexBasisText: 800,
}

export const getComponentsTheme = (base) => {
  const {
    // color,
    // background,
    // fontSize,
    // fontFamily,
    // backgroundCard,
    // gutter,
    // flexBasisText,
    hover,
    // focus,
    borderWidth,
    // borderRadius,
    // lineHeight,
  } = base

  return {
    Input: {
      borderWidth: 0,
      borderBottomWidth: borderWidth,
      background: C(hover).setAlpha(0.1),
    },
    Select: {
      borderWidth: 0,
      borderBottomWidth: borderWidth,
      background: C(hover).setAlpha(0.1),
    },
    A: {
      textDecoration: 'none',
      ':hover': {
        background: C(hover).lighten(10).setAlpha(0.2),
      },
      ':active': {
        background: C(hover).darken(10).setAlpha(0.2),
      },
    },
  }
}

export const generateTheme = (input = {}) => {
  const base = {
    ...defaultBase,
    ...input.base,
  }
  const theme = {
    ...getComponentsTheme(base),
    ...input,
    base,
  }
  return theme
}
