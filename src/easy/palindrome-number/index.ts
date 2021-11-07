/** My solution
 * @speed 208 ms
 * @memory 48 MB
 */
export function isPalindrome(x: number): boolean {
  return Number(x.toString().split('').reverse().join('')) === x
}

/** Not sure
 */
export function isPalindromeWithoutStringConversion(x: number): boolean {
  return true
}
