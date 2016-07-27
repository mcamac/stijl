
import React from 'react'
import {getTheme} from '../getTheme'
import R from 'radium'

export const Img = R(React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...this.getLocalGutters({
          // p: true,
          pV: true,
        }),
        ...theme.Img,
        ...this.getPropsStyle(),
      }}
    >
      <img
        src={this.props.src}
        style={{
          width: '100%',
        }}
      />
    </div>
  },
}))
