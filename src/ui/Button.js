
import React from 'react'
import * as ui from '../ui'
import {color} from 'd3-color'
import {getTheme} from '../getTheme'

export const Button = React.createClass({
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
    this.setState({active: false, hover: false})
    if (this.props.onMouseUp) this.props.onMouseUp()
  },
  getBackground() {
    const theme = this.getTheme()
    if (this.props.prime) {
      if (this.state.active) {
        const background = color(theme.active)
        background.opacity = 0.7
        return background
      }
      if (this.state.hover) {
        const background = color(theme.action)
        background.opacity = 0.7
        return background
      }
    }
    if (this.state.active) {
      const background = color(theme.active)
      background.opacity = 0.4
      return background
    }
    if (this.state.hover) {
      const background = color(theme.action)
      background.opacity = 0.2
      return background
    }
    if (this.props.prime) return theme.action
    return undefined
  },
  getBorderRadius() {
    if (this.props.flat) return 0
    return this.getTheme().borderRadius
  },
  getMargin() {
    if (this.props.flat) return 0
    return this.getTheme().gutter
  },
  getBorder() {
    if (this.props.flat) return 0
    return '2px solid'
  },
  getColor() {
    if (this.props.prime) return this.getTheme().background
    return this.getTheme().action
  },
  render() {
    const theme = this.getTheme()
    return <ui.Div
      background={this.getBackground()}
      border={this.getBorder()}
      borderColor={theme.action}
      borderRadius={this.getBorderRadius()}
      color={this.getColor()}
      cursor='pointer'
      fontWeight='bold'
      margin={this.getMargin()}
      padding={theme.gutter}
      paddingBottom={theme.gutter / 2}
      paddingTop={theme.gutter / 2}
      WebkitTapHighlightColor='rgba(0,0,0,0)'
      {...this.props}
      onTouchStart={this.handleTouchStart}
      onTouchEnd={this.handleTouchEnd}
      onMouseLeave={this.handleLeave}
      onMouseEnter={this.handleEnter}
      onMouseDown={this.handleDown}
      onMouseUp={this.handleUp}
    />
  },
})