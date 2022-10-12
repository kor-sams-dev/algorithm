function solution(my_str, n) {
    var answer = [];
    
    for(let i = 0; i < my_str.length / n; i++){
        const startPoint = i * n
        answer.push(my_str.slice(startPoint, startPoint + n))
    }
    
    return answer;
}