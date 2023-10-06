import { assert } from 'chai'
import { add } from '../src/calc/calc'

describe('Calc tests', () => {
  it('should add some numbers', () => {
    const result = add(2, 3)
    assert.equal(result, 5)
  })
})
