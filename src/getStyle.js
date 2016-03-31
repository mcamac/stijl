
import _ from './lodash'

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

const propsToOmit = [
  'id', 'children', 'className',
  'href', 'src', 'contentEditable',
  'm', 'full', 'flat', 'prime',
]

export const getStyle = {
  getActions() {
    return _.pickBy((value, name) => /^on/.test(name), this.props)
  },
  getStyle() {
    return _.runFlow(
      this.props,
      _.assign(defaultStyle),
      _.omitBy((value, name) => /^on/.test(name)),
      _.omit(propsToOmit),
    )
  },
}
