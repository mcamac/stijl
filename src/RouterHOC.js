
import React from 'react'
import _ from 'lodash/fp'
import { createHistory } from 'history'

const history = createHistory()

export class RouterHOC extends React.Component {
  state = {
    routePath: [],
  }
  static childContextTypes = {
    history: React.PropTypes.object,
  }
  getChildContext = () => ({
    history,
  })
  componentWillMount = () => {
    this.unlisten = history.listen(location => {
      this.setState({
        routePath: _.compact(location.pathname.split('/')),
      })
    })
  }
  render() {
    return React.cloneElement(
      this.props.children,
      {
        ..._.omit('children', this.props),
        routePath: this.state.routePath,
      },
    )
  }
}

export const routerHOC = (Component) =>
  class RouterHOC2 extends React.Component {
    state = {
      routePath: [],
    }
    static childContextTypes = {
      history: React.PropTypes.object,
    }
    getChildContext() {
      return {history}
    }
    componentWillMount() {
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
