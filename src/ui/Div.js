
import React from 'react'
import {getTheme} from '../getTheme'

export const Div = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...theme.Div,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
