function solution(k, score) {
    const result = [score[0]]
    const hallOfFame = [score[0]]
    for(let i = 1; i < score.length; i++){
        hallOfFame.push(score[i])
        hallOfFame.sort((a,b)=>b-a)
        
        if(hallOfFame.length > k) hallOfFame.pop()
        
        result.push(hallOfFame[hallOfFame.length-1])
    }
    
    return result
}