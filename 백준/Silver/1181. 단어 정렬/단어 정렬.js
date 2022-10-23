const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.trim()); 
const N = +input.shift()

const answer = Array.from(new Set(input)).sort((a,b) => a.length - b.length || (a < b ? -1 : 1))
console.log(answer.join('\n'))