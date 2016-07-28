
import React from 'react'
import {getTheme} from '../getTheme'

export const Window = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    const {
      color,
      background,
      fontSize,
      fontFamily,
    } = theme.base
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        minHeight: '100%',
        background,
        color,
        fontFamily,
        fontSize,
        ...this.getLocalGutters(),
        ...theme.Window,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
