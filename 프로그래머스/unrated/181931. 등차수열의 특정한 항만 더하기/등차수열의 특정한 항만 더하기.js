function solution(a, d, included) {
    return included.reduce((acc, cur, idx) => !cur ? acc : acc + a + (d * idx) ,0)
}