
import convert from 'lodash/fp/convert'
import lodash from 'lodash'
const _ = convert(lodash.runInContext(), {cap: false})

_.runFlow = (...arg) =>
  _.flow(_.slice(1, undefined, arg))(_.first(arg))

global._ = _
export default _
