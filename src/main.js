
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import * as ui from './ui'
import {defaultTheme} from './defaultTheme'
const theme = defaultTheme

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
  getChildContext() {
    return {theme}
  },
  getInitialState() {
    return {}
  },
  handleChange(value) {
    this.setState({value})
  },
  render() {
    return <ui.Window>
      <ui.Container text>
        <ui.Shh/>
        <ui.Row
          alignItems='center'
          justifyContent='space-between'
        >
          <ui.ButtonFlat s='2' value='Main'/>
          <ui.Row>
            <ui.ButtonFlat value='Link 1'/>
            <ui.ButtonFlat value='Link 2'/>
          </ui.Row>
        </ui.Row>
        <ui.Shh/>
        <ui.Div borderBottom='2px solid black'/>
      </ui.Container>
      <ui.Container text>
      <ui.H1>
        Title
      </ui.H1>
      </ui.Container>
      <ui.Container text>
        <ui.H5>{(new Date()).toString()}</ui.H5>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</ui.A>
        </ui.P>
          <ui.P s='5' marginTop={0} marginBottom={0} opacity='0.5'>Name of the input</ui.P>
          <ui.Input placeholder='placeholder' marginTop='0'/>
          <ui.P s='5' marginTop={0} marginBottom={0} opacity='0.5'>Name of the second input</ui.P>
          <ui.Input marginTop='0'/>
          {/*<ui.Select placeholder='select' options={options}/>*/}
          <ui.ButtonPrime alignSelf='flex-start' value='Run'/>
        <ui.H3>Sub-Title</ui.H3>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </ui.P>
        <ui.Row>
          <ui.Button value='Click'/>
          <ui.ButtonPrime value='Click'/>
        </ui.Row>
        <ui.ColWrapper flexWrap='wrap'>
          <ui.Card flexBasis='250'>
            <ui.Container borderBottom='2px solid white'>
              <ui.H3>Card</ui.H3>
            </ui.Container>
            <ui.Container>
              <ui.P>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </ui.P>
              <ui.P>SubText</ui.P>
            </ui.Container>
          </ui.Card>
          <ui.Card // card
            flexBasis='250'
          >
            <ui.Container>
              <ui.H3>Card</ui.H3>
            </ui.Container>
            <ui.Img src='https://pbs.twimg.com/media/Ce0oTtnVAAAIjbi.jpg'/>
            <ui.Container>
              <ui.P>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </ui.P>
              <ui.Row>
                <ui.Button value='Click'/>
                <ui.Button value='Click'/>
              </ui.Row>
            </ui.Container>
          </ui.Card>
        </ui.ColWrapper>
      </ui.Container>
    </ui.Window>
  },
})

ReactDOM.render(<Root/>, document.getElementById('root'))
