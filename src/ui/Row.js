
import React from 'react'
import {getTheme} from '../getTheme'

export const Row = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexDirection: 'row',
          justifyContent: 'center',
          marginLeft: - theme.base.gutter / 2,
          marginRight: - theme.base.gutter / 2,
        },
        ...theme.Row,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})

export const FlexRow = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexDirection: 'row',
        },
        ...theme.FlexRow,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
