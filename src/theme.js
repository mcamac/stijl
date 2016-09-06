
import _ from 'lodash/fp'
import {color as d3Color} from 'd3-color'

export const theme = {
  accent: 'steelblue',
  action: 'hsl(200, 0%, 50%)',
  background: 'white',
  backgroundCard: 'hsl(0, 0%, 94%)',
  borderRadius: 0,
  borderWidth: 1,
  color: 'black',
  flexBasisText: 600,
  fontFamily: 'Open Sans',
  fontFamilyCode: 'Inconsolata',
  fontFamilyDisplay: 'Open Sans',
  fontSize: 14,
  gutter: 14 / 2,
  lineHeight: 1.4,
  scale: [40, 34, 28, 22, 18, 14, 12], // H0, H1, H2, H3, H4, H5, H6
}

export const createCssObject = (theme) => {
  const {gutter, color, background, lineHeight, scale, fontSize, fontFamily, fontFamilyDisplay, borderRadius} = theme
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
  const paddingHorizontal = {
    paddingLeft: gutter,
    paddingRight: gutter,
  }
  // const paddingVertical = {
  //   paddingTop: gutter,
  //   paddingBottom: gutter,
  // }
  const paddingVerticalHalf = {
    paddingTop: gutter / 2,
    paddingBottom: gutter / 2,
  }
  return {
    default: {
      alignContent: 'flex-start',
      alignItems: 'stretch',
      border: '0 solid black',
      boxSizing: 'borderBox',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      margin: 0,
      minWidth: 0,
      padding: 0,
      position: 'relative',
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
      fontSize,
      fontFamily,
      color,
      minHeight: '100%',
    },
    Col: {

    },
    Row: {
      flexDirection: 'row',
    },
    RowWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    Span: {
      display: 'inline',
    },
    Pre: {
      ...marginHorizontal,
      ...marginVertical,
      background: theme.backgroundCard,
      color,
      display: 'inline',
      fontFamily,
      fontSize,
      lineHeight,
      overflow: 'auto',
      paddingLeft: gutter * 2,
      paddingRight: gutter * 2,
      paddingTop: gutter,
      paddingBottom: gutter,
      '>code': {
        padding: 0,
      }
    },
    Code: {
      background: theme.backgroundCard,
      display: 'inline',
      fontFamily: theme.fontFamilyCode,
      padding: gutter / 2,
      whiteSpace: 'pre',
    },
    Blockquote: {
      ...marginHorizontal,
      ...marginVertical,
      borderColor: theme.backgroundCard,
      borderLeftWidth: gutter,
      color,
      display: 'inline',
      fontFamily,
      fontSize,
      lineHeight,
      padding: gutter,
    },
    H0: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[0],
    },
    H1: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[1],
      fontWeight: 'normal',
    },
    H2: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[2],
      fontWeight: 'normal',
    },
    H3: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[3],
      fontWeight: 'normal',
    },
    H4: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[4],
      fontWeight: 'normal',
    },
    H5: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[5],
      fontWeight: 'normal',
    },
    H6: {
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[6],
      fontWeight: 'normal',
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    P: {
      color,
      display: 'inline',
      fontFamily,
      fontSize,
      lineHeight,
      ...marginHorizontal,
      ...marginVertical,
    },
    Img: {
      ...marginHorizontal,
      ...marginVertical,
      width: '100%',
    },
    Hr: {
      borderBottomWidth: theme.borderWidth,
      borderColor: color,
      ...marginHorizontal,
      ...marginVertical,
    },
    Ul: {
      ...marginHorizontal,
      ...marginVertical,
      marginLeft: gutter * 3,
      listStylePosition: 'inside',
    },
    Ol: {
      ...marginHorizontal,
      ...marginVertical,
      marginLeft: gutter * 3,
      listStylePosition: 'inside',
    },
    Li: {
      display: 'list-item',
      color,
      fontFamily,
      fontSize,
      lineHeight,
    },
    Table: {
      ...marginVertical,
      ...paddingHorizontal,
      borderSpacing: 0,
      color,
      display: 'table',
      fontFamily,
      fontSize,
      lineHeight,
      ' th:first-child,  td:first-child': {
        paddingLeft: 0,
      },
      ' th:last-child,  td:last-child': {
        paddingRight: 0,
      },
    },
    THead: {
      display: 'table-header-group',
    },
    TBody: {
      display: 'table-row-group',
    },
    TR: {
      display: 'table-row',
    },
    TH: {
      display: 'table-cell',
      textAlign: 'left',
      ...paddingVerticalHalf,
      ...paddingHorizontal,
      borderBottomWidth: 1,
      borderColor: _.set('opacity', 0.5, d3Color(theme.color)),
    },
    TD: {
      display: 'table-cell',
      textAlign: 'left',
      ...paddingVerticalHalf,
      ...paddingHorizontal,
      verticalAlign: 'top',
      borderTopWidth: theme.borderWidth,
      borderColor: _.set('opacity', 0.5, d3Color(theme.color)),
    },
    A: {
      borderBottomWidth: theme.borderWidth,
      borderColor: theme.action,
      color: theme.action,
      display: 'inline',
      textDecoration: 'none',
    },
    Link: {
      color: 'inherit',
      textDecoration: 'inherit',
    },
    Input: {
      background: 'transparent',
      borderColor: theme.action,
      borderRadius,
      borderWidth: theme.borderWidth,
      fontSize, color,
      MozAppearance: 'none',
      outline: 0,
      padding: theme.gutter,
      WebkitAppearance: 'none',
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    Select: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      ':after': {
        borderBottom: `${theme.borderWidth}px solid ${theme.action}`,
        borderRight: `${theme.borderWidth}px solid ${theme.action}`,
        bottom: 0,
        content: '" "',
        height: Math.abs(fontSize / 2),
        margin: 'auto',
        MsTransform: 'rotate(45deg)',
        position: 'absolute',
        right: fontSize + gutter / 2,
        top: '-0.2rem',
        transform: 'rotate(45deg)',
        WebkitTransform: 'rotate(45deg)',
        width: Math.abs(fontSize / 2),
      },
      ' > select': {
        background: 'transparent',
        borderColor: theme.action,
        borderRadius,
        borderWidth: theme.borderWidth,
        color: theme.action,
        cursor: 'pointer',
        fontSize,
        MozAppearance: 'none',
        outline: 0,
        padding: theme.gutter,
        WebkitAppearance: 'none',
      },
    },
    Button: {
      background: theme.action,
      borderColor: theme.action,
      borderRadius,
      borderWidth: theme.borderWidth,
      color: background,
      cursor: 'pointer',
      fontSize,
      MozAppearance: 'none',
      outline: 0,
      padding: theme.gutter,
      WebkitAppearance: 'none',
      ...marginHorizontal,
      ...marginVerticalHalf,
    },

    margin: {
      margin: gutter,
    },
    marginAuto: {
      margin: 'auto',
    },
    marginZero: {
      margin: 0,
    },
    marginHalf: {
      margin: gutter / 2,
    },
    marginDouble: {
      margin: gutter * 2,
    },
    marginHorizontal: {
      marginLeft: gutter,
      marginRight: gutter,
    },
    marginHorizontalAuto: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginHorizontalZero: {
      marginLeft: 0,
      marginRight: 0,
    },
    marginHorizontalHalf: {
      marginLeft: gutter / 2,
      marginRight: gutter / 2,
    },
    marginHorizontalDouble: {
      marginLeft: gutter * 2,
      marginRight: gutter * 2,
    },
    negativeMarginHorizontal: {
      marginLeft: -gutter,
      marginRight: -gutter,
    },
    marginVertical: {
      marginTop: gutter,
      marginBottom: gutter,
    },
    marginVerticalAuto: {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    marginVerticalZero: {
      marginTop: 0,
      marginBottom: 0,
    },
    marginVerticalHalf: {
      marginTop: gutter / 2,
      marginBottom: gutter / 2,
    },
    marginVerticalDouble: {
      marginTop: gutter * 2,
      marginBottom: gutter * 2,
    },
    negativeMarginVertical: {
      marginTop: -gutter,
      marginBottom: -gutter,
    },

    padding: {
      paddingLeft: gutter,
      paddingRight: gutter,
      paddingTop: gutter,
      paddingBottom: gutter,
    },
    paddingZero: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    paddingHalf: {
      paddingLeft: gutter / 2,
      paddingRight: gutter / 2,
      paddingTop: gutter / 2,
      paddingBottom: gutter / 2,
    },
    paddingDouble: {
      paddingLeft: gutter * 2,
      paddingRight: gutter * 2,
      paddingTop: gutter * 2,
      paddingBottom: gutter * 2,
    },
    paddingHorizontal: {
      paddingLeft: gutter,
      paddingRight: gutter,
    },
    paddingHorizontalZero: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    paddingHorizontalHalf: {
      paddingLeft: gutter / 2,
      paddingRight: gutter / 2,
    },
    paddingHorizontalDouble: {
      paddingLeft: gutter * 2,
      paddingRight: gutter * 2,
    },
    negativePaddingHorizontal: {
      paddingLeft: -gutter,
      paddingRight: -gutter,
    },
    paddingVertical: {
      paddingTop: gutter,
      paddingBottom: gutter,
    },
    paddingVerticalZero: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    paddingVerticalHalf: {
      paddingTop: gutter / 2,
      paddingBottom: gutter / 2,
    },
    paddingVerticalDouble: {
      paddingTop: gutter * 2,
      paddingBottom: gutter * 2,
    },
    negativePaddingVertical: {
      paddingTop: -gutter,
      paddingBottom: -gutter,
    },
    flexGrow: {
      flexGrow: 1,
    },
    flexShrink: {
      flexShrink: 1,
    },
  }
}
