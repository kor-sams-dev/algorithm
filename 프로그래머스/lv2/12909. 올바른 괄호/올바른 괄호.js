function solution(s){
    let bracketCount = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(') {
            bracketCount++
        } else {
            bracketCount--
        }
        
        if(bracketCount < 0) return false
    }
    return bracketCount === 0
}