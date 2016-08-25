
import _ from 'lodash/fp'
import {merge} from 'lodash'

import {getClassName} from './styleSheet'
import {theme, createCssObject} from './theme'
import {ui} from './base'

export const classNames = {}

const getClassesFromCssObject = (cssObject) => {
  const _classNames = {}
  _.each(d => {
    _classNames[d[0]] = getClassName(d[1])
  }, _.toPairs(cssObject))
  return _classNames
}

export const start = (
  themeExtensions = [], cssObjectExtensions = [], uiExtensions = []
) => {
  themeExtensions.forEach(d => merge(theme, d))

  const cssObject = createCssObject(theme)
  cssObjectExtensions.forEach(d => merge(cssObject, d))

  merge(classNames, getClassesFromCssObject(cssObject))

  uiExtensions.forEach(d => merge(ui, d))
}
