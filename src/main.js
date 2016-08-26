
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

insertCssObject({
  body: {background: 'white', minHeight: '100%', margin: 0},
  '#root': {minHeight: '100%'},
})
start()

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
