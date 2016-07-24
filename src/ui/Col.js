
import React from 'react'
import {getTheme} from '../getTheme'
import R from 'radium'

export const Col = R(React.createClass({
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
}))

export const ColText = R(React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...this.getLocalGutters(),
        ...theme.Col,
        flexBasis: theme.base.flexBasisText,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
}))

export const Row = R(React.createClass({
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
}))

export const RowWrap = (props) =>
  <Row flexWrap='wrap' {...props}/>
