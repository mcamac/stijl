
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

const omitValues = [
  'm', 'noM', 'mV', 'noMV', 'p', 'noP', 'pV', 'noPV',
  'value', 'defaultValue', 'multiple', 'name',
  'localRef',
  'children', 'href', 'placeholder', 'src',
]

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
  getLocalGutters(extras) {
    const theme = this.getTheme()
    const {gutter} = theme.base
    const localGutters = {}
    const props = {
      ...extras,
      ...this.props,
    }

    if (props.m) {
      localGutters.marginLeft = gutter
      localGutters.marginRight = gutter
    }
    if (props.noM) {
      localGutters.marginLeft = 0
      localGutters.marginRight = 0
    }
    if (props.negM) {
      localGutters.marginLeft = - gutter
      localGutters.marginRight = - gutter
    }
    if (props.negM2) {
      localGutters.marginLeft = - gutter * 2
      localGutters.marginRight = - gutter * 2
    }
    if (props.mV) {
      localGutters.marginTop = gutter
      localGutters.marginBottom = gutter
    }
    if (props.noMV) {
      localGutters.marginTop = 0
      localGutters.marginBottom = 0
    }
    if (props.p) {
      localGutters.paddingLeft = gutter
      localGutters.paddingRight = gutter
    }
    if (props.noP) {
      localGutters.paddingLeft = 0
      localGutters.paddingRight = 0
    }
    if (props.pV) {
      localGutters.paddingTop = gutter
      localGutters.paddingBottom = gutter
    }
    if (props.noPV) {
      localGutters.paddingTop = 0
      localGutters.paddingBottom = 0
    }
    return localGutters
  },
  getActions() {
    return _.pickBy((value, name) => /^on/.test(name), this.props)
  },
  getPropsStyle(omitArray) {
    return _.flow(
      _.omitBy((value, name) => /^on/.test(name)),
      _.omit(omitValues),
      _.omit(omitArray),
    )(this.props)
  },
}
