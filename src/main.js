
// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash/fp'
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import {StyleRoot} from 'radium'
import ThemeRoot from './ThemeRoot'

import Home from './Home'

_.map = _.map.convert({cap: false})

document.title = 'Stijl'
document.body.bgColor = 'white'

const theme = {
  base: {
    flexBasisText: 600,
    background: 'white',
    hover: 'hsl(50, 50%, 20%)',
  },
}

class App extends React.Component {
  render() {
    return <StyleRoot>
      <ThemeRoot theme={theme}>
        {this.props.children}
      </ThemeRoot>
    </StyleRoot>
  }
}

ReactDOM.render(
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='page'/>
    </Route>
    <Redirect from='*' to='/'/>
  </Router>
  , document.getElementById('root')
)
