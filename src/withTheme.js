
import React from 'react'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export function withTheme(WrappedComponent) {
  const WithTheme = React.createClass({
    contextTypes: {
      theme: React.PropTypes.object,
    },
    render() {
      return <WrappedComponent {...this.props} theme={this.context.theme} />
    },
  })
  WithTheme.displayName = `withTheme(${getDisplayName(WrappedComponent)})`
  WithTheme.WrappedComponent = WrappedComponent
  return WithTheme
}

export class WithTheme extends React.Component {
  contextTypes = {
    theme: React.PropTypes.object,
  }
  render() {
    return React.cloneElement(
      React.Children.only(this.props.children),
      {...this.props, theme: this.context.theme}
    )
  }
}
