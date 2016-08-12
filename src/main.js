
// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

document.title = 'Stijl'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute, Redirect, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'

import {insertStyleObject} from './styleSheet'
import {theme, setTheme} from './theme'

import Home from './Home'

// theme setting
insertStyleObject({
  body: {background: 'white', minHeight: '100%', margin: 0},
})
setTheme({
  ...theme,
})

// This allows the theme to be hot-reloaded
export default class App extends React.Component {
  render() { return this.props.children }
}

ReactDOM.render(
  <Router history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='page'/>
    </Route>
    <Redirect from='*' to='/'/>
  </Router>
  , document.getElementById('root')
)
