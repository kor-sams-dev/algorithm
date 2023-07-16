function solution(arr) {
    return arr.reduce((acc,cur) => {
        acc.push(...Array(cur).fill(cur))
        return acc
    } ,[])
}