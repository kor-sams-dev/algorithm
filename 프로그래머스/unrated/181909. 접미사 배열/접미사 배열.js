function solution(my_string) {
    var answer = [];
    for(let i = 0; i < my_string.length; i++) {
        answer.push(my_string.slice(my_string.length-i-1,my_string.length))
    }
    return answer.sort();
}