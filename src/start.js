
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

export const start = (extensions = []) => {
  extensions.forEach(d => merge(theme, d.theme))

  const cssObject = createCssObject(theme)
  extensions.forEach(d => merge(theme, d.cssObject))

  merge(classNames, getClassesFromCssObject(cssObject))

  extensions.forEach(d => merge(ui, d.ui))
}
