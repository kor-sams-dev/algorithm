const fs = require('fs');
const [money, user] = fs.readFileSync("./dev/stdin").toString().trim().split(' ').map(BigInt)

console.log(money / user + '\n' + money % user)