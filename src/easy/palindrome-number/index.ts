/** My solution
 * @speed 208 ms
 * @memory 48 MB
 */
const isPalindrome = (x: number): boolean => {
  return Number(x.toString().split('').reverse().join('')) === x
}

export { isPalindrome }
