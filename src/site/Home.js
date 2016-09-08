
import React from 'react'

import {ui, theme, componentHash} from '../index'

import Window from './Window'
import components from 'md-to-react!./components.md'
import * as examples from './examples'

const localHash = {
  ...componentHash,
  ...examples,
}

export default class Home extends React.Component {
  render() {
    return <Window>
      {components.render(localHash)}
    </Window>
  }
}
