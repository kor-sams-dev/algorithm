function solution(cipher, code) {
    let result = ''
    for(let i = code; i <= cipher.length; i += code){
        result += cipher[i-1]
    }
    return result
}