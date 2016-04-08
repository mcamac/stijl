
import React from 'react'

export const ContentEditable = React.createClass({
  getInitialState() {
    return {}
  },
  componentDidUpdate() {
    if (!this.node) return
    this.node.innerText = this.getInnerHTML()
  },
  handleBlur() {
    this.setNewValue()
  },
  handleInput() {
    this.setNewValue()
  },
  handleKeyDown(evt) {
    if (!this.node) return
    if (evt.keyCode === 13) {
      evt.preventDefault()
      this.node.blur()
      window.getSelection().removeAllRanges()
    }
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
  getInnerHTML() {
    const {props, state} = this
    return props.value || state.value || ''
  },
  render() {
    return <div
      contentEditable
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
      onInput={this.handleInput}
      onKeyDown={this.handleKeyDown}
      ref={(node) => {this.node = node}}
      style={{
        outline: 'none',
        cursor: 'text',
        wordBreak: 'break-all',
      }}
    />
  },
})
