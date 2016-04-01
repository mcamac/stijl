
import React from 'react'
import {getTheme} from '../getTheme'
import {getStyle} from '../getStyle'

export const Img = React.createClass({
  mixins: [getTheme, getStyle],
  render() {
    const {props} = this
    const theme = this.getTheme()
    const actions = this.getActions()
    const style = this.getStyle()

    return <div
      {...actions}
      style={{
        ...style,
        marginRight: props.full ? 0 : theme.gutter,
        marginLeft: props.full ? 0 : theme.gutter,
      }}
    >
      <img
        style={{
          width: '100%',
        }}
        src={props.src}
      />
    </div>
  },
})
