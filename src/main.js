
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import * as ui from './ui'
import {defaultTheme, blackTheme} from './defaultTheme'
const theme = defaultTheme

document.title = 'stijl'

const options = [
  'option1',
  'option2',
  'option3',
]

const Root = React.createClass({
  getInitialState() {
    return {
      theme,
    }
  },
  childContextTypes: {
    theme: React.PropTypes.object,
  },
  getChildContext() {
    return {theme: this.state.theme}
  },
  handleClick(value) {
    this.setState({theme: value})
  },
  handleSelect(value) {
    this.setState({selected: value})
  },
  render() {
    return <ui.Window>
      <ui.Container background={this.state.theme.base.card}>
        <ui.Shh/>
        <ui.Row
          alignItems='stretch'
          justifyContent='space-between'
        >
          <ui.ButtonFlat s='2' value='Main'/>
          <ui.Row alignItems='center'>
            <ui.ButtonFlat value='Theme 1' onClick={() => this.handleClick(theme)}/><ui.Swh/>
            <ui.ButtonFlat value='Theme 2' onClick={() => this.handleClick(blackTheme)}/>
          </ui.Row>
        </ui.Row>
        <ui.Shh/>
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
          <ui.P s='5' marginTop={0} opacity='0.5'>Name of the input</ui.P>
          <ui.Input placeholder='placeholder' marginTop='0'/>
          <ui.P s='5' marginTop={0} opacity='0.5'>Name of the second input</ui.P>
          <ui.Input marginTop='0'/>
          <ui.Select
            placeholder='select'
            options={options}
            value={this.state.selected}
            onChange={this.handleSelect}
          />
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
            <ui.Container>
              <ui.H3>Card</ui.H3>
            </ui.Container>
            <ui.Container>
              <ui.P>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </ui.P>
              <ui.Select placeholder='select' options={options}/>
              <ui.P>SubText</ui.P>
            </ui.Container>
          </ui.Card>
          <ui.Card // card
            flexBasis='250'
          >
            <ui.Container>
              <ui.H3>Card</ui.H3>
            </ui.Container>
            <ui.Img src='img.png'/>
            <ui.Container>
              <ui.P>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A>there</ui.A> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </ui.P>
              <ui.Row>
                <ui.Button value='Click'/>
                <ui.Button value='Click'/>
              </ui.Row>
              <ui.Shh/>
            </ui.Container>
          </ui.Card>
        </ui.ColWrapper>
      </ui.Container>
    </ui.Window>
  },
})

ReactDOM.render(<Root/>, document.getElementById('root'))
