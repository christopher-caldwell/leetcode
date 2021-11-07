export function twoSum(nums: number[], target: number): number[] {
  let firstIndex = 0
  let secondIndex = 1
  let finished = false
  while (firstIndex < nums.length || !finished) {
    for (let iterator = secondIndex; iterator <= nums.length; iterator++) {
      if (nums[firstIndex] + nums[iterator] === target) {
        secondIndex = iterator
        finished = true
        break
      }
    }
    firstIndex++
  }
  return [firstIndex, secondIndex]
}
