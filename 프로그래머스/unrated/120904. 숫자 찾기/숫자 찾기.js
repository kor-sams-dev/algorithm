function solution(num, k) {
    const result = String(num).indexOf(String(k))
    
    return result < 0 ? -1 : result + 1
}