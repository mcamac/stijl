
import React from 'react'
import _ from 'lodash/fp'
import cn from 'classnames'
import {Link} from 'react-router'

import getClass from './styleSheet'
import {classes} from './theme'

const propsToOmit = ['children', 'css', 'mh', 'mv']

export const createStijlComponent = (tag, name) => {
  return class Stijl extends React.Component {
    static displayName = name
    render() {
      const {props} = this
      const modifierClasses = {
        [classes.mh]: props.mh,
        [classes.mv]: props.mv,
      }
      const className = cn(
        `stijl-${name}`,
        classes.default,
        classes[name],
        getClass(props.css),
        modifierClasses,
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

export const H1 = createStijlComponent('h1', 'H1')
export const H2 = createStijlComponent('h2', 'H2')
export const H3 = createStijlComponent('h3', 'H3')
export const H4 = createStijlComponent('h4', 'H4')
export const H5 = createStijlComponent('h5', 'H5')
export const H6 = createStijlComponent('h6', 'H6')
export const P = createStijlComponent('p', 'P')
export const A = createStijlComponent(Link, 'A')
export const Col = createStijlComponent('div', 'Col')
export const Row = createStijlComponent('div', 'Row')
export const Window = createStijlComponent('div', 'Window')
export const Span = createStijlComponent('span', 'Span')

export default {
  H1, H2, H3, H4, H5, H6, P, A, Col, Row, Window, Span,
}
