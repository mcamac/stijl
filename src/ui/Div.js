
import React from 'react'
import {getTheme} from '../getTheme'
import {getStyle} from '../getStyle'
import _ from 'lodash/fp'

export const Div = React.createClass({
  mixins: [getTheme, getStyle],
  handleEnter() {
    this.setState({hover: true})
    if (this.props.onMouseEnter) this.props.onMouseEnter()
  },
  handleTouchStart() {
    this.setState({active: true})
    if (this.props.onTouchStart) this.props.onTouchStart()
  },
  handleTouchEnd() {
    this.setState({active: false})
    if (this.props.onTouchEnd) this.props.onTouchEnd()
  },
  handleLeave() {
    this.setState({hover: false, active: false})
    if (this.props.onMouseLeave) this.props.onMouseLeave()
  },
  handleDown() {
    this.setState({active: true})
    if (this.props.onMouseDown) this.props.onMouseDown()
  },
  handleUp() {
    this.setState({active: false})
    if (this.props.onMouseUp) this.props.onMouseUp()
  },
  handleFocus() {
    this.setState({focus: true})
    if (this.props.onFocus) this.props.onFocus()
  },
  handleBlur() {
    this.setState({focus: false})
    if (this.props.onBlur) this.props.onBlur()
  },
  render() {
    const {props} = this
    const actions = this.getActions()
    const style = this.getStyle()
    return <div
      style={style}
      {...actions}
      onTouchStart={this.handleTouchStart}
      onTouchEnd={this.handleTouchEnd}
      onMouseLeave={this.handleLeave}
      onMouseEnter={this.handleEnter}
      onMouseDown={this.handleDown}
      onMouseUp={this.handleUp}
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
    >
      {props.value || props.children}
    </div>
  },
})

export const Sw = React.createClass({
  mixins: [getTheme],
  getDefaultProps() {
    return {m: 1}
  },
  render() {
    const theme = this.getTheme()
    return <Div
      width={this.props.m * theme.s.s4}
      {..._.omit(['m'], this.props)}
    />
  },
})

export const Swh = () => <Sw m={0.5}/>

export const Sh = React.createClass({
  mixins: [getTheme],
  getDefaultProps() {
    return {m: 1}
  },
  render() {
    const theme = this.getTheme()
    return <Div
      height={this.props.m * theme.s.s4}
      {..._.omit(['m'], this.props)}
    />
  },
})

export const Shh = () => <Sh m={0.5}/>

export const Inline = (props) =>
  <Div
    name='Inline'
    display='inline'
    {...props}
  />

export const Col = Div
