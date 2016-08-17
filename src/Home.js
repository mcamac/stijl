
import React from 'react'

import {A, H1, H2, H3, H4, H5, H6, P, Hr, Link, Col, Row, RowWrap, Space, SpaceHalf, SpaceDouble, Window, Span, Pre, Blockquote, Code, Input, Form, Button, Select, theme as t} from './index'

export default class Home extends React.Component {
  render() {
    return <Row margin>
      <Col marginAuto css={{
        flexBasis: 600, flexShrink: 1,
      }}>
        <H1>H1 Title</H1>
        <H2>H2 Title</H2>
        <H3>H3 Title</H3>
        <H4>H4 Title</H4>
        <H5>H5 Title</H5>
        <H6>H6 Title</H6>
        <Hr/>
        <P>
          Apparently we had <A href='#'>reached a great height</A> in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the <Code>same illusion which</Code> lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath <em>was dished out</em>, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the <strong>clouds</strong>.
        </P>
        <Pre>
          <Code>
            {`export const H0 = createStijlComponent('div', 'H0')
  export const H1 = createStijlComponent('h1', 'H1') export const H1 = createStijlComponent('h1', 'H1') export const H1 = createStijlComponent('h1', 'H1') export const H1 = createStijlComponent('h1', 'H1')
    export const H2 = createStijlComponent('h2', 'H2')
      export const H3 = createStijlComponent('h3', 'H3')
        export const H4 = createStijlComponent('h4', 'H4')
          export const H5 = createStijlComponent('h5', 'H5')
            export const H6 = createStijlComponent('h6', 'H6')`}
          </Code>
        </Pre>
        <P>
          A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.
        </P>
        <Blockquote>
          <P>
          Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As hastened oh produced prospect formerly up am.
          </P>
        </Blockquote>
        <P>
          Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed add screened rendered six say his striking confined.
        </P>
        <Col marginVerticalHalf>
          <Input placeholder='placeholder'/>
          <Button>Click</Button>
          <Row marginHorizontalHalf>
            <Input marginHorizontalHalf placeholder='placeholder' css={{
              flexGrow: 1
            }}/>
            <Button marginHorizontalHalf>Click</Button>
          </Row>
          <Row marginHorizontal css={{
            '>.stijl-Input': {
              borderRight: 0,
            },
          }}>
            <Input marginHorizontalZero placeholder='placeholder'/>
            <Button marginHorizontalZero>Click</Button>
          </Row>
          <Select>
            <option>option 1</option>
          </Select>
        </Col>
        <Col margin padding
          css={{
          background: t.backgroundCard,
        }}>
          <Col marginVerticalHalf>
            <Input placeholder='placeholder'/>
            <Button>Click</Button>
            <Row marginHorizontalHalf>
              <Input marginHorizontalHalf placeholder='placeholder' css={{
                flexGrow: 1
              }}/>
              <Button marginHorizontalHalf>Click</Button>
            </Row>
            <Row marginHorizontal css={{
              '>.stijl-Input': {
                borderRight: 0,
              },
            }}>
              <Input marginHorizontalZero placeholder='placeholder'/>
              <Button marginHorizontalZero>Click</Button>
            </Row>
            <Select>
              <option>option 1</option>
            </Select>
          </Col>
        </Col>
      </Col>
    </Row>
  }
}
