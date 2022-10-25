function solution(n) {
    let result = 0;
    let point = 1
    while(n > 0){
        if(n % point === 0) result++
        
        n -= point++
    }
    
    return result
}