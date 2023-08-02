function solution(str_list, ex) {
    return str_list.reduce((a,b) => b.includes(ex) ? a : a + b ,'')
}