
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
  extensions = []
) => {
  merge(theme, vanillaTheme)
  extensions.forEach(d => {
    if (_.isFunction(d.theme)) {
      merge(theme, d.theme(theme))
    } else {
      merge(theme, d.theme)
    }
  })

  const cssObject = createCssObject(theme)
  extensions.forEach(d => {
    if (_.isFunction(d.css)) {
      merge(cssObject, d.css(theme, cssObject))
    } else {
      merge(cssObject, d.css)
    }
  })

  merge(classNames, getClassesFromCssObject(cssObject))

  extensions.forEach(d => {
    if (_.isFunction(d.ui)) {
      merge(ui, d.ui(theme, cssObject, ui))
    } else {
      merge(ui, d.ui)
    }
  })
  console.log(ui)
}
