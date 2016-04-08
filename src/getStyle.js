
import _ from './lodash'

const defaultStyle = {
  boxSizing: 'border-box',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: 1,
  alignContent: 'flex-start',

  border: '0 solid',
  margin: 0,
  padding: 0,
}

const propsToOmit = [
  'id', 'children', 'className',
  'href', 'src', 'contentEditable',
  'name',
  'hover', 'active', 'focus', 'checked',
]

export const getStyle = {
  getActions() {
    return _.pickBy((value, name) => /^on/.test(name), this.props)
  },
  _getThemeForState(themeForComp) {
    if (this.state.active) {
      return _.get('active', themeForComp)
    }
    if (this.state.focus) {
      return _.get('focus', themeForComp)
    }
    if (this.state.hover) {
      return _.get('hover', themeForComp)
    }
    if (this.state.checked) {
      return _.get('checked', themeForComp)
    }
    return {}
  },
  _getFontSizeForS(theme) {
    if (this.props.s) {
      return {
        fontSize: theme.s[`s${this.props.s}`],
      }
    }
    return {}
  },
  _mergeTheme(props) {
    if (props.name) {
      const theme = this.getTheme()
      const themeForComp = _.get(props.name, theme)
      const fontSize = this._getFontSizeForS(theme)
      const themeForState = this._getThemeForState(themeForComp)
      return {
        ...defaultStyle,
        ...themeForComp,
        ...themeForState,
        ...fontSize,
        ...props,
      }
    }
    return {...defaultStyle, ...props}
  },
  getStyle() {
    return _.runFlow(
      this.props,
      this._mergeTheme,
      _.omitBy((value, name) => /^on/.test(name)),
      _.omit(propsToOmit),
    )
  },
}
