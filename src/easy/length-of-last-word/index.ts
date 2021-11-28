/**
 * @speed 114 ms, faster than 12.81%
 * @memory 40.2 MB, less than 79.72%
 */
const lengthOfLastWord = (s: string): number => {
  const words = s.trim().split(' ')
  return words[words.length - 1].length
}

export { lengthOfLastWord }
