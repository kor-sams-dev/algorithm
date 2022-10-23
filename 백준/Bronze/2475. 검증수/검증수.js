const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split(' ').reduce((a,b)=>a+(parseInt(b) ** 2),0)%10
console.log(input)