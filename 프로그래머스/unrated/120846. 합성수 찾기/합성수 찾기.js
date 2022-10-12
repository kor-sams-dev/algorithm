function solution(n) {
    if(n <= 3) return 0
    let result = ~~(n / 2 - 1)
    for(let i = 9; i <= n; i += 2){
        for(k = 2; k <= Math.sqrt(i); k++){
            if(i % k === 0) {
                result++
                break
            }
        }
    }
    return result
    
}