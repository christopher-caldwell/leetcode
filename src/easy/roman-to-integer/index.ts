const symbolMap: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const irregularSymbols: [string, number][] = [
  ['IV', 4],
  ['IX', 9],
  ['XL', 40],
  ['XC', 90],
  ['CD', 400],
  ['CM', 900],
]

const romanToInt = (s: string): number => {
  let total = 0
  irregularSymbols.forEach(([symbol, value]) => {
    if (s.includes(symbol)) {
      total += value
      s = s.replace(symbol, '')
    }
  })
  s.split('').forEach(character => {
    total += symbolMap[character] || 0
  })
  return total
}

export { romanToInt }
