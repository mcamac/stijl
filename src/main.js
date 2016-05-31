
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import {RouterHOC} from './RouterHOC'
import {SetThemeHOC} from './SetThemeHOC'
import {OnChangeHOC} from './OnChangeHOC'
import {App} from './App'

document.title = 'stijl'

class Root extends React.Component {
  render() {
    return <RouterHOC>
      <OnChangeHOC>
        <SetThemeHOC>
          <App />
        </SetThemeHOC>
      </OnChangeHOC>
    </RouterHOC>
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))
