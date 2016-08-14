
import React from 'react'
import _ from 'lodash/fp'
import cn from 'classnames'
import {Link as RouterLink} from 'react-router'

import {getClass} from './styleSheet'
import {classes} from './theme'

const propsToOmit = [
  'children', 'css',

  'marginAuto',

  'margin', 'marginZero', 'marginHalf', 'marginDouble',
  'marginHorizontal', 'marginHorizontalZero', 'marginHorizontalHalf', 'marginHorizontalDouble', 'negativeMarginHorizontal',
  'marginVertical', 'marginVerticalZero', 'marginVerticalHalf', 'marginVerticalDouble', 'negativeMarginVertical',

  'padding', 'paddingZero', 'paddingHalf', 'paddingDouble',
  'paddingHorizontal', 'paddingHorizontalZero', 'paddingHorizontalHalf', 'paddingHorizontalDouble', 'negativePaddingHorizontal',
  'paddingVertical', 'paddingVerticalZero', 'paddingVerticalHalf', 'paddingVerticalDouble', 'negativePaddingVertical',
]

export const createStijlComponent = (tag, name) => {
  return class Stijl extends React.Component {
    static displayName = name
    render() {
      const {props} = this
      const modifierClasses = {}
      propsToOmit.forEach(d =>
        modifierClasses[classes[d]] = props[d]
      )
      const className = cn(
        `stijl-${name}`,
        classes.default,
        classes[name],
        getClass(props.css),
        modifierClasses,
        props.className,
      )
      const passDownProps = {
          className,
          ..._.omit(propsToOmit, props),
        }
      return React.createElement(
        tag,
        passDownProps,
        props.children,
      )
    }
  }
}

const _A = createStijlComponent('a', 'A')
const _ALink = createStijlComponent(RouterLink, 'A')

const SmartLink = (props) => {
  if (props.href && /^http/.test(props.href)) {
    return <_A {...props}/>
  }
  if (props.href && !/^http/.test(props.href)) {
    return <_ALink {..._.omit('href', props)}
      to={props.href}
    />
  }
  return <_A {...props}/>
}

export const H1 = createStijlComponent('h1', 'H1')
export const H2 = createStijlComponent('h2', 'H2')
export const H3 = createStijlComponent('h3', 'H3')
export const H4 = createStijlComponent('h4', 'H4')
export const H5 = createStijlComponent('h5', 'H5')
export const H6 = createStijlComponent('h6', 'H6')
export const P = createStijlComponent('p', 'P')
export const A = SmartLink
export const Link = createStijlComponent(RouterLink, 'Link')
export const Col = createStijlComponent('div', 'Col')
export const Row = createStijlComponent('div', 'Row')
export const RowWrap = createStijlComponent('div', 'RowWrap')
export const Window = createStijlComponent('div', 'Window')
export const Span = createStijlComponent('span', 'Span')

export const Form = createStijlComponent('input', 'Form')
export const Input = createStijlComponent('input', 'Input')

export const ui = {
  A, H1, H2, H3, H4, H5, H6, P, Link, Col, Row, RowWrap, Window, Span, Input, Form,
}
