
import React from 'react'
import * as ui from '../ui'
import {color} from 'd3-color'
import {getTheme} from '../getTheme'

export const A = React.createClass({
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
    return undefined
  },
  render() {
    const theme = this.getTheme()
    return <ui.Div
      background={this.getBackground()}
      cursor='pointer'
      display='inline'
      color={theme.action}
      {...this.props}
      onMouseLeave={this.handleLeave}
      onMouseEnter={this.handleEnter}
      onMouseDown={this.handleDown}
      onMouseUp={this.handleUp}
    />
  },
})
