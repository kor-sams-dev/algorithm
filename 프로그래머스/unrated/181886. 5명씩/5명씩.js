function solution(names) {
    return names.reduce((a,c,i) => i % 5 === 0 ? [...a,c] : a,[])
}