import { twoSum } from './index'

describe('Two Sums', () => {
  test('nums = [2,7,11,15], target = 9', () => {
    const result = twoSum([2, 7, 11, 15], 9)
    expect(result).toStrictEqual([0, 1])
  })
})
