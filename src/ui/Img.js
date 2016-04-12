
import React from 'react'
import {getTheme} from '../getTheme'

export const Img = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <img
      {...this.getActions()}
      src={this.props.src}
      style={{
        ...this.defaultStyle,
        ...{
          width: '100%',
        },
        ...theme.Img,
        ...this.getPropsStyle(['src']),
      }}
    />
  },
})
