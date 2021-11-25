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
  nums.splice(position, nums.length - 1)

  return nums.length
}

export { removeDuplicates }
