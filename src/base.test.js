
import {it as test} from 'mocha'
import assert from 'assert'

import {componentHash} from './base'

test('componentHash', () => {
  assert.ok(componentHash.H0)
  assert.ok(componentHash.h1)
  assert.ok(componentHash.p)
  assert.ok(componentHash.table)
  assert.ok(componentHash.Window)
})
