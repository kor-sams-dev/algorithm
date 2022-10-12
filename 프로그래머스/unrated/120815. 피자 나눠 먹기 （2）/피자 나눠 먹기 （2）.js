function solution(n) {
    const temp = (n % 2 === 0 ? n / 2 : n) 
    return temp % 3 === 0 ? temp / 3 : temp
}