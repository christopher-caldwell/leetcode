import { removeDuplicates } from './index'

describe('Remove Duplicates from Sorted Array', () => {
  test('[1,1,2]', () => {
    runTest({ input: [1, 1, 2], expectation: [1, 2] })
  })
  test('[0,0,1,1,1,2,2,3,3,4]', () => {
    runTest({ input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expectation: [0, 1, 2, 3, 4] })
  })
  test('[1,1,1,1]', () => {
    runTest({ input: [1, 1, 1, 1], expectation: [1] })
  })
})

interface TestInput {
  input: number[]
  expectation: number[]
}
const runTest = ({ input, expectation }: TestInput): void => {
  const result = removeDuplicates(input)
  expect(result).toBe(expectation.length)
  for (let i = 0; i < result; i++) {
    expect(input[i]).toBe(expectation[i])
  }
}
