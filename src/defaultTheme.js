
import c from 'tinycolor2'

const white = {
  fontSize: 16,
  fontRatio: 1.3,
  gutter: 20,
  textBasis: 650,
  fontFamily: 'Inconsolata',
  color: 'black',
  background: 'white',
  hover: 'red',
  focus: 'hsl(34, 74%, 47%)',
  borderWidth: 2,
  borderRadius: 0,
  card: 'hsl(0, 0%, 85%)',
  lineHeight: 1.2,
}

const black = {
  fontSize: 15,
  fontRatio: 1.333,
  gutter: 15,
  textBasis: 750,
  fontFamily: 'Open Sans',
  color: '#eee',
  background: '#242426',
  hover: '#50afc6',
  focus: 'hsl(50, 90%, 55%)',
  borderWidth: 2,
  borderRadius: 0,
  card: '#313335',
  lineHeight: 1.4,
}

const getHStyle = (size, sDefault) => ({
  fontSize: size,
  marginTop: size / 2,
  marginBottom: sDefault / 2,
})

const getDefaultTheme = (base = white) => {
  const s = {
    s1: base.fontSize * Math.pow(base.fontRatio, 3),
    s2: base.fontSize * Math.pow(base.fontRatio, 2),
    s3: base.fontSize * Math.pow(base.fontRatio, 1),
    s4: base.fontSize,
    s5: base.fontSize / Math.pow(base.fontRatio, 1),
    s6: base.fontSize / Math.pow(base.fontRatio, 2),
  }
  const theme = {s, base}
  theme.Window = {
    background: base.background,
  }
  theme.Col = {
    paddingLeft: base.gutter / 2,
    paddingRight: base.gutter / 2,
  }
  theme.ColWrapper = {
    marginLeft: -base.gutter / 2,
    marginRight: -base.gutter / 2,
    flexDirection: 'row',
  }
  theme.ContainerRow = {
    flexDirection: 'row',
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
  theme.ContainerCol = {
    flexGrow: 1,
    paddingLeft: base.gutter,
    paddingRight: base.gutter,
  }
  theme.ContainerColText = {
    ...theme.ContainerCol,
    flexGrow: 0,
    flexBasis: base.textBasis,
  }
  theme.Text = theme.Inline = {
    fontSize: s.s4,
    color: base.color,
    fontFamily: base.fontFamily,
  }
  theme.P = {
    ...theme.Inline,
    marginTop: s.s4 / 2,
    marginBottom: s.s4 / 2,
    lineHeight: base.lineHeight,
  }
  theme.A = {
    ...theme.Inline,
    color: base.hover,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    hover: {
      background: c(base.hover).setAlpha(0.15),
    },
    active: {
      background: c(base.hover).setAlpha(0.3).darken(20),
    },
  }
  theme.H1 = {
    ...theme.Inline,
    ...getHStyle(s.s1, s.s4),
  }
  theme.H2 = {
    ...theme.Inline,
    ...getHStyle(s.s2, s.s4),
  }
  theme.H3 = {
    ...theme.Inline,
    ...getHStyle(s.s3, s.s4),
  }
  theme.H4 = {
    ...theme.Inline,
    ...getHStyle(s.s4, s.s4),
  }
  theme.H5 = {
    ...theme.Inline,
    ...getHStyle(s.s5, s.s4),
  }
  theme.H6 = {
    ...theme.Inline,
    ...getHStyle(s.s6, s.s4),
  }
  theme.Button = {
    ...theme.Text,
    cursor: 'pointer',
    borderRadius: base.borderRadius,
    borderWidth: base.borderWidth,
    borderColor: base.hover,
    color: base.hover,
    fontWeight: 'bold',
    padding: s.s4 / 2,
    paddingTop: s.s4 / 4,
    paddingBottom: s.s4 / 4,
    marginRight: s.s4 / 4,
    hover: theme.A.hover,
    active: theme.A.active,
  }
  theme.ButtonFlat = {
    ...theme.Text,
    cursor: 'pointer',
    borderRadius: base.borderRadius,
    color: base.hover,
    fontWeight: 'bold',
    paddingTop: s.s4 / 4,
    paddingBottom: s.s4 / 4,
    marginRight: s.s4 / 4,
    hover: theme.A.hover,
    active: theme.A.active,
  }
  theme.ButtonPrime = {
    ...theme.Button,
    background: base.hover,
    color: base.background,
    hover: {
      background: c(base.hover).setAlpha(0.8).darken(10),
    },
    active: {
      background: c(base.hover).setAlpha(0.8).lighten(10),
    },
  }
  theme.Card = {
    margin: base.gutter / 2,
    marginTop: s.s4 / 2,
    marginBottom: s.s4 / 2,
    background: base.card,
    color: base.color,
    borderRadius: base.borderRadius,
    flexGrow: 1,
  }
  theme.Input = {
    ...theme.Button,
    color: base.color,
    marginTop: s.s4 / 2,
    marginBottom: s.s4 / 2,
    fontWeight: 'normal',
    focus: {
      background: c(base.focus).setAlpha(0.2),
      borderColor: base.focus,
    },
  }
  theme.Select = {
    ...theme.Input,
  }
  theme.SelectMenu = {
    ...theme.Input,
    background: c(base.card).setAlpha(0.95),
    borderTopWidth: 0,
    margin: 0,
    marginTop: 0,
    hover: {},
    active: {},
  }
  return theme
}

export const defaultTheme = getDefaultTheme()
export const blackTheme = getDefaultTheme(black)
