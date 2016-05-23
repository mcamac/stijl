
import React from 'react'
import _ from 'lodash/fp'
import {A} from './A'

export class Link extends React.Component {
  static contextTypes = {
    history: React.PropTypes.object,
  }
  handleClick = (evt) => {
    evt.preventDefault()
    if (!this.context.history || !this.props.to) return
    this.context.history.push(this.props.to)
  }
  render() {
    return <A
      onClick={this.handleClick}
      {..._.omit(['to'], this.props)}
      href={this.props.to}
    />
  }
}
