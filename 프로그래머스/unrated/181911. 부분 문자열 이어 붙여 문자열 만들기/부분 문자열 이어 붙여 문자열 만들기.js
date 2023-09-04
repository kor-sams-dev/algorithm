function solution(my_strings, parts) {
    return my_strings.reduce((a,b,i) => a + b.substring(parts[i][0],parts[i][1]+1) ,'')
}