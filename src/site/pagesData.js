
import _ from 'lodash/fp'

const context = require.context('../pages', true, /\.js$/)
export const pagesData = _.pipe(
  _.map(
    key => ({
      ...context(key),
      path: _.last((/\.\/(.+)\.js$/ig).exec('./test.js')),
    }),
  ),
  _.sortBy('date'),
  _.reverse,
)(context.keys())
