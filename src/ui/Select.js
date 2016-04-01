
import React from 'react'
import * as ui from '../ui'
import {color as d3Color} from 'd3-color'
import {getTheme} from '../getTheme'

export const Select = React.createClass({
  mixins: [getTheme],
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
    this.setState({hover: false})
    if (this.props.onMouseLeave) this.props.onMouseLeave()
  },
  handleDown() {
    this.setState({active: true})
    if (this.props.onMouseDown) this.props.onMouseDown()
  },
  handleUp() {
    this.setState({hover: false})
    if (this.props.onMouseUp) this.props.onMouseUp()
  },
  handleFocus() {
    this.setState({active: true})
    if (this.props.onFocus) this.props.onFocus()
  },
  handleBlur() {
    this.setState({active: false})
    if (this.props.onBlur) this.props.onBlur()
  },
  getBackground() {
    const theme = this.getTheme()
    if (this.state.active) {
      const background = d3Color(theme.active)
      background.opacity = 0.2
      return background
    }
    if (this.state.hover) {
      const background = d3Color(theme.action)
      background.opacity = 0.2
      return background
    }
    return theme.background
  },
  getBorderColor() {
    const theme = this.getTheme()
    if (this.state.active) return theme.active
    return theme.action
  },
  render() {
    const theme = this.getTheme()
    return <ui.Row
      background={this.getBackground()}
      borderBottom='2px solid'
      borderColor={this.getBorderColor()}
      margin={theme.gutter}
      alignItems='center'
    >
      <ui.ContentEditable
        WebkitTapHighlightColor='rgba(0,0,0,0)'
        flexGrow='1'
        {...this.props}
        onFocus={this.handleFocus}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        onMouseLeave={this.handleLeave}
        onMouseEnter={this.handleEnter}
        onMouseDown={this.handleDown}
        onMouseUp={this.handleUp}
        onBlur={this.handleBlur}
      />
      <ui.Div
        cursor='pointer'
        paddingRight={theme.gutter}
        paddingLeft={theme.gutter}
        color={theme.action}
      >▾</ui.Div>
      {this.state.active ? <ui.Col
        background={theme.card}
        position='absolute'
        width='100%'
        left='0'
        top='calc(100%)'
        zIndex='10'
        border={`${theme.borderWidth}px solid`}
        borderColor={theme.borderColor}
      >
        <ui.Button flat>Option 1</ui.Button>
        <ui.Button flat>Option 2</ui.Button>
        <ui.Button flat>Option 3</ui.Button>
      </ui.Col> : undefined}
    </ui.Row>
  },
})
