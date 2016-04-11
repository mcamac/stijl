
import React from 'react'
import * as ui from '../ui'

export const Input = (props) =>
  <ui.Div
    name='Input'
    {...props}
  >
    <ui.ContentEditable/>
  </ui.Div>
