function solution(a, b) {
    let result = b
    for(let i = (a > b ? a : b); i > 1; i--){
        if(a % i === 0 && b % i === 0){
            result /= i
            break;
        }
    }
    
    while(result > 1){
        if(result % 2 === 0){
            result /= 2
        } else if (result % 5 === 0){
            result /= 5
        } else {
            break
        }
    }
    
    return result === 1 ? 1 : 2
}