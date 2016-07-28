
import React from 'react'
import {getTheme} from '../getTheme'
import R from 'radium'
import C from 'tinycolor2'

export const Select = R(React.createClass({
  mixins: [getTheme],
  getDefaultProps() {
    return {}
  },
  render() {
    const theme = this.getTheme()
    const {
      borderWidth,
      hover,
      background,
      fontSize,
      focus,
      borderRadius,
    } = theme.base
    return <select
      {...this.getActions()}
      value={this.props.value}
      style={{
        ...this.defaultStyle,
        cursor: 'pointer',
        borderWidth,
        borderColor: hover,
        color: hover,
        borderRadius,
        fontSize,
        background,
        appearance: 'none',
        outline: 'none',
        ':hover': {
          background: C(hover).lighten(10).setAlpha(0.2),
        },
        ':active': {
          background: C(hover).darken(10).setAlpha(0.2),
        },
        ':focus': {
          borderColor: focus,
          background: C(focus).setAlpha(0.2),
        },
        ...this.getLocalGutters({
          m: true,
          p: true,
          pV: true,
        }),
        ...theme.Select,
        ...this.getPropsStyle(['placeholder']),
        ...this.props.style,
      }}
    >
      {this.props.children}
    </select>
  },
}))
