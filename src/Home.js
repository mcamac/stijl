
import React from 'react'

import {ui, theme} from './index'

export default class Home extends React.Component {
  render() {
    return <ui.Window css={{minHeight: '100%'}}><ui.Row margin>
      <ui.Col marginAuto css={{
        flexBasis: 600, flexShrink: 1,
      }}>
        <ui.H1>H1 Title</ui.H1>
        <ui.H2>H2 Title</ui.H2>
        <ui.H3>H3 Title</ui.H3>
        <ui.H4>H4 Title</ui.H4>
        <ui.H5>H5 Title</ui.H5>
        <ui.H6>H6 Title</ui.H6>
        <ui.Hr/>
        <ui.P>
          Apparently we had <ui.A href='#'>reached a great height</ui.A> in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the <ui.Code>same illusion which</ui.Code> lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath <em>was dished out</em>, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the <strong>clouds</strong>.
        </ui.P>
        <ui.Pre>
          <ui.Code>
            {`export const H0 = createStijlComponent('div', 'H0')
  export const H1 = createStijlComponent('h1', 'H1') export const H1 = createStijlComponent('h1', 'H1') export const H1 = createStijlComponent('h1', 'H1') export const H1 = createStijlComponent('h1', 'H1')
    export const H2 = createStijlComponent('h2', 'H2')
      export const H3 = createStijlComponent('h3', 'H3')
        export const H4 = createStijlComponent('h4', 'H4')
          export const H5 = createStijlComponent('h5', 'H5')
            export const H6 = createStijlComponent('h6', 'H6')`}
          </ui.Code>
        </ui.Pre>
        <ui.P>
          A peep at some distant orb has <ui.A H4 href='#'>reached a great height</ui.A> to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.
        </ui.P>
        <ui.Span H2 marginVerticalZero>TEST</ui.Span>
        <ui.Blockquote>
          Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As hastened oh produced prospect formerly up am.
        </ui.Blockquote>
        <ui.Table>
          <ui.THead>
            <ui.TR>
              <ui.TH>Command</ui.TH>
              <ui.TH>Description</ui.TH>
            </ui.TR>
          </ui.THead>
          <ui.TBody>
            <ui.TR>
              <ui.TD>git status</ui.TD>
              <ui.TD>List all new or modified files</ui.TD>
            </ui.TR>
            <ui.TR>
              <ui.TD>git diff</ui.TD>
              <ui.TD>Show file differences that haven&#39;t been staged</ui.TD>
            </ui.TR>
          </ui.TBody>
        </ui.Table>
        <ui.Col css={{overflow: 'scroll'}}>
          <ui.Table>
            <ui.THead>
              <ui.TR>
                <ui.TH>Command</ui.TH>
                <ui.TH>Description</ui.TH>
                <ui.TH>Description</ui.TH>
                <ui.TH>Description</ui.TH>
                <ui.TH>Description</ui.TH>
                <ui.TH>Description</ui.TH>
              </ui.TR>
            </ui.THead>
            <ui.TBody>
              <ui.TR>
                <ui.TD>git status</ui.TD>
                <ui.TD>List all new or modified files</ui.TD>
                <ui.TD>List all new or modified files</ui.TD>
                <ui.TD>List all new or modified files</ui.TD>
                <ui.TD>List all new or modified files</ui.TD>
                <ui.TD>List all new or modified files</ui.TD>
              </ui.TR>
              <ui.TR>
                <ui.TD>git diff</ui.TD>
                <ui.TD>Show file differences that haven&#39;t been staged</ui.TD>
                <ui.TD>Show file differences that haven&#39;t been staged</ui.TD>
                <ui.TD>Show file differences that haven&#39;t been staged</ui.TD>
                <ui.TD>Show file differences that haven&#39;t been staged</ui.TD>
                <ui.TD>Show file differences that haven&#39;t been staged</ui.TD>
              </ui.TR>
            </ui.TBody>
          </ui.Table>
        </ui.Col>
        <ui.P>
          Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed add screened rendered six say his striking confined.
        </ui.P>
        <ui.Img src='https://s3.amazonaws.com/luiscarli.com/photo-2800/2016-08-27_L1000350.jpg'/>
        <ui.Ul>
          <ui.Li>Item 1</ui.Li>
          <ui.Li>Item 2</ui.Li>
          <ui.Ul>
            <ui.Li>Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient engrossed concealed and her.</ui.Li>
            <ui.Li>Item 2</ui.Li>
          </ui.Ul>
          <ui.Li>Item 3</ui.Li>
          <ui.Li>Item 4</ui.Li>
        </ui.Ul>
        <ui.P>
          Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed add screened rendered six say his striking confined.
        </ui.P>
        <ui.Ol>
          <ui.Li>Item 1</ui.Li>
          <ui.Li>Item 2</ui.Li>
        </ui.Ol>
        <ui.Col marginVerticalHalf>
          <ui.Input placeholder='placeholder'/>
          <ui.Button>Click</ui.Button>
          <ui.Row marginHorizontalHalf>
            <ui.Input marginHorizontalHalf placeholder='placeholder' css={{
              flexGrow: 1
            }}/>
            <ui.Button marginHorizontalHalf>Click</ui.Button>
          </ui.Row>
          <ui.Row marginHorizontal css={{
            '>.stijl-Input': {
              borderRight: 0,
            },
          }}>
            <ui.Input marginHorizontalZero placeholder='placeholder'/>
            <ui.Button marginHorizontalZero>Click</ui.Button>
          </ui.Row>
          <ui.Select>
            <option>option 1</option>
          </ui.Select>
        </ui.Col>
        <ui.Col margin padding
          css={{
          background: theme.backgroundCard,
        }}>
          <ui.Col marginVerticalHalf>
            <ui.Input placeholder='placeholder'/>
            <ui.Button>Click</ui.Button>
            <ui.Row marginHorizontalHalf>
              <ui.Input marginHorizontalHalf placeholder='placeholder' css={{
                flexGrow: 1
              }}/>
              <ui.Button marginHorizontalHalf>Click</ui.Button>
            </ui.Row>
            <ui.Row marginHorizontal css={{
              '>.stijl-Input': {
                borderRight: 0,
              },
            }}>
              <ui.Input marginHorizontalZero placeholder='placeholder'/>
              <ui.Button marginHorizontalZero>Click</ui.Button>
            </ui.Row>
            <ui.Select>
              <option>option 1</option>
            </ui.Select>
          </ui.Col>
        </ui.Col>
      </ui.Col>
    </ui.Row></ui.Window>
  }
}
