
import {it as test} from 'mocha'
import assert from 'assert'

import * as stijl from './index'

test('stijl.withTheme', () => {
  assert.ok(stijl.withTheme)
})
test('stijl.WithTheme', () => {
  assert.ok(stijl.WithTheme)
})
