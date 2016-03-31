
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
          <ui.BtnFlat m={1.2}>Main</ui.BtnFlat>
          <ui.Row>
            <ui.BtnFlat>Link 1</ui.BtnFlat>
            <ui.BtnFlat>Link 2</ui.BtnFlat>
          </ui.Row>
        </ui.Row>
      </ui.ColText>
      <ui.ColText>
        <ui.H1><ui.A>Title</ui.A></ui.H1>
        <ui.H5>{(new Date()).toString()}</ui.H5>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</ui.A>
        </ui.P>
      </ui.ColText>
      <ui.ColImg>
        <ui.Img full src='https://pbs.twimg.com/media/Ce0oTtnVAAAIjbi.jpg'/>
      </ui.ColImg>
      <ui.ColText>
        <ui.H m={1.1}>Sub-Title</ui.H>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </ui.P>
        <ui.Row alignItems='center'>
          <ui.Btn>Click</ui.Btn>
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
            <ui.P
              borderTop='2px solid white'
              borderRadius='0 0 5px 5px'
            >SubText</ui.P>
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
            <ui.P>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </ui.P>
            <ui.P
              borderTop='2px solid white'
              borderRadius='0 0 5px 5px'
            >SubText</ui.P>
          </ui.Col>
        </ui.Row>
        <ui.Row>
          <ui.P>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </ui.P>
          <ui.P>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </ui.P>
        </ui.Row>
      </ui.ColText>
    </ui.Window>
  },
})

ReactDOM.render(<Root/>, document.getElementById('root'))
