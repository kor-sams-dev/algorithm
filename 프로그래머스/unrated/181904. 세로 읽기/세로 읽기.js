function solution(my_string, m, c) {
    let index = 0;
    let result = ''
    while((m * index + c) <= my_string.length){
        result += my_string[m * index + c - 1]
        index++
    }
    return result
}