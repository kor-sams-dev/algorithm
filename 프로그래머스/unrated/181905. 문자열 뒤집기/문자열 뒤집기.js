function solution(my_string, s, e) {
    const arrString = my_string.split('')
    return arrString.slice(0, s).join('') 
        + arrString.slice(s,e+1).reverse().join('') 
        + arrString.slice(e+1).join('')
}