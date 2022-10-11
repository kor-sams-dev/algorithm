function solution(n) {
    if(n === 1) return 1
    
    let lastNumber = 0
    let result = 0
    for(let i = 1; i <= n; i++ ){
        if(n % i === 0){
            if(lastNumber === n / i) {
                console.log(result)
                result *= 2
                break;
            } else if(i === n / i){
                result = result * 2 + 1
                break
            }
            lastNumber = i
            result++
        }
    }
    return result
}
