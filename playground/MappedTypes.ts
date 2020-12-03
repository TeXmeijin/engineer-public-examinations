type Original = {
  hoge: string,
  fuga: 'fuga',
  foo: 1111,
}

type PartialOriginal = Partial<Original>

const part1: PartialOriginal = {
  hoge: 'hogehogehoge',
}
console.log(part1)

type PartialOriginal2 = {
  [k in keyof Original]?: Original[k]
}
const part2: PartialOriginal2 = {
  fuga: 'fuga'
}
console.log(part2)
