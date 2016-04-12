
import C from 'tinycolor2'

const blackInput = {
  fontSize: 15,
  scale: [48, 32, 24, 20, 16, 14, 12],
  gutter: 15,
  flexBasisText: 600,
  fontFamily: 'Open Sans',
  color: '#eee',
  background: '#242426',
  hover: '#50afc6',
  focus: 'hsl(50, 90%, 55%)',
  borderWidth: 1,
  borderRadius: 0,
  backgroundCard: '#313335',
  lineHeight: 1.4,
}

const whiteInput = {
  fontSize: 16,
  scale: [48, 32, 24, 20, 16, 14, 12],
  gutter: 20,
  flexBasisText: 600,
  fontFamily: 'Open Sans',
  color: '#242426',
  background: '#eee',
  hover: 'hsl(0, 60%, 52%)',
  focus: 'hsl(32, 78%, 55%)',
  borderWidth: 1,
  borderRadius: 5,
  backgroundCard: 'hsl(195, 3%, 78%)',
  lineHeight: 1.4,
}

export const generateTheme = (base) => {
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
    // borderWidth,
    // borderRadius,
    // lineHeight,
  } = base

  return {
    base,
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

export const defaultTheme = generateTheme(whiteInput)
export const blackTheme = generateTheme(blackInput)
