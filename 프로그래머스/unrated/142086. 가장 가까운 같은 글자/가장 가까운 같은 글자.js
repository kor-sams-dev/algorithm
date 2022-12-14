function solution(s) {
    // return s.split('').reduce((acc, cur, index)=> {
    //     acc.result.push(acc.word[cur] ? index - acc.word[cur] : -1)
    //     acc.word[cur] = index
    //     return acc
    // }, {result:[], word:{}}).result
    const result = []
    for(let i = 0; i < s.length; i++){
        let leng = -1;
        
        for(let k = i-1; k >= 0; k--){
            if(s[i] === s[k]){
                leng = i - k
                break;
            }
        }
        result.push(leng)
    }
    
    return result
} 