
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
      fontFamily={theme.fontFamily}
      fontSize={theme.fontSize}
      {...this.props}
    />
  },
})
