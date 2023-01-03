function solution(n) {
    let i = 0
    let result = 0
    while(i < n){
        result++
        if(String(result).includes('3') || result % 3 ===0) continue;
        
        i++
    }
    return result
}
