function solution(n) {
    const nBinaryString = n.toString(2)
    const nCount = nBinaryString.match(/1/g).length
    
    let i = n + 1
    while(1){
        if(i.toString(2).match(/1/g).length === nCount) break
        
        i++
    }
    
    return i
}