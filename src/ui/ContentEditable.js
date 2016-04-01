
import React from 'react'
import {getStyle} from '../getStyle'

export const ContentEditable = React.createClass({
  mixins: [getStyle],
  getInitialState() {
    return {}
  },
  componentDidUpdate() {
    if (!this.node) return
    const {props, state, node} = this
    if (this.props.value !== node.innerText) {
      node.innerText = props.value || state.value || ''
    }
  },
  handleBlur(evt) {
    this.setNewValue()
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
  render() {
    const actions = this.getActions()
    const style = this.getStyle()
    return <div
      {...actions}
      contentEditable
      onBlur={this.handleBlur}
      onInput={this.handleInput}
      onKeyDown={this.handleKeyDown}
      ref={(node) => {this.node = node}}
      style={{
        ...style,
        outline: 'none',
        cursor: 'text',
        wordBreak: 'break-all',
      }}
    />
  },
})
