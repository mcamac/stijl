
import React from 'react'
import {getTheme} from '../getTheme'

const createH = (n) =>
  React.createClass({
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
          ...{
            display: 'inline',
            marginTop: scale[n] / 2,
            marginBottom: scale[n] / 2,
            color,
            fontFamily,
            fontSize: scale[n],
          },
          ...theme[`H${n}`],
          ...this.getPropsStyle(),
        }}
      >
        {this.props.children}
      </div>
    },
  })

export const H0 = createH(0)
export const H1 = createH(1)
export const H2 = createH(2)
export const H3 = createH(3)
export const H4 = createH(4)
export const H5 = createH(5)
export const H6 = createH(6)
