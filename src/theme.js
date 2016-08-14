
import _ from 'lodash/fp'
import {hsl} from 'd3-color'

import {getClass} from './styleSheet'

export const theme = {
  fontSize: 15,
  scale: [48, 32, 24, 20, 15, 14, 12], // H0, H1, H2, H3, H4, H5, H6
  gutter: 15 / 2,
  fontFamily: 'Open Sans',
  fontFamilyDisplay: 'Open Sans',
  fontFamilyCode: 'Inconsolata',
  color: 'black',
  background: 'white',
  hover: 'hsl(0, 0%, 45%)',
  focus: 'hsl(32, 78%, 55%)',
  borderWidth: 2,
  borderRadius: 0,
  backgroundCard: 'hsl(195, 3%, 78%)',
  lineHeight: 1.4,
  flexBasisText: 800,
}

const createStyles = (t) => {
  const {gutter, color, background, lineHeight, scale, fontSize, fontFamily, fontFamilyDisplay, borderRadius} = t
  const marginHorizontal = {
    marginLeft: gutter,
    marginRight: gutter,
  }
  const marginVertical = {
    marginTop: gutter,
    marginBottom: gutter,
  }
  const marginVerticalHalf = {
    marginTop: gutter / 2,
    marginBottom: gutter / 2,
  }
  return {
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

    margin: {
      margin: `${gutter}px !important`,
    },
    marginAuto: {
      margin: 'auto !important',
    },
    marginZero: {
      margin: '0px !important',
    },
    marginHalf: {
      margin: `${gutter / 2}px !important`,
    },
    marginDouble: {
      margin: `${gutter * 2}px !important`,
    },
    marginHorizontal: {
      marginLeft: `${gutter}px !important`,
      marginRight: `${gutter}px !important`,
    },
    marginHorizontalAuto: {
      marginLeft: 'auto !important',
      marginRight: 'auto !important',
    },
    marginHorizontalZero: {
      marginLeft: '0px !important',
      marginRight: '0px !important',
    },
    marginHorizontalHalf: {
      marginLeft: `${gutter / 2}px !important`,
      marginRight: `${gutter / 2}px !important`,
    },
    marginHorizontalDouble: {
      marginLeft: `${gutter * 2}px !important`,
      marginRight: `${gutter * 2}px !important`,
    },
    negativeMarginHorizontal: {
      marginLeft: `${-gutter}px !important`,
      marginRight: `${-gutter}px !important`,
    },
    marginVertical: {
      marginTop: `${gutter}px !important`,
      marginBottom: `${gutter}px !important`,
    },
    marginVerticalAuto: {
      marginTop: 'auto !important',
      marginBottom: 'auto !important',
    },
    marginVerticalZero: {
      marginTop: '0px !important',
      marginBottom: '0px !important',
    },
    marginVerticalHalf: {
      marginTop: `${gutter / 2}px !important`,
      marginBottom: `${gutter / 2}px !important`,
    },
    marginVerticalDouble: {
      marginTop: `${gutter * 2}px !important`,
      marginBottom: `${gutter * 2}px !important`,
    },
    negativeMarginVertical: {
      marginTop: `${-gutter}px !important`,
      marginBottom: `${-gutter}px !important`,
    },

    padding: {
      paddingLeft: `${gutter}px !important`,
      paddingRight: `${gutter}px !important`,
      paddingTop: `${gutter}px !important`,
      paddingBottom: `${gutter}px !important`,
    },
    paddingZero: {
      paddingLeft: '0px !important',
      paddingRight: '0px !important',
      paddingTop: '0px !important',
      paddingBottom: '0px !important',
    },
    paddingHalf: {
      paddingLeft: `${gutter / 2}px !important`,
      paddingRight: `${gutter / 2}px !important`,
      paddingTop: `${gutter / 2}px !important`,
      paddingBottom: `${gutter / 2}px !important`,
    },
    paddingDouble: {
      paddingLeft: `${gutter * 2}px !important`,
      paddingRight: `${gutter * 2}px !important`,
      paddingTop: `${gutter * 2}px !important`,
      paddingBottom: `${gutter * 2}px !important`,
    },
    paddingHorizontal: {
      paddingLeft: `${gutter}px !important`,
      paddingRight: `${gutter}px !important`,
    },
    paddingHorizontalZero: {
      paddingLeft: '0px !important',
      paddingRight: '0px !important',
    },
    paddingHorizontalHalf: {
      paddingLeft: `${gutter / 2}px !important`,
      paddingRight: `${gutter / 2}px !important`,
    },
    paddingHorizontalDouble: {
      paddingLeft: `${gutter * 2}px !important`,
      paddingRight: `${gutter * 2}px !important`,
    },
    negativePaddingHorizontal: {
      paddingLeft: `${-gutter}px !important`,
      paddingRight: `${-gutter}px !important`,
    },
    paddingVertical: {
      paddingTop: `${gutter}px !important`,
      paddingBottom: `${gutter}px !important`,
    },
    paddingVerticalZero: {
      paddingTop: '0px !important',
      paddingBottom: '0px !important',
    },
    paddingVerticalHalf: {
      paddingTop: `${gutter / 2}px !important`,
      paddingBottom: `${gutter / 2}px !important`,
    },
    paddingVerticalDouble: {
      paddingTop: `${gutter * 2}px !important`,
      paddingBottom: `${gutter * 2}px !important`,
    },
    negativePaddingVertical: {
      paddingTop: `${-gutter}px !important`,
      paddingBottom: `${-gutter}px !important`,
    },

    Window: {
      background,
      fontFamily,
      color,
    },
    Col: {

    },
    Span: {
      display: 'inline',
    },
    Row: {
      flexDirection: 'row',
    },
    RowWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    H0: {
      fontSize: scale[0],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H1: {
      fontSize: scale[1],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H2: {
      fontSize: scale[2],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H3: {
      fontSize: scale[3],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H4: {
      fontSize: scale[4],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H5: {
      fontSize: scale[5],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H6: {
      fontSize: scale[6],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    P: {
      display: 'inline',
      fontSize,
      lineHeight,
      fontFamily,
      color,
      ...marginHorizontal,
      ...marginVertical,
    },
    A: {
      display: 'inline',
      textDecoration: 'none',
      borderBottomWidth: 1,
      color,
      ':hover': {
        borderBottomWidth: 0,
        color: t.background,
        background: _.set('opacity', 0.35, hsl(t.color)),
      },
    },
    Link: {
      color: 'inherit',
      textDecoration: 'inherit',
    },
    Input: {
      borderRadius,
      fontSize, color,
      ...marginHorizontal,
      borderWidth: t.borderWidth,
      WebkitAppearance: 'none',
      padding: t.gutter,
      outline: 0,
    },
    Select: {

    },
    Button: {

    },
  }
}

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
