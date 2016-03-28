
import React from 'react'
import * as ui from '../ui'

export const Window = (props) =>
  <ui.Col
    bottom={0}
    left={0}
    overflow='scroll'
    position='absolute'
    right={0}
    top={0}
    WebkitOverflowScrolling='touch'
    {...props}
  />
