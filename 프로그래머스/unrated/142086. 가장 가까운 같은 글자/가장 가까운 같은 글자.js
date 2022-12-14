function solution(s) {
    // return s.split('').reduce((acc, cur, index)=> {
    //     acc.result.push(acc.word[cur] ? index - acc.word[cur] : -1)
    //     acc.word[cur] = index
    //     return acc
    // }, {result:[], word:{}}).result
    const result = []
    const obj = {}
    
    for(let i = 0; i < s.length; i++){
        let leng = obj[s[i]] === undefined ? -1 : i - obj[s[i]];
        obj[s[i]] = i
        result.push(leng)
    }
    
    return result
} 