
import React from 'react'

import {componentHash} from '../index'

import Window from './Window'
/* eslint-disable */
import components from 'md-to-react!./components.md'
/* eslint-enable */
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
