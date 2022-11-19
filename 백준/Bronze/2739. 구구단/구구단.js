const fs = require('fs');
const input = parseInt(fs.readFileSync("./dev/stdin").toString())

let answer = []
for(let i = 1; i <= 9; i++){
    answer.push(`${input} * ${i} = ${input * i}`)
}

console.log(answer.join('\n'))