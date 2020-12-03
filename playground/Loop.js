const ary = [1,2,3,4,5,6,7]

const output1 = []
for (let i = 0; i < ary.length; i++) {
  output1.push(ary[i] + '番です')
}

console.log({output1})

const output2 = ary.map(el => `${el}番です`)
console.log({output2})
