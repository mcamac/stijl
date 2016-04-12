
import React from 'react'
import {getTheme} from '../getTheme'


export const Container = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          marginLeft: theme.base.gutter,
          marginRight: theme.base.gutter,
          flexShrink: 0,
        },
        ...theme.Container,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
