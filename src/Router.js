
import React from 'react'
import _ from 'lodash/fp'
import { createHistory } from 'history'

const history = createHistory()

export const RouterHOC = (Component) =>
  class Router extends React.Component {
    state = {
      routePath: [],
    }
    static childContextTypes = {
      history: React.PropTypes.object,
    }
    getChildContext() {
      return {history}
    }
    componentDidMount() {
      this.unlisten = history.listen(location => {
        this.setState({
          routePath: _.compact(location.pathname.split('/')),
        })
      })
    }
    render() {
      return <Component
        {...this.props}
        routePath={this.state.routePath}
      />
    }
  }
