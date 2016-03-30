
import React from 'react'
import {defaultTheme} from './defaultTheme'

export const getTheme = {
  getInitialState() {
    return {}
  },
  contextTypes: {
    theme: React.PropTypes.object,
  },
  getTheme() {
    return this.props.theme || this.context.theme || defaultTheme
  },
}
