
import React from 'react'
import _ from 'lodash/fp'
import cn from 'classnames'
import {Link as RouterLink} from 'react-router'

import {getClassName} from './styleSheet'
import {classNames} from './start'

const propsToOmit = [
  'children', 'className', 'css',

  'marginAuto',

  'margin', 'marginZero', 'marginHalf', 'marginDouble',
  'marginHorizontal', 'marginHorizontalZero', 'marginHorizontalHalf', 'marginHorizontalDouble', 'negativeMarginHorizontal',
  'marginVertical', 'marginVerticalZero', 'marginVerticalHalf', 'marginVerticalDouble', 'negativeMarginVertical',

  'padding', 'paddingZero', 'paddingHalf', 'paddingDouble',
  'paddingHorizontal', 'paddingHorizontalZero', 'paddingHorizontalHalf', 'paddingHorizontalDouble', 'negativePaddingHorizontal',
  'paddingVertical', 'paddingVerticalZero', 'paddingVerticalHalf', 'paddingVerticalDouble', 'negativePaddingVertical',

  'flexGrow', 'flexShrink',
]

export const createStijlComponent = (tag, name, wrapped) =>
  class Stijl extends React.Component {
    static displayName = name
    render() {
      const {props} = this
      const modifierClasses = {}
      propsToOmit.forEach(d => {
        modifierClasses[classNames[d]] = props[d]
      })
      const className = cn(
        `stijl-${name}`,
        classNames.default,
        classNames[name],
        getClassName(props.css),
        modifierClasses,
        props.className,
      )
      const passDownProps = {
        ..._.omit(propsToOmit, props),
        className,
      }
      if (wrapped) {
        return <div className={className}>
          {React.createElement(
            tag,
            _.omit(propsToOmit, props),
            props.children,
          )}
        </div>
      }
      return React.createElement(
        tag,
        passDownProps,
        props.children,
      )
    }
  }

const A = createStijlComponent('a', 'A')
const Link = createStijlComponent(RouterLink, 'A')

const SmartLink = (props) => {
  if (props.href && /^http/.test(props.href)) {
    return <A {...props}/>
  }
  if (props.href && !/^http/.test(props.href)) {
    return <Link {..._.omit('href', props)}
      to={props.href}
    />
  }
  return <A {...props}/>
}

const stijlTags = [
  ['div', 'H0'],
  ['h1', 'H1'],
  ['h2', 'H2'],
  ['h3', 'H3'],
  ['h4', 'H4'],
  ['h5', 'H5'],
  ['h6', 'H6'],
  ['p', 'P'],
  ['hr', 'Hr'],
  [RouterLink, 'Link'],
  ['div', 'Col'],
  ['div', 'Row'],
  ['div', 'RowWrap'],
  ['div', 'Space'],
  ['div', 'SpaceHalf'],
  ['div', 'SpaceDouble'],
  ['div', 'SpaceTriple'],
  ['div', 'Window'],
  ['span', 'Span'],
  ['pre', 'Pre'],
  ['blockquote', 'Blockquote'],
  ['code', 'Code'],
  ['input', 'Form'],
  ['input', 'Input'],
  ['button', 'Button'],
  ['select', 'Select', true],
]

export const ui = {A: SmartLink}
stijlTags.forEach(d => ui[d[1]] = createStijlComponent(...d))
