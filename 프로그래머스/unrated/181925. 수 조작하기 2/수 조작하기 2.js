function solution(numLog) {
    return numLog.reduce((acc, cur, idx) => {
        if(idx === 0) return acc
        
        const temp = numLog[idx] - numLog[idx-1]
        if(temp === 1) {
            acc += 'w'
        }else if(temp === -1) {
            acc += 's'
        }else if(temp === 10) {
            acc += 'd'
        }else if(temp === -10) {
            acc += 'a'
        }
        
        return acc
    },'')
}