
import React from 'react'
import {getTheme} from '../getTheme'
import R from 'radium'
import C from 'tinycolor2'

export const A = R(React.createClass({
  mixins: [getTheme],
  getDefaultProps() {
    return {
      href: '#',
    }
  },
  render() {
    const theme = this.getTheme()
    const {
      hover,
    } = theme.base
    return <a
      {...this.getActions()}
      href={this.props.href}
      style={{
        ...this.defaultStyle,
        ...{
          display: 'inline',
          color: hover,
          ':hover': {
            color: C(hover).lighten(10),
          },
          ':active': {
            color: C(hover).darken(10),
          },
        },
        ...theme.A,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </a>
  },
}))
