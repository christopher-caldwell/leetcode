import { removeDuplicates } from './index'

describe('Remove Duplicates from Sorted Array', () => {
  test('[1,1,2]', () => {
    const result = removeDuplicates([1,1,2])
    expect(result).toBe(2)
  })
  test('[0,0,1,1,1,2,2,3,3,4]', () => {
    const result = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
    expect(result).toBe(5)
  })
})