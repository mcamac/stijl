
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import * as ui from './ui'
import {defaultTheme as theme} from './defaultTheme'

document.title = 'Project'

const Button = (props) =>
  <ui.Col
    fontWeight='bold'
    color='steelblue'
    cursor='pointer'
    margin='5'
    padding='5'
    border='2px solid steelblue'
    borderRadius='5'
    {...props}
  />

const Root = React.createClass({
  render() {
    return <ui.Window>
      <ui.ColText>
        <ui.H1><ui.A>Title</ui.A></ui.H1>
        <ui.H5>{(new Date()).toString()}</ui.H5>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</ui.A>
        </ui.P>
        <ui.H m={1.1}>Sub-Title</ui.H>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </ui.P>
        <ui.Row>
          <ui.Btn>Click</ui.Btn>
          <ui.Div
            width={theme.fontSize}
            height={theme.fontSize}
            margin={theme.gutter}
            border='2px solid'
            borderColor={theme.action}
            borderRadius={10}
            // background={theme.active}
          />
          <ui.T>Text</ui.T>
        </ui.Row>
        <ui.Div // card
          margin={theme.gutter}
          background={theme.card}
          padding={theme.gutter}
          borderRadius={5}
          // border='4px solid'
        >
          <ui.H3>Card</ui.H3>
          <ui.P>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </ui.P>
          <ui.P
            borderTop='2px solid white'
            // background='white'
            borderRadius='0 0 5px 5px'
          >SubText</ui.P>
        </ui.Div>
      </ui.ColText>
    </ui.Window>
  },
})

ReactDOM.render(<Root/>, document.getElementById('root'))
