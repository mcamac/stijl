
import React from 'react'
import * as ui from '../ui'
import {getTheme} from '../getTheme'

export const Window = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <ui.Div
      bottom={0}
      left={0}
      overflow='scroll'
      position='absolute'
      right={0}
      top={0}
      WebkitOverflowScrolling='touch'
      WebkitTextSizeAdjust='100%'
      MozTextSizeAdjust='100%'
      MsTextSizeAdjust='100%'
      fontFamily={theme.fontFamily}
      fontSize={theme.fontSize}
      background={theme.background}
      color={theme.color}
      {...this.props}
    />
  },
})
