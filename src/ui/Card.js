
import React from 'react'
import {getTheme} from '../getTheme'

export const Card = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    const {
      backgroundCard,
      borderRadius,
    } = theme.base
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexGrow: 1,
          background: backgroundCard,
          flexBasis: 250,
          borderRadius,
        },
        ...this.getLocalGutters({
          m: true,
          mV: true,
          p: true,
          pV: true,
        }),
        ...theme.Card,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
