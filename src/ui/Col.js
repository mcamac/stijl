
import React from 'react'
import {getTheme} from '../getTheme'

export const Col = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexGrow: 1,
          marginLeft: theme.base.gutter / 2,
          marginRight: theme.base.gutter / 2,
        },
        ...theme.Col,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
