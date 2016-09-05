
import React from 'react'

import {ui, theme, componentHash} from './index'
import parseHtmlData from 'md-to-react/parseHtmlData'

import components from 'md-to-react/loader!./site/components.md'
import * as examples from './site/examples'

const localHash = {
  ...componentHash,
  ...examples,
}

export default class Home extends React.Component {
  render() {
    return <ui.Window>
      <ui.Row margin>
        <ui.Col marginAuto flexShrink css={{flexBasis: 600}}>
          <ui.H0>Stijl</ui.H0>
          {parseHtmlData(components.htmlData, localHash)}
          <ui.SpaceDouble/>
          <ui.H6 css={{opacity: 0.5}}>Copyright © 2016 Luis Carli</ui.H6>
        </ui.Col>
      </ui.Row>
    </ui.Window>
  }
}
