
import React from 'react'

import {ui, theme, componentHash} from './index'

import Window from './site/Window'
import components from 'md-to-react!./site/components.md'
import * as examples from './site/examples'

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
