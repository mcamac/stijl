
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

export const createCssObject = (t) => {
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
    }
    flexShrink: {
      flexShrink: 1,
    }
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
      background: t.backgroundCard,
      color,
      display: 'inline',
      fontFamily,
      fontSize: t.scale[6],
      lineHeight,
      overflow: 'auto',
      padding: gutter * 2,
      '>code': {
        padding: 0,
      }
    },
    Code: {
      background: t.backgroundCard,
      display: 'inline',
      fontFamily: t.fontFamilyCode,
      padding: gutter / 2,
      whiteSpace: 'pre',
    },
    Blockquote: {
      ...marginHorizontal,
      ...marginVertical,
      borderColor: t.backgroundCard,
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
      borderBottomWidth: t.borderWidth,
      borderColor: color,
      ...marginHorizontal,
      ...marginVertical,
    },
    A: {
      borderBottomWidth: t.borderWidth,
      borderColor: t.action,
      color: t.action,
      display: 'inline',
      textDecoration: 'none',
    },
    Link: {
      color: 'inherit',
      textDecoration: 'inherit',
    },
    Input: {
      background: 'transparent',
      borderColor: t.action,
      borderRadius,
      borderWidth: t.borderWidth,
      fontSize, color,
      MozAppearance: 'none',
      outline: 0,
      padding: t.gutter,
      WebkitAppearance: 'none',
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
    Select: {
      ...marginHorizontal,
      ...marginVerticalHalf,
      ':after': {
        borderBottom: `${t.borderWidth}px solid ${t.action}`,
        borderRight: `${t.borderWidth}px solid ${t.action}`,
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
        borderColor: t.action,
        borderRadius,
        borderWidth: t.borderWidth,
        color: t.action,
        cursor: 'pointer',
        fontSize,
        MozAppearance: 'none',
        outline: 0,
        padding: t.gutter,
        WebkitAppearance: 'none',
      },
    },
    Button: {
      background: t.action,
      borderColor: t.action,
      borderRadius,
      borderWidth: t.borderWidth,
      color: background,
      cursor: 'pointer',
      fontSize,
      MozAppearance: 'none',
      outline: 0,
      padding: t.gutter,
      WebkitAppearance: 'none',
      ...marginHorizontal,
      ...marginVerticalHalf,
    },
  }
}
