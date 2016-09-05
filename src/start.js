
import _ from 'lodash/fp'
import {merge} from 'lodash'

import {getClassName} from './styleSheet'
import {theme, createCssObject} from './theme'
import {ui} from './base'

const vanillaTheme = _.clone(theme)

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
  merge(theme, vanillaTheme)
  themeExtensions.forEach(d => {
    if (_.isFunction(d)) {
      merge(theme, d(theme))
      return
    }
    merge(theme, d)
  })

  const cssObject = createCssObject(theme)
  cssObjectExtensions.forEach(d => {
    if (_.isFunction(d)) {
      merge(cssObject, d(theme, cssObject))
      return
    }
    merge(cssObject, d)
  })

  merge(classNames, getClassesFromCssObject(cssObject))

  uiExtensions.forEach(d => {
    if (_.isFunction(d)) {
      merge(ui, d(theme, cssObject, ui))
      return
    }
    merge(ui, d)
  })
}
