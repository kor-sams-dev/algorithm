function solution(number) {
    let answer = 0
    let compareNumber = 0
    
    number.sort((a,b)=> a-b)
    
    for(let i = 0; i < number.length - 2; i++){
        if(number[i] > 0) break;
        for(let k = i+1; k < number.length - 1; k++){
            if(number[i] + number[k] > 0) break;
            for(let z = k+1; z < number.length; z++){
                if(number[i] + number[k] + number[z] > 0) break;
                if(number[i] + number[k] + number[z] === 0) {
                    answer++
                }
            }
        }
    }
    
    return answer
}