
import React from 'react'

import {Col, Row, H2, P, A, Link, Input} from './index'

export default class Home extends React.Component {
  render() {
    return <Row margin>
      <Col marginAuto css={{
        flexBasis: 600, flexShrink: 1,
      }}>
        <Link to='/'><H2>Test</H2></Link>
        <P>Paragraph <A href='http://luiscarli.surge.sh'>Link</A></P>
        <Input/>
      </Col>
    </Row>
  }
}
