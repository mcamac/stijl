
import {it as test} from 'mocha'
import assert from 'assert'

import React from 'react'
import shallowRender from '@luiscarli/shallow-render'

import {Window} from './'

test('Window', () => {
  const component = shallowRender(<Window/>)
  assert.deepEqual(component.type, 'div')
})
