
import React from 'react'
import {getTheme} from '../getTheme'

export const Form = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <form
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...this.getLocalGutters(),
        ...theme.Form,
        ...this.getPropsStyle(),
        ...this.props.style,
      }}
    >
      {this.props.children}
    </form>
  },
})
