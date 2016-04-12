
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import * as ui from './ui'

document.title = 'stijl'

const Root = React.createClass({
  render() {
    return <ui.Window>
      <ui.Container>
        <ui.Row>
          <ui.ColText>
            <ui.H1 marginBottom={0}>Heading 1</ui.H1>
            <ui.H5 marginTop={0} opacity={0.6}>Heading 5</ui.H5>
            <ui.P>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A href='#'>there live the blind texts. Separated they live in Bookmarksgrove right</ui.A> at the coast of the Semantics, a large language ocean.
            </ui.P>
            <ui.S/>
            <ui.Select>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
            </ui.Select>
            <ui.Sh/>
            <ui.Div flexDirection='row' alignItems='center'>
              <ui.Input flexGrow={1} placeholder='placeholder'/>
              <ui.Sh/>
              <ui.Button value='Button'/>
            </ui.Div>
            <ui.S/>
            <ui.Row flexWrap='wrap'>
              <ui.Card>
                <ui.Container>
                  <ui.P>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A href='#'>there live the blind texts. Separated they live in Bookmarksgrove right</ui.A> at the coast of the Semantics, a large language ocean.
                  </ui.P>
                  <ui.ButtonFlat alignSelf='flex-start' value='Button'/>
                </ui.Container>
              </ui.Card>
              <ui.Card>
                <ui.Container>
                  <ui.P>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A href='#'>there live the blind texts. Separated they live in Bookmarksgrove right</ui.A> at the coast of the Semantics, a large language ocean.
                  </ui.P>
                </ui.Container>
              </ui.Card>
            </ui.Row>
          </ui.ColText>
        </ui.Row>
      </ui.Container>
    </ui.Window>
  },
})

ReactDOM.render(<Root/>, document.getElementById('root'))
