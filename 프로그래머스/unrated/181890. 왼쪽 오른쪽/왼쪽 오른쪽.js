function solution(str_list) {
    const leftIndex = str_list.indexOf('l')
    const rightIndex = str_list.indexOf('r')
    
    if(leftIndex === -1 && rightIndex === -1) return []
    if(leftIndex === -1) return str_list.splice(rightIndex + 1)
    if(rightIndex === -1) return str_list.splice(0, leftIndex)
    if(leftIndex < rightIndex) return str_list.splice(0, leftIndex)
    return str_list.splice(rightIndex + 1)
}