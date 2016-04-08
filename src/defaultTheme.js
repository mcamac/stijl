
import c from 'tinycolor2'

const fontSize = 16
const fontRatio = 1.333

const initial = {
  fontRatio,
  fontSize,
  gutter: fontSize,
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

const getHStyle = (size, sDefault) => ({
  fontSize: size,
  marginTop: size / 2,
  marginBottom: sDefault / 2,
})

const getDefaultTheme = (input = initial) => {
  const s = {
    s1: input.fontSize * Math.pow(input.fontRatio, 3),
    s2: input.fontSize * Math.pow(input.fontRatio, 2),
    s3: input.fontSize * Math.pow(input.fontRatio, 1),
    s4: input.fontSize,
    s5: input.fontSize / Math.pow(input.fontRatio, 1),
    s6: input.fontSize / Math.pow(input.fontRatio, 2),
  }
  const theme = {s}
  theme.Window = {
    background: input.background,
  }
  theme.Col = {
    paddingLeft: input.gutter / 2,
    paddingRight: input.gutter / 2,
  }
  theme.ColWrapper = {
    marginLeft: -input.gutter / 2,
    marginRight: -input.gutter / 2,
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
    paddingLeft: input.gutter,
    paddingRight: input.gutter,
  }
  theme.ContainerColText = {
    ...theme.ContainerCol,
    flexGrow: 0,
    flexBasis: input.textBasis,
  }
  theme.Text = theme.Inline = {
    fontSize: s.s4,
    color: input.color,
    fontFamily: input.fontFamily,
  }
  theme.P = {
    ...theme.Inline,
    marginTop: s.s4 / 2,
    marginBottom: s.s4 / 2,
    lineHeight: input.lineHeight,
  }
  theme.A = {
    ...theme.Inline,
    color: input.hover,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    hover: {
      background: c(input.hover).setAlpha(0.15),
    },
    active: {
      background: c(input.hover).setAlpha(0.3).darken(20),
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
    borderRadius: input.borderRadius,
    borderWidth: input.borderWidth,
    borderColor: input.hover,
    color: input.hover,
    fontWeight: 'bold',
    padding: s.s4 / 2,
    paddingTop: s.s4 / 4,
    paddingBottom: s.s4 / 4,
    marginRight: s.s4 / 4,
    // marginTop: s.s4 / 2,
    // marginBottom: s.s4 / 2,
    hover: theme.A.hover,
    active: theme.A.active,
  }
  theme.ButtonFlat = {
    ...theme.Text,
    cursor: 'pointer',
    borderRadius: input.borderRadius,
    color: input.hover,
    fontWeight: 'bold',
    paddingTop: s.s4 / 4,
    paddingBottom: s.s4 / 4,
    marginRight: s.s4 / 4,
    // marginTop: s.s4 / 2,
    // marginBottom: s.s4 / 2,
    hover: theme.A.hover,
    active: theme.A.active,
  }
  theme.ButtonPrime = {
    ...theme.Button,
    background: input.hover,
    color: input.background,
    hover: {
      background: c(input.hover).setAlpha(0.8).darken(10),
    },
    active: {
      background: c(input.hover).setAlpha(0.8).lighten(10),
    },
  }
  theme.Card = {
    margin: input.gutter / 2,
    marginTop: s.s4 / 2,
    marginBottom: s.s4 / 2,
    background: input.card,
    color: input.color,
    borderRadius: input.borderRadius,
    flexGrow: 1,
  }
  theme.Input = {
    ...theme.Button,
    color: input.color,
    marginTop: s.s4 / 2,
    marginBottom: s.s4 / 2,
    fontWeight: 'normal',
    focus: {
      background: c(input.focus).setAlpha(0.2),
    },
  }
  return theme
}

export const defaultTheme = getDefaultTheme()
