
import React from 'react'
import {generateTheme} from './generateTheme'

export default class ThemeRoot extends React.Component {
  static childContextTypes = {
    theme: React.PropTypes.object,
  }
  getTheme = () =>
    generateTheme(this.props.theme)

  getChildContext = () => ({
    theme: this.getTheme(),
  })

  render() {
    if (!this.props.children) return null
    return this.props.children
  }
}
