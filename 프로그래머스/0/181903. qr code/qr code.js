function solution(q, r, code) {
    return code.split('').reduce((acc,cur,idx) => idx % q === r ? acc + cur : acc ,'')
}