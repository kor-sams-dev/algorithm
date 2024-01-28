function solution(my_string) {
    const result = new Array(52).fill(0);
    
    my_string.split('').forEach(el => {
        const charCode = el.charCodeAt()
        
        const index = charCode > 90 ? charCode - 71 : charCode - 65
        result[index]++
    })
    
    return result
}