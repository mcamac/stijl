
import React from 'react'
import {getStyle} from '../getStyle'
import {getTheme} from '../getTheme'

export const ContentEditable = React.createClass({
  mixins: [getStyle, getTheme],
  getInitialState() {
    return {}
  },
  componentDidUpdate() {
    if (!this.node) return
    this.node.innerText = this.getInnerHTML()
  },
  handleBlur(evt) {
    this.setNewValue()
    this.setState({active: false})
    if (this.props.onBlur) this.props.onBlur(evt)
  },
  handleInput(evt) {
    this.setNewValue()
    if (this.props.onInput) this.props.onInput(evt)
  },
  handleKeyDown(evt) {
    if (!this.node) return
    if (evt.keyCode === 13) {
      evt.preventDefault()
      this.node.blur()
      window.getSelection().removeAllRanges()
    }
    if (this.props.onKeyDown) this.props.onKeyDown(evt)
  },
  handleFocus(evt) {
    this.setState({active: true})
    if (this.props.onFocus) this.props.onFocus(evt)
  },
  setNewValue() {
    if (!this.node) return
    const {props} = this
    const value = this.node.innerText.toString().replace(/(\r\n|\n|\r)/gm, '')
    if (props.onChange) {
      props.onChange(value)
    } else {
      this.setState({value})
    }
  },
  getExtraStyle() {
    if (!this.props.value && !this.state.value) {
      return {
        opacity: 0.5,
        fontStyle: 'italic',
      }
    }
    return {}
  },
  getInnerHTML() {
    const {props, state} = this
    if (state.active) return props.value || state.value || ''
    return props.value || state.value || props.placeholder || ''
  },
  render() {
    const actions = this.getActions()
    const style = this.getStyle()
    const theme = this.getTheme()
    return <div
      {...actions}
      contentEditable
      dangerouslySetInnerHTML={{__html: this.getInnerHTML()}}
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
      onInput={this.handleInput}
      onKeyDown={this.handleKeyDown}
      ref={(node) => {this.node = node}}
      style={{
        ...style,
        ...this.getExtraStyle(),
        outline: 'none',
        cursor: 'text',
        wordBreak: 'break-all',
        paddingTop: theme.gutter / 2,
        paddingBottom: theme.gutter / 2,
      }}
    />
  },
})
