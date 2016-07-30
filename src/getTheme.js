
import React from 'react'
import defaultTheme from './defaultTheme'
import _ from 'lodash/fp'

const defaultStyle = {
  boxSizing: 'border-box',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: 0,
  alignContent: 'flex-start',

  borderWidth: 0,
  borderStyle: 'solid',
  minWidth: 0,
}

const omitValues = [
  'm', 'noM', 'mV', 'noMV', 'p', 'noP', 'pV', 'noPV',
  'marginAuto', 'v',
  'value', 'defaultValue', 'multiple', 'name',
  'localRef',
  'children', 'href', 'placeholder', 'src', 'style',
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
    let cleanGutter = {}
    if (_.contains(
      ['m', 'mH', 'm2', 'noM', 'negM', 'negM2'],
      this.props,
    )) {
      cleanGutter = {
        ...cleanGutter,
        m: undefined, mH: undefined, m2: undefined,
        noM: undefined, negM: undefined, negM2: undefined,
      }
    }
    if (_.contains(
      ['mV', 'mVH', 'mV2', 'noMV', 'negMV', 'negMV2'],
      this.props,
    )) {
      cleanGutter = {
        ...cleanGutter,
        mV: undefined, mVH: undefined, mV2: undefined,
        noMV: undefined, negMV: undefined, negMV2: undefined,
      }
    }
    if (_.contains(
      ['p', 'pH', 'p2', 'noP'],
      this.props,
    )) {
      cleanGutter = {
        ...cleanGutter,
        p: undefined, pH: undefined, p2: undefined,
        noP: undefined,
      }
    }
    if (_.contains(
      ['pV', 'pVH', 'pV2', 'noPV'],
      this.props,
    )) {
      cleanGutter = {
        ...cleanGutter,
        pV: undefined, pVH: undefined, pV2: undefined,
        noPV: undefined,
      }
    }

    const localGutters = {}
    const props = {
      ...extras,
      ...cleanGutter,
      ...this.props,
    }

    if (props.m) {
      localGutters.marginLeft = gutter
      localGutters.marginRight = gutter
    }
    if (props.mH) {
      localGutters.marginLeft = gutter / 2
      localGutters.marginRight = gutter / 2
    }
    if (props.m2) {
      localGutters.marginLeft = gutter * 2
      localGutters.marginRight = gutter * 2
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
    if (props.negMV) {
      localGutters.marginTop = - gutter
      localGutters.marginBottom = - gutter
    }
    if (props.negMV2) {
      localGutters.marginTop = - gutter * 2
      localGutters.marginBottom = - gutter * 2
    }
    if (props.mVH) {
      localGutters.marginTop = gutter / 2
      localGutters.marginBottom = gutter / 2
    }
    if (props.mV) {
      localGutters.marginTop = gutter
      localGutters.marginBottom = gutter
    }
    if (props.mV2) {
      localGutters.marginTop = gutter * 2
      localGutters.marginBottom = gutter * 2
    }
    if (props.noMV) {
      localGutters.marginTop = 0
      localGutters.marginBottom = 0
    }
    if (props.pH) {
      localGutters.paddingLeft = gutter / 2
      localGutters.paddingRight = gutter / 2
    }
    if (props.p) {
      localGutters.paddingLeft = gutter
      localGutters.paddingRight = gutter
    }
    if (props.p2) {
      localGutters.paddingLeft = gutter * 2
      localGutters.paddingRight = gutter * 2
    }
    if (props.noP) {
      localGutters.paddingLeft = 0
      localGutters.paddingRight = 0
    }
    if (props.pVH) {
      localGutters.paddingTop = gutter / 2
      localGutters.paddingBottom = gutter / 2
    }
    if (props.pV) {
      localGutters.paddingTop = gutter
      localGutters.paddingBottom = gutter
    }
    if (props.pV2) {
      localGutters.paddingTop = gutter * 2
      localGutters.paddingBottom = gutter * 2
    }
    if (props.noPV) {
      localGutters.paddingTop = 0
      localGutters.paddingBottom = 0
    }
    if (props.marginAuto) {
      localGutters.marginTop = 'auto'
      localGutters.marginBottom = 'auto'
      localGutters.marginLeft = 'auto'
      localGutters.marginRight = 'auto'
    }
    return localGutters
  },
  getActions() {
    return _.pickBy((value, name) => /^on/.test(name), this.props)
  },
  getPropsStyle(omitArray) {
    const styl = _.flow(
      _.omitBy((value, name) => /^on/.test(name)),
      _.omit(omitValues),
      _.omit(omitArray),
    )(this.props)
    return {
      ...styl,
      ...this.props.style,
    }
  },
}
