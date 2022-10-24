function solution(s) {
    let result = ''
    let isChangeUpperCase = true
    for(let i = 0; i < s.length; i++){
        if(isChangeUpperCase && s[i] !== ' '){
            result += s[i].toUpperCase()
            isChangeUpperCase = false
        } else {
            if(s[i] === ' ') isChangeUpperCase = true
            result += s[i].toLowerCase()
        }
    }
    return result
}