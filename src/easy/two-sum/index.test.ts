import { twoSum } from './index'

describe('Two Sums', () => {
  test('nums = [2,7,11,15], target = 9', () => {
    const result = twoSum([2, 7, 11, 15], 9)
    console.log('result', result)
    expect(result).toStrictEqual([0, 1])
  })
  test('nums = [3,2,4], target = 6', () => {
    const result = twoSum([3, 2, 4], 6)
    expect(result).toStrictEqual([1, 2])
  })
  test('nums = [3,3], target = 6', () => {
    const result = twoSum([3, 3], 6)
    expect(result).toStrictEqual([0, 1])
  })
  test('nums = [2,5,5,11], target = 10', () => {
    const result = twoSum([2, 5, 5, 11], 10)
    expect(result).toStrictEqual([1, 2])
  })
})
