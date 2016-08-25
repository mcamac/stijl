
// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

document.title = 'Stijl'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute, Redirect, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'

import {insertCssObject, start} from './index'

import Home from './Home'

const kExt = {
  theme: {
    color: '#eee',
    background: 'rgb(36, 36, 38)',
    backgroundCard: '#313335',
    action: '#50afc6',
  },
}

// theme setting
insertCssObject({
  body: {background: 'white', minHeight: '100%', margin: 0},
})
start([kExt])

// This allows the theme to be hot-reloaded
export default class App extends React.Component {
  render() { return this.props.children }
}

ReactDOM.render(
  <Router history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path='/'>
      <IndexRoute component={Home}/>
      <Route path='page'/>
    </Route>
    <Redirect from='*' to='/'/>
  </Router>
  , document.getElementById('root')
)
