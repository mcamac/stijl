
const fontSize = 14

export const defaultTheme = {
  fontSize,
  lineHeight: 1.5,
  gutter: fontSize * 0.5,
  textBasis: 600,
  fontFamily: 'Open Sans',

  borderRadius: 0,
  borderWidth: 2,

  // colors
  background: 'hsl(0, 0%, 100%)',
  color: 'hsl(0, 0%, 0%)',
  action: 'hsl(197, 72%, 30%)',
  active: 'hsl(34, 67%, 49%)',
  card: 'hsl(0, 0%, 92%)',

  popOver: {
    gutter: fontSize * 0.5,
    background: 'hsl(0, 0%, 35%)',
    color: 'hsl(0, 0%, 90%)',
    action: 'hsl(197, 72%, 60%)',
    active: 'hsl(34, 67%, 49%)',
  },
}

export const blackTheme = {
  fontSize,
  lineHeight: 1.5,
  gutter: fontSize * 0.5,
  textBasis: 600,
  fontFamily: 'Open Sans',

  borderRadius: 0,
  borderWidth: 2,

  // colors
  background: 'hsl(0, 0%, 15%)',
  color: 'hsl(0, 0%, 90%)',
  action: 'hsl(197, 72%, 60%)',
  active: 'hsl(34, 67%, 49%)',
  card: 'hsl(0, 0%, 25%)',

  popOver: {
    gutter: fontSize * 0.5,
    background: 'hsl(0, 0%, 90%)',
    color: 'hsl(0, 0%, 0%)',
    action: 'hsl(197, 72%, 30%)',
    active: 'hsl(34, 67%, 49%)',
  },
}
