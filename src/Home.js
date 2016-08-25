
import React from 'react'

import {ui as i, theme as t} from './index'

export default class Home extends React.Component {
  render() {
    return <i.Window css={{minHeight: '100%'}}><i.Row margin>
      <i.Col marginAuto css={{
        flexBasis: 600, flexShrink: 1,
      }}>
        <i.H1>H1 Title</i.H1>
        <i.H2>H2 Title</i.H2>
        <i.H3>H3 Title</i.H3>
        <i.H4>H4 Title</i.H4>
        <i.H5>H5 Title</i.H5>
        <i.H6>H6 Title</i.H6>
        <i.Hr/>
        <i.P>
          Apparently we had <i.A href='#'>reached a great height</i.A> in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the <i.Code>same illusion which</i.Code> lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath <em>was dished out</em>, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the <strong>clouds</strong>.
        </i.P>
        <i.Pre>
          <i.Code>
            {`export const H0 = createStijlComponent('div', 'H0')
  export const H1 = createStijlComponent('h1', 'H1') export const H1 = createStijlComponent('h1', 'H1') export const H1 = createStijlComponent('h1', 'H1') export const H1 = createStijlComponent('h1', 'H1')
    export const H2 = createStijlComponent('h2', 'H2')
      export const H3 = createStijlComponent('h3', 'H3')
        export const H4 = createStijlComponent('h4', 'H4')
          export const H5 = createStijlComponent('h5', 'H5')
            export const H6 = createStijlComponent('h6', 'H6')`}
          </i.Code>
        </i.Pre>
        <i.P>
          A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.
        </i.P>
        <i.Blockquote>
          <i.P>
          Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As hastened oh produced prospect formerly up am.
          </i.P>
        </i.Blockquote>
        <i.P>
          Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed add screened rendered six say his striking confined.
        </i.P>
        <i.Col marginVerticalHalf>
          <i.Input placeholder='placeholder'/>
          <i.Button>Click</i.Button>
          <i.Row marginHorizontalHalf>
            <i.Input marginHorizontalHalf placeholder='placeholder' css={{
              flexGrow: 1
            }}/>
            <i.Button marginHorizontalHalf>Click</i.Button>
          </i.Row>
          <i.Row marginHorizontal css={{
            '>.stijl-Input': {
              borderRight: 0,
            },
          }}>
            <i.Input marginHorizontalZero placeholder='placeholder'/>
            <i.Button marginHorizontalZero>Click</i.Button>
          </i.Row>
          <i.Select>
            <option>option 1</option>
          </i.Select>
        </i.Col>
        <i.Col margin padding
          css={{
          background: t.backgroundCard,
        }}>
          <i.Col marginVerticalHalf>
            <i.Input placeholder='placeholder'/>
            <i.Button>Click</i.Button>
            <i.Row marginHorizontalHalf>
              <i.Input marginHorizontalHalf placeholder='placeholder' css={{
                flexGrow: 1
              }}/>
              <i.Button marginHorizontalHalf>Click</i.Button>
            </i.Row>
            <i.Row marginHorizontal css={{
              '>.stijl-Input': {
                borderRight: 0,
              },
            }}>
              <i.Input marginHorizontalZero placeholder='placeholder'/>
              <i.Button marginHorizontalZero>Click</i.Button>
            </i.Row>
            <i.Select>
              <option>option 1</option>
            </i.Select>
          </i.Col>
        </i.Col>
      </i.Col>
    </i.Row></i.Window>
  }
}
