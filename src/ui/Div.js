
import React from 'react'
import {getTheme} from '../getTheme'
import {getStyle} from '../getStyle'

export const Div = React.createClass({
  mixins: [getTheme, getStyle],
  getFontSize() {
    const theme = this.getTheme()
    if (this.props.m) return Math.pow(this.props.m, 2.2) * theme.fontSize
    return undefined
  },
  render() {
    const {props} = this
    const actions = this.getActions()
    const style = this.getStyle()
    const fontSize = this.getFontSize()
    return <div
      style={{...style, fontSize}}
      {...actions}
    >
      {props.children}
    </div>
  },
})

export const Inline = (props) =>
  <Div
    display='inline'
    {...props}
  />

export const Col = Div

export const Row = (props) =>
  <Div
    flexDirection='row'
    {...props}
  />

export const ColText = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <Row
      flexShrink='0'
      justifyContent='center'
      alignItems='flex-start'
    >
      <Col
        paddingRight={theme.gutter}
        paddingLeft={theme.gutter}
        flexBasis={theme.textBasis}
        {...this.props}
      />
    </Row>
  },
})

export const ColImg = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <Row
      flexShrink='0'
      justifyContent='center'
      alignItems='flex-start'
    >
      <Col
        flexBasis={theme.textBasis * 1.5}
        {...this.props}
      />
    </Row>
  },
})
