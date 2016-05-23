
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import {RouterHOC} from './Router'
import {App} from './App'
import {defaultTheme} from './defaultTheme'

document.title = 'stijl'

class Root extends React.Component {
  state = {
    theme: defaultTheme,
  }
  static childContextTypes = {
    theme: React.PropTypes.object,
  }
  getChildContext = () => (
    {theme: this.state.theme}
  )
  handleChange = (payload) => {
    this.setState(payload)
  }
  render() {
    return <App
      routePath={this.props.routePath}
      theme={this.state.theme}
      onChange={this.handleChange}
    />
  }
}

Root = RouterHOC(Root)

ReactDOM.render(<Root/>, document.getElementById('root'))
