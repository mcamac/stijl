
import _ from 'lodash/fp'
import getClass from './styleSheet'

export let theme = {
  fontSize: 15,
  scale: [48, 32, 24, 20, 15, 14, 12], // H0, H1, H2, H3, H4, H5, H6
  gutter: 15 / 2,
  fontFamily: 'Open Sans',
  fontFamilyDisplay: 'Open Sans',
  fontFamilyCode: 'Inconsolata',
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

const createStyles = (t) => ({
  default: {
    boxSizing: 'borderBox',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexShrink: 0,
    alignContent: 'flex-start',
    border: '0 solid black',
    margin: 0,
    padding: 0,
    minWidth: 0,
  },
  mh: {
    marginLeft: `${t.gutter}px !important`,
    marginRight: `${t.gutter}px !important`,
  },
  mv: {
    marginTop: `${t.gutter}px !important`,
    marginBottom: `${t.gutter}px !important`,
  },
  Window: {
    fontFamily: t.fontFamily,
    color: t.color,
  },
  Col: {

  },
  Span: {
    display: 'inline',
  },
  Row: {
    flexDirection: 'row',
  },
  H0: {
    fontFamily: t.fontFamily,
    fontSize: t.scale[0],
    color: t.color,
    marginLeft: t.gutter,
    marginRight: t.gutter,
  },
  H1: {
    fontFamily: t.fontFamily,
    fontSize: t.scale[1],
    color: t.color,
    marginLeft: t.gutter,
    marginRight: t.gutter,
  },
  H2: {
    fontFamily: t.fontFamily,
    fontSize: t.scale[2],
    color: t.color,
    marginLeft: t.gutter,
    marginRight: t.gutter,
  },
  H3: {
    fontFamily: t.fontFamily,
    fontSize: t.scale[3],
    color: t.color,
    marginLeft: t.gutter,
    marginRight: t.gutter,
  },
  H4: {
    fontFamily: t.fontFamily,
    fontSize: t.scale[4],
    color: t.color,
    marginLeft: t.gutter,
    marginRight: t.gutter,
  },
  H5: {
    fontFamily: t.fontFamily,
    fontSize: t.scale[5],
    color: t.color,
    marginLeft: t.gutter,
    marginRight: t.gutter,
  },
  H6:{
    fontFamily: t.fontFamily,
    fontSize: t.scale[6],
    color: t.color,
    marginLeft: t.gutter,
    marginRight: t.gutter,
  },
  P: {
    fontFamily: t.fontFamily,
    fontSize: t.fontSize,
    color: t.color,
    marginLeft: t.gutter,
    marginRight: t.gutter,
  },
  A: {

  },
  Input: {

  },
  Select: {

  },
  Button: {

  },
})

const getClassesFromStyles = (styles) => {
  const classes = {}
  _.each(d => {
    classes[d[0]] = getClass(d[1])
  }, _.toPairs(styles))
  return classes
}

export let styles = createStyles(theme)
export let classes = undefined // getClassesFromStyles(styles)


export const setTheme = (_theme) => {
  styles = createStyles(_theme)
  classes = getClassesFromStyles(styles)
}

export const setStyles = (_tagStyles) => {
  classes = getClassesFromStyles(_tagStyles)
}
