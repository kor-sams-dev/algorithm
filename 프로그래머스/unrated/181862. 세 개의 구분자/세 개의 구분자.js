function solution(myStr) {
    let convertString = myStr.replace(/[a-c]/g,' ')
    
    const result = convertString.split(' ').filter((el) => el)
    
    return result.length > 0 ? result : ["EMPTY"]
}