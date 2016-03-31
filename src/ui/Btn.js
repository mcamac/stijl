
import React from 'react'
import * as ui from '../ui'
import {color} from 'd3-color'
import {getTheme} from '../getTheme'

export const Btn = React.createClass({
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
      background.opacity = 0.1
      return background
    }
    if (this.state.hover) {
      const background = color(theme.action)
      background.opacity = 0.1
      return background
    }
    return undefined
  },
  render() {
    const theme = this.getTheme()
    return <ui.Col
      background={this.getBackground()}
      cursor='pointer'
      border='2px solid'
      borderColor={theme.action}
      padding={theme.gutter}
      paddingTop={theme.gutter / 2}
      paddingBottom={theme.gutter / 2}
      margin={theme.gutter}
      color={theme.action}
      borderRadius={5}
      fontWeight='bold'
      {...this.props}
      onMouseLeave={this.handleLeave}
      onMouseEnter={this.handleEnter}
      onMouseDown={this.handleDown}
      onMouseUp={this.handleUp}
    />
  },
})

export const BtnFlat = (props) =>
  <Btn
    margin='0'
    border={undefined}
    borderRadius='0'
    {...props}
  />
