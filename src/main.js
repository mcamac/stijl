
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
// import Relay from 'react-relay'
import _ from 'lodash/fp'
import {Router, Route, browserHistory} from 'react-router'

import {App} from './App'

_.map = _.map.convert({cap: false})

document.title = 'Project'
document.body.bgColor = 'black'

// Relay.injectNetworkLayer(
//   new Relay.DefaultNetworkLayer('http://localhost:5000/graphql')
// )

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='*' component={App}/>
  </Router>
  , document.getElementById('root')
)
