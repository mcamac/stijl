
import React from 'react'
import {getTheme} from '../getTheme'

export const Card = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    const {
      gutter,
      backgroundCard,
      borderRadius,
    } = theme.base
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexGrow: 1,
          marginLeft: gutter / 2,
          marginRight: gutter / 2,
          marginTop: gutter / 2,
          marginBottom: gutter / 2,
          paddingTop: gutter / 2,
          paddingBottom: gutter / 2,
          background: backgroundCard,
          flexBasis: 250,
          borderRadius,
        },
        ...theme.Card,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
