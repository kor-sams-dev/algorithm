var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

const convertString = input.replace(/XXXX/g,'AAAA').replace(/XX/g,'BB')

console.log(convertString.includes('X') ? -1 : convertString)