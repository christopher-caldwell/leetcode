import { romanToInt } from './index'

describe('Roman Numeral to Int', () => {
  test('III', () => {
    const result = romanToInt('III')
    expect(result).toBe(3)
  })
  test('IV', () => {
    const result = romanToInt('IV')
    expect(result).toBe(4)
  })
  test('IX', () => {
    const result = romanToInt('IX')
    expect(result).toBe(9)
  })
  test('LVIII', () => {
    const result = romanToInt('LVIII')
    expect(result).toBe(58)
  })
  test('MCMXCIV', () => {
    const result = romanToInt('MCMXCIV')
    expect(result).toBe(1994)
  })
})
