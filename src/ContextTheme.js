
import React from 'react'
import {defaultTheme} from './defaultTheme'

export const ContextTheme = React.createClass({
  getDefaultProps() {
    return {theme: defaultTheme}
  },
  childContextTypes: {
    theme: React.PropTypes.object,
  },
  getChildContext() {
    return {theme: this.props.theme}
  },
  render() {
    return <div>{this.props.children}</div>
  },
})
