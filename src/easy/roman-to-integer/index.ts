const symbols: [RegExp, number][] = [
  [new RegExp(/IV/), 4],
  [new RegExp(/IX/), 9],
  [new RegExp(/XL/), 40],
  [new RegExp(/XC/), 90],
  [new RegExp(/CD/), 400],
  [new RegExp(/CM/), 900],
  [new RegExp(/I/), 1],
  [new RegExp(/V/), 5],
  [new RegExp(/X/), 10],
  [new RegExp(/L/), 50],
  [new RegExp(/C/), 100],
  [new RegExp(/D/), 500],
  [new RegExp(/M/), 1000],
]

/** My solution
 * @speed 215 ms
 * @memory 45 MB
 */
const romanToInt = (s: string): number => {
  let total = 0
  while (s.length) {
    for (const symbolTuple of symbols) {
      if (!s.length) break
      if (symbolTuple[0].test(s)) {
        total += symbolTuple[1]
        s = s.replace(symbolTuple[0], '')
      }
    }
  }
  return total
}

export { romanToInt }
