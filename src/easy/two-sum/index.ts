/**
 * My solution
 * @speed 3114ms
 */
export function twoSum(nums: number[], target: number): number[] {
  const resultMap: Record<number, number[]> = {}
  let firstIndex = 0
  let isFinished = false
  while (firstIndex < nums.length && !isFinished) {
    for (let iterator = 0; iterator < nums.length; iterator++) {
      if (iterator === firstIndex) continue
      const sum = nums[firstIndex] + nums[iterator]
      resultMap[sum] = [firstIndex, iterator]
      if (sum === target) {
        isFinished = true
        break
      }
    }
    firstIndex++
  }
  return resultMap[target]
}

/**
 * Found solution. Comments assume input is `fastTwoSum([2,5,5,11], 10)`
 * @speed 80ms
 */
export function fastTwoSum(nums: number[], target: number): number[] {
  const dict: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    // if the map has the value at the current index, then it means the pair has been found
    if (dict.has(nums[i])) {
      // get the value ( index ) at 5, and return it, and the current index: [1, 2]
      return [dict.get(nums[i])!, i]
    }

    // Setting the insverse of the target. 10 - 5 = 5, so 5 is set as the key, with the current index as the value.
    // 5 is set because if the loop finds another 5, it means the result is found ( 10 )
    dict.set(target - nums[i], i)
  }

  return []
}
