
import React from 'react'
import * as ui from '../ui'

export const Window = React.createClass({
  render() {
    return <ui.Div
      name='Window'
      bottom={0}
      left={0}
      overflow='scroll'
      position='absolute'
      right={0}
      top={0}
      alignItems='stretch'
      WebkitOverflowScrolling='touch'
      WebkitTextSizeAdjust='100%'
      MozTextSizeAdjust='100%'
      MsTextSizeAdjust='100%'
      {...this.props}
    />
  },
})
