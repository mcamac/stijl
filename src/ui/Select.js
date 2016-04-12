
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
      gutter,
      background,
      fontSize,
      color,
      focus,
      borderRadius,
    } = theme.base
    return <select
      {...this.getActions()}
      value={this.props.value}
      style={{
        ...this.defaultStyle,
        ...{
          cursor: 'pointer',
          borderWidth,
          borderColor: hover,
          color,
          borderRadius,
          fontSize,
          background,
          appearance: 'none',
          outline: 'none',
          marginTop: gutter / 4,
          marginBottom: gutter / 4,
          paddingTop: gutter / 4,
          paddingLeft: gutter / 2,
          paddingBottom: gutter / 4,
          paddingRight: gutter / 2,
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
        },
        ...theme.Select,
        ...this.getPropsStyle(['placeholder']),
      }}
    >
      {this.props.children}
    </select>
  },
}))
