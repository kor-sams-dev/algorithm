function solution(str1, str2) {
    return [...str1].reduce((acc, cur, idx) => acc += str1[idx] + str2[idx] ,'')
}