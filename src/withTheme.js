
import React from 'react'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default function withTheme(WrappedComponent) {
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
