
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
    return <ui.Window
      fontFamily='Open Sans'
      fontSize={theme.size}
      flexDirection='row'
      justifyContent='center'
    >
      <ui.Col flexBasis='600'>
        <ui.H1><ui.A>Title</ui.A></ui.H1>
        <ui.H5>{(new Date()).toString()}</ui.H5>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</ui.A>
        </ui.P>
        <ui.H m={1.1}>Sub-Title</ui.H>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </ui.P>
      </ui.Col>
    </ui.Window>
  },
})

ReactDOM.render(<Root/>, document.getElementById('root'))
