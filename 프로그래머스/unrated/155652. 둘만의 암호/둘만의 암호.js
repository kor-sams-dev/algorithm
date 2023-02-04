function solution(s, skip, index) {
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("").filter((alphabet) => !skip.includes(alphabet));
    
    return s.split('').reduce((acc,cur)=>{
        const alphabetIndex = (alphabetArray.indexOf(cur) + index) % alphabetArray.length
        
        return acc + alphabetArray[alphabetIndex]
    }, '')
}