
import _ from 'lodash/fp'
import {hsl} from 'd3-color'

import {getClass} from './styleSheet'

export const theme = {
  fontSize: 14,
  scale: [40, 34, 28, 22, 18, 14, 12], // H0, H1, H2, H3, H4, H5, H6
  gutter: 14 / 2,
  fontFamily: 'Open Sans',
  fontFamilyDisplay: 'Open Sans',
  fontFamilyCode: 'Inconsolata',
  color: 'black',
  background: 'white',
  action: 'hsl(200, 0%, 50%)',
  borderWidth: 1,
  borderRadius: 0,
  backgroundCard: 'hsl(0, 0%, 94%)',
  lineHeight: 1.4,
  flexBasisText: 600,
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
    Space: {
      flexBasis: gutter,
    },
    SpaceHalf: {
      flexBasis: gutter / 2,
    },
    SpaceDouble: {
      flexBasis: gutter * 2,
    },
    SpaceTriple: {
      flexBasis: gutter * 2,
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
    Pre: {
      fontSize: t.scale[6],
      background: t.backgroundCard,
      lineHeight,
      fontFamily,
      color,
      display: 'inline',
      ...marginHorizontal,
      ...marginVertical,
      padding: gutter * 2,
      overflow: 'auto',
      '>code': {
        padding: 0,
      }
    },
    Code: {
      display: 'inline',
      whiteSpace: 'pre',
      fontFamily: t.fontFamilyCode,
      background: t.backgroundCard,
      padding: gutter / 2,
    },
    Blockquote: {
      borderLeftWidth: gutter,
      borderColor: t.backgroundCard,
      display: 'inline',
      padding: gutter,
      fontSize,
      lineHeight,
      fontFamily,
      color,
      ...marginHorizontal,
      ...marginVertical,
    },
    Row: {
      flexDirection: 'row',
    },
    RowWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    H0: {
      display: 'inline',
      fontSize: scale[0],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H1: {
      display: 'inline',
      fontSize: scale[1],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H2: {
      display: 'inline',
      fontSize: scale[2],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H3: {
      display: 'inline',
      fontSize: scale[3],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H4: {
      display: 'inline',
      fontSize: scale[4],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H5: {
      display: 'inline',
      fontSize: scale[5],
      fontFamily: fontFamilyDisplay,
      color,
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    H6: {
      display: 'inline',
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
    Hr: {
      borderBottomWidth: t.borderWidth,
      ...marginHorizontal,
      ...marginVertical,
    },
    A: {
      display: 'inline',
      textDecoration: 'none',
      borderColor: t.action,
      borderBottomWidth: t.borderWidth,
      color: t.action,
    },
    Link: {
      color: 'inherit',
      textDecoration: 'inherit',
    },
    Input: {
      borderRadius,
      fontSize, color,
      ...marginHorizontal,
      ...marginVerticalHalf,
      borderWidth: t.borderWidth,
      borderColor: t.action,
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      padding: t.gutter,
      outline: 0,
    },
    Select: {
      ':after': {
        content: '" "',
        position: 'absolute',
        right: fontSize + gutter / 2,
        top: '-0.2rem',
        bottom: 0,
        margin: 'auto',
        width: Math.abs(fontSize / 2),
        height: Math.abs(fontSize / 2),
        borderBottom: `${t.borderWidth}px solid ${t.action}`,
        borderRight: `${t.borderWidth}px solid ${t.action}`,
        WebkitTransform: 'rotate(45deg)',
        MsTransform: 'rotate(45deg)',
        transform: 'rotate(45deg)',
      },
      ' > select': {
        cursor: 'pointer',
        borderRadius,
        fontSize,
        ...marginHorizontal,
        ...marginVerticalHalf,
        color: t.action,
        borderWidth: t.borderWidth,
        borderColor: t.action,
        background: t.background,
        borderRadius: t.borderRadius,
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        padding: t.gutter,
        outline: 0,
      },
    },
    Button: {
      borderRadius,
      fontSize,
      cursor: 'pointer',
      color: background,
      background: t.action,
      borderColor: t.action,
      ...marginHorizontal,
      ...marginVerticalHalf,
      borderWidth: t.borderWidth,
      padding: t.gutter,
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      outline: 0,
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
