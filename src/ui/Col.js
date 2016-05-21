
import React from 'react'
import {getTheme} from '../getTheme'

export const Col = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...this.getLocalGutters(),
        ...theme.Col,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})

export const Row = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        flexDirection: 'row',
        flexShrink: 0,
        ...this.getLocalGutters(),
        ...theme.Row,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
