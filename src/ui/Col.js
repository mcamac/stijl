
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
        flexGrow: 1,
        ...this.getLocalGutters(),
        ...theme.Col,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})

export const ColText = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        flexBasis: theme.base.flexBasisText,
        flexGrow: 0,
        ...this.getLocalGutters(),
        ...theme.ColText,
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
        flexGrow: 0,
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
