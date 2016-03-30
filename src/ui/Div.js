
import React from 'react'
import _ from '../lodash'
import {getTheme} from '../getTheme'

const defaultStyle = {
  boxSizing: 'border-box',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: 0,
  alignContent: 'flex-start',

  border: '0 solid black',
  margin: 0,
  padding: 0,
  whiteSpace: 'pre-wrap',
}

const propsToOmit = ['id', 'children', 'className', 'm']

export const Div = (props) => {
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

export const Col = React.createClass({
  render() {
    return <Div
      flexShrink='1'
      {...this.props}
    />
  },
})

export const Row = (props) =>
  <Div
    alignItems='center'
    flexDirection='row'
    {...props}
  />

export const ColText = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <Row justifyContent='center'>
      <Col
        paddingRight={theme.gutter}
        paddingLeft={theme.gutter}
        flexBasis={theme.textBasis}
        {...this.props}
      />
    </Row>
  },
})
