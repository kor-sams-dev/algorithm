function solution(s) {
    return s.split('').reduce((acc, cur, index)=> {
        acc.result.push(acc.word[cur] === undefined ? -1 : index - acc.word[cur])
        acc.word[cur] = index
        return acc
    }, {result:[], word:{}}).result
} 