
import _ from 'lodash/fp'
import {color as d3Color} from 'd3-color'

export const theme = {
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
  const paddingVertical = {
    paddingTop: gutter,
    paddingBottom: gutter,
  }
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
    flexGrow: {
      flexGrow: 1,
    },
    flexShrink: {
      flexShrink: 1,
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
      minHeight: '100%',
    },
    Col: {

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
      padding: gutter * 2,
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
    Row: {
      flexDirection: 'row',
    },
    RowWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
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
    },
    H2: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[2],
    },
    H3: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[3],
    },
    H4: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[4],
    },
    H5: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[5],
    },
    H6: {
      color,
      display: 'inline',
      fontFamily: fontFamilyDisplay,
      fontSize: scale[6],
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
      width: '100%',
      // tableLayout: 'fixed',
      display: 'table',
      ...marginVertical,
      ...paddingHorizontal,
      borderSpacing: 0,
      color,
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
  }
}
