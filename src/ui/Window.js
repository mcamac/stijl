
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
        ...{
          bottom: 0,
          left: 0,
          overflow: 'scroll',
          position: 'absolute',
          right: 0,
          top: 0,
          WebkitOverflowScrolling: 'touch',
          WebkitTextSizeAdjust: '100%',
          MozTextSizeAdjust: '100%',
          MsTextSizeAdjust: '100%',
          background,
          color,
          fontFamily,
          fontSize,
        },
        ...theme.Window,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
