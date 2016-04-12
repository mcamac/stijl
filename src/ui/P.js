
import React from 'react'
import {getTheme} from '../getTheme'

export const P = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    const {
      color,
      fontSize,
      fontFamily,
      lineHeight,
    } = theme.base
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          display: 'inline',
          marginTop: theme.base.gutter / 2,
          marginBottom: theme.base.gutter / 2,
          color,
          fontFamily,
          fontSize,
          lineHeight,
        },
        ...theme.P,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
