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

export { removeDuplicates }
