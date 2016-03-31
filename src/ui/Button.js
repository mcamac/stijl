
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
  handleLeave() {
    this.setState({hover: false})
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
  getBackground() {
    const theme = this.getTheme()
    if (this.props.prime) {
      if (this.state.active) {
        const background = color(theme.active)
        background.opacity = 0.8
        return background
      }
      if (this.state.hover) {
        const background = color(theme.action)
        background.opacity = 0.8
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
    return this.getTheme().radius
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
    return <ui.Col
      background={this.getBackground()}
      cursor='pointer'
      border={this.getBorder()}
      borderColor={theme.action}
      padding={theme.gutter}
      paddingTop={theme.gutter / 2}
      paddingBottom={theme.gutter / 2}
      margin={this.getMargin()}
      color={this.getColor()}
      borderRadius={this.getBorderRadius()}
      fontWeight='bold'
      {...this.props}
      onMouseLeave={this.handleLeave}
      onMouseEnter={this.handleEnter}
      onMouseDown={this.handleDown}
      onMouseUp={this.handleUp}
    />
  },
})
