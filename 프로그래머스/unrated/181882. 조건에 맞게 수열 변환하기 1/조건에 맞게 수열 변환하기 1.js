function solution(arr) {
    return arr.map((el)=> el >= 50 && el % 2 === 0 ? el / 2 : el < 50 && el % 2 === 1 ? el * 2 : el)
}