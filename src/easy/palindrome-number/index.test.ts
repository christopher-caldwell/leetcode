import { isPalindrome } from './index'

describe('Palindrome Number', () => {
  test('121', () => {
    const result = isPalindrome(121)
    expect(result).toBe(true)
  })
  test('6996', () => {
    const result = isPalindrome(6996)
    expect(result).toBe(true)
  })
  test('-121', () => {
    const result = isPalindrome(-121)
    expect(result).toBe(false)
  })
  test('10', () => {
    const result = isPalindrome(10)
    expect(result).toBe(false)
  })
  test('-101', () => {
    const result = isPalindrome(-101)
    expect(result).toBe(false)
  })
})
