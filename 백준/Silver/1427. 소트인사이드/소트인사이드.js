const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString()

console.log(String(input).split('').sort((a,b) => b-a).join(''))