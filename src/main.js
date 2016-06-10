
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import {SetThemeHOC} from './SetThemeHOC'
import {OnChangeHOC} from './OnChangeHOC'
import {App} from './App'

document.title = 'stijl'

class Root extends React.Component {
  render() {
    return <OnChangeHOC>
      <SetThemeHOC>
        <App/>
      </SetThemeHOC>
    </OnChangeHOC>
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'))
