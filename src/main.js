
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash/fp'
import {Router, Route, browserHistory} from 'react-router'

import {pagesData} from './site/pagesData'
import {App} from './App'
import defaultTheme from './defaultTheme'

_.map = _.map.convert({cap: false})

document.title = 'Project'
document.body.bgColor = defaultTheme.base.background

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='page'>
    {_.map((d, i) =>
      <Route path={`${_.first(d.path.split('.'))}`}
        component={d.default} key={i}
      />,
      pagesData,
    )}
    </Route>
    <Route path='*' component={App}/>
  </Router>
  , document.getElementById('root')
)
