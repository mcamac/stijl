
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
}

const omitFunc = (value, name) => {
  if (/^on/.test(name)) return true
  if (name === 'id' ||
    name === 'children' ||
    name === 'className'
  ) return true
  return false
}

export const Col = (props) => {
  const actions = _.pickBy((value, name) => /^on/.test(name), props)
  const style = _.runFlow(
    props,
    _.assign(defaultStyle),
    _.omitBy(omitFunc),
  )

  return <div
    style={style}
    {...actions}
  >
    {props.children}
  </div>
}
