
import React from 'react'
import {getTheme} from '../getTheme'

export const ColText = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexBasis: theme.base.flexBasisText,
          marginLeft: theme.base.gutter / 2,
          marginRight: theme.base.gutter / 2,
        },
        ...theme.ColText,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})
