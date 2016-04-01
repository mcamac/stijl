
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import * as ui from './ui'
import {defaultTheme as theme} from './defaultTheme'

document.title = 'stijl'

const Root = React.createClass({
  render() {
    return <ui.Window>
      <ui.ColText>
        <ui.Row alignItems='center' justifyContent='space-between' paddingTop='8'>
          <ui.Button flat m={1.2}>Main</ui.Button>
          <ui.Row>
            <ui.Button flat>Link 1</ui.Button>
            <ui.Button flat>Link 2</ui.Button>
          </ui.Row>
        </ui.Row>
      </ui.ColText>
      <ui.ColText>
      <ui.H1>
      <ui.A>Title</ui.A>
      </ui.H1>
      </ui.ColText>
      <ui.ColText>
        <ui.H5>{(new Date()).toString()}</ui.H5>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</ui.A>
        </ui.P>
          <ui.ContentEditable/>
          <ui.P m={0.9} paddingBottom={0} opacity='0.5'>Name of the input</ui.P>
          <ui.Input placeholder='placeholder'/>
          <ui.P m={0.9} paddingBottom={0} opacity='0.5'>Name of the second input</ui.P>
          <ui.Input/>
          <ui.Select placeholder='select'>Select 2</ui.Select>
          <ui.Button alignSelf='flex-start'>Run</ui.Button>
        <ui.H3>Sub-Title</ui.H3>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </ui.P>
        <ui.Row alignItems='center'>
          <ui.Button marginRight={0}>Click</ui.Button>
          <ui.Button prime>Click</ui.Button>
          <ui.Button flat>Click</ui.Button>
          <ui.Div
            width={theme.fontSize}
            height={theme.fontSize}
            margin={theme.gutter}
            border='2px solid'
            borderColor={theme.action}
            borderRadius={10}
          />
          <ui.Inline>Text</ui.Inline>
        </ui.Row>
        <ui.Row flexWrap='wrap'>
          <ui.Col // card
            margin={theme.gutter}
            background={theme.card}
            padding={theme.gutter}
            borderRadius={5}
            flexBasis='250'
            flexGrow='1'
          >
            <ui.H3>Card</ui.H3>
            <ui.P>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </ui.P>
            <ui.P>SubText</ui.P>
          </ui.Col>
          <ui.Col // card
            margin={theme.gutter}
            background={theme.card}
            padding={theme.gutter}
            borderRadius={5}
            flexBasis='250'
            flexGrow='1'
          >
            <ui.H3>Card</ui.H3>
            <ui.Img src='https://pbs.twimg.com/media/Ce0oTtnVAAAIjbi.jpg'/>
            <ui.P>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </ui.P>
            <ui.Row>
              <ui.Button marginRight={0}>Click</ui.Button>
              <ui.Button prime>Click</ui.Button>
            </ui.Row>
          </ui.Col>
        </ui.Row>
      </ui.ColText>
    </ui.Window>
  },
})

ReactDOM.render(<Root/>, document.getElementById('root'))
