function solution(intStrs, k, s, l) {
    return intStrs.reduce((acc,cur) => {
        const num = +cur.substr(s,l)
        if(num > k) acc.push(num)
        return acc
    },[])
}