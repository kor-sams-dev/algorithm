const nowDate = new Date()

const year = nowDate.getFullYear();
const month = nowDate.getMonth() + 1
const day = nowDate.getDate()

console.log([year, month, day].join('-'))