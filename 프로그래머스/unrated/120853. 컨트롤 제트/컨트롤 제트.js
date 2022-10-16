function solution(s) {
    const arr = s.split(' ')
    return arr.reduce((a,b)=> {
        if(b === 'Z'){
            if(a.targetNumbers.length === 0) return a
            a.result -= a.targetNumbers.pop()
        } else {
            a.result += +b
            a.targetNumbers.push(+b)
        }
        
        return a
    },{targetNumbers: [], result: 0}).result
}
