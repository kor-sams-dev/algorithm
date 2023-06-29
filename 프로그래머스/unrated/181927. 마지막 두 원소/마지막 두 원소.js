function solution(num_list) {
    const seceondLastElement = num_list[num_list.length - 2]
    const lastElement = num_list[num_list.length - 1]
    
    num_list.push(seceondLastElement < lastElement ? lastElement - seceondLastElement : lastElement * 2)
    
    return num_list
}