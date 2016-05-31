
import React from 'react'
import _ from 'lodash/fp'

export class OnChangeHOC extends React.Component {
  state = {}
  handleChange = (childProps) => {
    this.setState(childProps)
  }

  render() {
    return React.cloneElement(
      this.props.children,
      {
        ..._.omit('children', this.props),
        ...this.state,
        onChange: this.handleChange,
      },
    )
  }
}
