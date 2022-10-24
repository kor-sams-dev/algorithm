function solution(s) {
    let result = [0, 0]
    while(s !== '1'){
        result[0] += 1
        const changeString = s.replace(/0/g, '')
        result[1] += s.length - changeString.length
        
        s = changeString.length.toString(2)
    }
    
    return result
}