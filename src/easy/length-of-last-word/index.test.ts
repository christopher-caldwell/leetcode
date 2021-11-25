import { lengthOfLastWord } from './index'

describe('Length of Last Word', () => {
  test('"Hello World"', () => {
    const result = lengthOfLastWord('Hello World')
    expect(result).toBe(5)
  })
  test('"   fly me   to   the moon  "', () => {
    const result = lengthOfLastWord('   fly me   to   the moon  ')
    expect(result).toBe(4)
  })
  test('"luffy is still joyboy"', () => {
    const result = lengthOfLastWord('luffy is still joyboy')
    expect(result).toBe(6)
  })
})
