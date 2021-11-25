const removeDuplicates = (nums: number[]): number => {
  const uniquePositionMap: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    if (uniquePositionMap[nums[i]] === undefined) {
      uniquePositionMap[nums[i]] = i
    }
  }

  const entries = Object.entries(uniquePositionMap)
  for (let i = 0; i < entries.length; i++) {
    const [uniqueNum] = entries[i]
    nums[i] = Number(uniqueNum)
  }
  nums.splice(entries.length, nums.length - 1)
  return nums.length
}

export { removeDuplicates }
