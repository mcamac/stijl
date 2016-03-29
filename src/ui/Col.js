
import React from 'react'
import _ from '../lodash'

const defaultStyle = {
  boxSizing: 'border-box',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: 1,
  alignContent: 'flex-start',

  border: '0 solid black',
  margin: 0,
  padding: 0,
  whiteSpace: 'pre-wrap',
}

const propsToOmit = ['id', 'children', 'className', 'm']

export const Col = (props) => {
  const actions = _.pickBy((value, name) => /^on/.test(name), props)
  const style = _.runFlow(
    props,
    _.assign(defaultStyle),
    _.omitBy((value, name) => /^on/.test(name)),
    _.omit(propsToOmit),
  )

  return <div
    style={style}
    {...actions}
  >
    {props.children}
  </div>
}
