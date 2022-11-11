function solution(n, m) {
    var answer = [];
    
    let minValue = n > m ? m : n
    
    while(minValue !== 0){
        
        if(n % minValue === 0 && m % minValue === 0) {
            
            answer.push(minValue)
            break;
        };
        minValue--
    }
    
    for(let i = n > m ? n : m; i <= n * m; i++){
        if(i % n === 0 && i % m === 0){
            answer.push(i)
            break;
        }
    }
    
    return answer;
}