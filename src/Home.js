
import React from 'react'

import {classes} from './theme'
import {Col, H1, P, A} from './Base'

export default class Home extends React.Component {
  render() {
    const {props} = this
    return <Col mv mh>
      <H1>Test</H1>
      <P>paragraph</P>
    </Col>
  }
}
