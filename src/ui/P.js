
import React from 'react'
import * as ui from '../ui'
import {defaultTheme} from '../defaultTheme'
import {color as d3Color} from 'd3-color'

export const H = React.createClass({
  getDefaultProps() {
    return {m: 1}
  },
  getInitialState() {
    return {}
  },
  contextTypes: {
    theme: React.PropTypes.object,
  },
  getTheme() {
    return this.props.theme || this.context.theme || defaultTheme
  },
  render() {
    const theme = this.getTheme()
    const size = Math.pow(this.props.m, 2.2) * theme.size
    const color = d3Color(theme.text)
    if (this.props.m < 1) color.opacity = 0.7
    return <ui.Col
      fontSize={size}
      padding={theme.gutter}
      paddingBottom={size / 5}
      paddingTop={size / 2}
      display='inline'
      color={color}
      fontWeight={this.props.m > 1.1 ? 'bold' : undefined}
      {...this.props}
    />
  },
})

export const H1 = (props) =>
  <H m={1.5} {...props}/>

export const H2 = (props) =>
  <H m={1.3} {...props}/>

export const H3 = (props) =>
  <H m={1.1} {...props}/>

export const H4 = (props) =>
  <H m={1} fontWeight='bold' {...props}/>

export const H5 = (props) =>
  <H m={0.9} fontStyle='italic' {...props}/>

export const P = React.createClass({
  getInitialState() {
    return {}
  },
  contextTypes: {
    theme: React.PropTypes.object,
  },
  getTheme() {
    return this.props.theme || this.context.theme || defaultTheme
  },
  render() {
    const theme = this.getTheme()
    return <ui.Col
      padding={theme.gutter}
      display='inline'
      lineHeight={theme.lineHeight}
      {...this.props}
    />
  },
})
