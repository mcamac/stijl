
import React from 'react'
import * as ui from '../ui'
import {color as d3Color} from 'd3-color'
import {getTheme} from '../getTheme'

export const H = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    const size = Math.pow(this.props.m, 2.2) * theme.fontSize
    const color = d3Color(theme.text)
    if (this.props.m < 1) color.opacity = 0.7
    return <ui.Div
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

export const H6 = (props) =>
  <H m={0.85} {...props}/>

export const P = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <ui.Div
      padding={theme.gutter}
      display='inline'
      lineHeight={theme.lineHeight}
      {...this.props}
    />
  },
})

export const Text = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <ui.Div
      paddingRight={theme.gutter}
      paddingLeft={theme.gutter}
      display='inline'
      lineHeight={theme.lineHeight}
      {...this.props}
    />
  },
})
