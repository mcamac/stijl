
import React from 'react'
import {defaultTheme} from './defaultTheme'
import _ from 'lodash/fp'

const defaultStyle = {
  boxSizing: 'border-box',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: 1,
  flexGrow: 0,
  alignContent: 'flex-start',

  borderWidth: 0,
  borderStyle: 'solid',
}

export const getTheme = {
  getInitialState() {
    return {}
  },
  contextTypes: {
    theme: React.PropTypes.object,
  },
  defaultStyle,
  getTheme() {
    return this.props.theme || this.context.theme || defaultTheme
  },
  getActions() {
    return _.pickBy((value, name) => /^on/.test(name), this.props)
  },
  getPropsStyle(omitArray) {
    return _.flow(
      _.omitBy((value, name) => /^on/.test(name)),
      _.omit(['value', 'children', 'href', 'placeholder']),
      _.omit(omitArray),
    )(this.props)
  },
}
