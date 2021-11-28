/** My solution
 * @speed 155 ms, faster than 25.31%
 * @memory 41.3 MB, less than 86.98%
 */
const removeDuplicates = (nums: number[]): number => {
  let position = 0
  const uniquePositionMap: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    if (uniquePositionMap[nums[i]] === undefined) {
      uniquePositionMap[nums[i]] = i
      nums[position] = nums[i]
      position++
    }
  }
  return position
}

/** Memory efficient one, I had the basics of this, but couldn't finish it
 * @speed 145 ms, faster than 32.44%
 * @memory 41 MB, less than 98.55%
 */
const fastRemoveDuplicates = (nums: number[]): number => {
  let position = 1
  let latestNumber = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > latestNumber) {
      nums[position] = nums[i]
      position++
      latestNumber = nums[i]
    }
  }
  return position
}

export { removeDuplicates }
