
import React from 'react'
import * as ui from '../ui'
import {SetThemeHOC} from '../SetThemeHOC'

const Wrapper = (props) =>
  <SetThemeHOC><ui.Window p pV>
    <ui.Row justifyContent='center'><ui.ColText>
      {props.children}
    </ui.ColText></ui.Row>
  </ui.Window></SetThemeHOC>

export class Test extends React.Component {
  state = {name: ''}
  handleSubmit = (evt) => {
    evt.preventDefault()
  }
  handleInput = (evt, name) => {
    this.setState({[name]: evt.target.value})
  }
  render() {
    return <Wrapper>
      <ui.H1>Input test</ui.H1>
      <ui.Form m onSubmit={this.handleSubmit}>
        <ui.H6 value='Name' noM noMV/>
        <ui.Input placeholder='test'
          value={this.state.name}
          onChange={(e) => this.handleInput(e, 'name')}
        />
        <ui.H6 value='Options' noM noMV/>
        <ui.Select>
          <option value='1'>option 1</option>
          <option value='2'>option 2</option>
          <option value='3'>option 3</option>
        </ui.Select>
        <ui.Button value='submit'
          alignSelf='flex-start'
        />
      </ui.Form>
    </Wrapper>
  }
}

export default Test
