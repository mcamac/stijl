
import React from 'react'
import {getTheme} from '../getTheme'
import R from 'radium'

const createH = (n) =>
  R(React.createClass({
    mixins: [getTheme],
    render() {
      const theme = this.getTheme()
      const {
        scale,
        color,
        fontFamily,
      } = theme.base
      return <div
        {...this.getActions()}
        style={{
          ...this.defaultStyle,
          display: 'inline',
          color,
          fontFamily,
          fontSize: scale[n],
          ...this.getLocalGutters({
            // m: true,
            mV: true,
          }),
          ...theme[`H${n}`],
          ...this.getPropsStyle(),
        }}
      >
        {this.props.v || this.props.value || this.props.children}
      </div>
    },
  }))

export const H0 = createH(0)
export const H1 = createH(1)
export const H2 = createH(2)
export const H3 = createH(3)
export const H4 = createH(4)
export const H5 = createH(5)
export const H6 = createH(6)
