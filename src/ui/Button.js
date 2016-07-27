
import React from 'react'
import {getTheme} from '../getTheme'
import R from 'radium'
import C from 'tinycolor2'

export const Button = R(React.createClass({
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
      // gutter,
      borderRadius,
    } = theme.base
    return <button
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        cursor: 'pointer',
        borderWidth,
        borderColor: hover,
        display: 'inline',
        textAlign: 'center',
        borderRadius,
        fontWeight: 'bold',
        fontSize,
        outline: 'none',
        color: background,
        background: hover,
        // marginTop: gutter / 2,
        // marginBottom: gutter / 2,
        alignSelf: 'center',
        ':hover': {
          background: C(hover).lighten(10),
        },
        ':active': {
          background: C(hover).darken(10),
        },
        ...this.getLocalGutters({
          p: true,
          pV: true,
        }),
        ...theme.Button,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.v || this.props.value || this.props.children}
    </button>
  },
}))

export const ButtonFlat = R(React.createClass({
  mixins: [getTheme],
  getDefaultProps() {
    return {}
  },
  render() {
    const theme = this.getTheme()
    const {
      borderWidth,
      hover,
      fontSize,
      borderRadius,
      // gutter,
    } = theme.base
    return <button
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        cursor: 'pointer',
        borderWidth,
        borderColor: hover,
        display: 'inline',
        textAlign: 'center',
        borderRadius,
        fontSize,
        outline: 'none',
        color: hover,
        background: 'none',
        // marginTop: gutter / 2,
        // marginBottom: gutter / 2,
        ':hover': {
          background: C(hover).lighten(10).setAlpha(0.2),
        },
        ':active': {
          background: C(hover).darken(10).setAlpha(0.2),
        },
        ...this.getLocalGutters({
          p: true,
          pV: true,
        }),
        ...theme.ButtonFlat,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.v || this.props.value || this.props.children}
    </button>
  },
}))
