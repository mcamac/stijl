
import React from 'react'
import * as ui from './ui'

import withTheme from './withTheme'

class Home extends React.Component {
  render() {
    const {props} = this
    return <ui.Col>
      <ui.Row
        justifyContent='center'
        background={props.theme.base.backgroundCard}
      >
        <ui.Col p flexBasis={700}>
          <ui.Row
            alignItems='center'
            justifyContent='space-between'
            alignContent='flex-start'
          >
            <ui.H3><ui.Link to='/'>Main</ui.Link></ui.H3>
            <ui.Row
              flexWrap='wrap'
              flexGrow={1}
              flexShrink={1}
              justifyContent='flex-end'
            >
              <ui.H4>
                <ui.Link to='/default-theme'>theme 1</ui.Link>
              </ui.H4>
              <ui.H4>
                <ui.Link to='/second-theme'>theme 2</ui.Link>
              </ui.H4>
            </ui.Row>
          </ui.Row>
        </ui.Col>
      </ui.Row>
      <ui.Row justifyContent='center'>
        <ui.Card noM flexGrow={0} flexBasis={700}>
          <ui.H3>Sub-title</ui.H3>
          <ui.P>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A href='#'>there live the blind texts. Separated they live in Bookmarksgrove right</ui.A> at the coast of the Semantics, a large language ocean.
          </ui.P>
        </ui.Card>
      </ui.Row>
      <ui.Row justifyContent='center'>
        <ui.Col p pV flexBasis={700}>
          <ui.S/>
          <ui.H1>Heading 1</ui.H1>
          <ui.P>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A href='#'>there live the blind texts. Separated they live in Bookmarksgrove right</ui.A> at the coast of the Semantics, a large language ocean.
          </ui.P>
          <ui.Img src='test.png'/>
          <ui.H5 paddingBottom={0}>Sub-title</ui.H5>
          <ui.Select m>
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
          </ui.Select>
          <ui.H5 paddingBottom={0}>Sub-title</ui.H5>
          <ui.Row m>
            <ui.Input flexGrow={1} placeholder='placeholder'/>
            <ui.S/>
            <ui.Button value='Button'/>
          </ui.Row>
          <ui.Row flexWrap='wrap'>
            <ui.Card flexBasis={250} flexGrow={1}>
              <ui.H3>Sub-title</ui.H3>
              <ui.P>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A href='#'>there live the blind texts. Separated they live in Bookmarksgrove right</ui.A> at the coast of the Semantics, a large language ocean.
              </ui.P>
              <ui.P>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A href='#'>there live the blind texts. Separated they live in Bookmarksgrove right</ui.A> at the coast of the Semantics, a large language ocean.
              </ui.P>
            </ui.Card>
            <ui.Card flexBasis={400} flexGrow={99999999}>
              <ui.H3>Sub-title</ui.H3>
              <ui.P>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A href='#'>there live the blind texts. Separated they live in Bookmarksgrove right</ui.A> at the coast of the Semantics, a large language ocean.
              </ui.P>
            </ui.Card>
          </ui.Row>
        </ui.Col>
      </ui.Row>
    </ui.Col>
  }
}

export default withTheme(Home)
