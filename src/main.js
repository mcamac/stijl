
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import * as ui from './ui'
import {defaultTheme, blackTheme} from './defaultTheme'
const theme = blackTheme

document.title = 'stijl'

const options = [
  {value: 'option1', label: 'option1'},
  {value: 'option2', label: 'option2'},
  {value: 'option3', label: 'option3'},
]

const Root = React.createClass({
  childContextTypes: {
    theme: React.PropTypes.object,
  },
  getChildContext: function() {
    return {theme};
  },
  render() {
    return <ui.Window>
      <ui.ColText>
        <ui.Row alignItems='stretch' justifyContent='space-between' paddingTop='8' height='200'>
          <div><ui.Button flat m={1.2}>Main</ui.Button></div>
          <ui.Row>
            <ui.Button flat>Link 1</ui.Button>
            <ui.Button flat>Link 2</ui.Button>
          </ui.Row>
        </ui.Row>
      </ui.ColText>
      <ui.ColText>
      <ui.H1>
        Title
      </ui.H1>
      </ui.ColText>
      <ui.ColText onBlur={()=>console.log('focus')}>
        <ui.H5>{(new Date()).toString()}</ui.H5>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</ui.A>
        </ui.P>
          <ui.ContentEditable/>
          <ui.P m={0.9} paddingBottom={0} opacity='0.5'>Name of the input</ui.P>
          <ui.Input placeholder='placeholder'/>
          <ui.P m={0.9} paddingBottom={0} opacity='0.5'>Name of the second input</ui.P>
          <ui.Input/>
          <ui.Div><ui.Select placeholder='select' options={options}/></ui.Div>
          <ui.Button alignSelf='flex-start'>Run</ui.Button>
        <ui.H3>Sub-Title</ui.H3>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </ui.P>
        <ui.Row alignItems='center'>
          <ui.Button marginRight={0}>Click</ui.Button>
          <ui.Div><ui.Button prime>Click</ui.Button></ui.Div>
          <ui.Button flat>Click</ui.Button>
          <ui.Div // select
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
