
import _ from 'lodash/fp'
import {createMarkupForStyles} from 'react/lib/CSSPropertyOperations'

const getSheet = () => {
  const docStyle = document.getElementById('__stijl__')
  if (docStyle) return docStyle.sheet

  const style = document.createElement('style')
  style.id = '__stijl__'
  style.appendChild(document.createTextNode('')) // WebKit hack :(
  document.head.appendChild(style)

  return style.sheet
}

const sheet = getSheet()
const hashCache = {}

const insertRule = (rule) =>
  sheet.insertRule(rule, sheet.cssRules.length)

const getHash = (input) => {
  const inputString = JSON.stringify(input)
  var hash = 0
  var i
  var chr
  var len
  if (inputString.length === 0) return hash
  for (i = 0, len = inputString.length; i < len; i++) {
    chr = inputString.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }
  return `s${hash}`
}

const getRules = (hash, cssPairs) => {
  const base = {}
  const rules = []
  _.forEach(
    d => {
      if (/^\@/g.test(d[0])) return
      if (/^\w/g.test(d[0])) {
        base[d[0]] = d[1]
        return
      }
      const rule = `${hash}${d[0]} {${createMarkupForStyles(d[1])}}`
      rules.push(rule)
    },
    cssPairs
  )
  rules.unshift(`${hash} {${createMarkupForStyles(base)}}`)
  return rules
}

const getMediaQueryRule = (hash, mediaQuery, css) => {
  const cssPairs = _.toPairs(css)
  const rules = getRules(hash, cssPairs)
  return `${mediaQuery} {${rules.join(' ')}}`
}

const genRules = (hash, css) => {
  const mediaQueries = []
  const cssPairs = _.toPairs(css)
  _.forEach(
    d => {if (/^\@/g.test(d[0])) mediaQueries.push(d)},
    cssPairs,
  )
  const rules = getRules(hash, cssPairs)
  const mediaRules = _.map(
    d => getMediaQueryRule(hash, d[0], d[1]),
    mediaQueries,
  )
  const allRules = rules.concat(mediaRules)
  return allRules
}

export const getClassName = (css) => {
  if (!_.isPlainObject(css) || _.isEmpty(css)) return undefined
  const hash = getHash(css)

  if (hashCache[hash]) return hash

  hashCache[hash] = true
  const rules = genRules(`.${hash}`, css)
  _.forEach(insertRule, rules)

  return hash
}

// {selector: style}
export const insertCssObject = (styleObject) => {
  _.pipe(
    _.toPairs,
    _.map(d => genRules(d[0], d[1])),
    _.flatten,
    _.forEach(insertRule)
  )(styleObject)
}
