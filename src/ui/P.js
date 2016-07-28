
import React from 'react'
import {getTheme} from '../getTheme'
import R from 'radium'

export const P = R(React.createClass({
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
        display: 'inline',
        color,
        fontFamily,
        fontSize,
        lineHeight,
        ...this.getLocalGutters({
          m: true,
          mV: true,
        }),
        ...theme.P,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
}))
