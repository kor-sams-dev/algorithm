function solution(n) {
    const sqrtN = Math.floor(Math.sqrt(n))
    
    if(sqrtN * sqrtN === n) {
        return (sqrtN + 1) * (sqrtN + 1)
    } else {
        return -1    
    }
    return answer;
}