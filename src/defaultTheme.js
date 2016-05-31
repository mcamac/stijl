
import {generateTheme} from './generateTheme'

export const blackBase = {
  // fontSize: 15,
  // H0, H1, H2, H3, H4, H5, H6
  // scale: [48, 32, 24, 20, 16, 14, 12],
  // gutter: 15 / 2,
  // fontFamily: 'Open Sans',
  color: '#eee',
  background: '#242426',
  hover: '#50afc6',
  focus: 'hsl(50, 90%, 55%)',
  // borderWidth: 2,
  // borderRadius: 0,
  backgroundCard: '#313335',
  // lineHeight: 1.4,
  // flexBasisText: 800,
}

export const defaultTheme = generateTheme()
