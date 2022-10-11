function solution(box, n) {
    return box.reduce((a,b) => a * ~~(b/n),1)
    return parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n)
}