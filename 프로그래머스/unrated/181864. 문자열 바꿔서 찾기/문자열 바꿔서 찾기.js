function solution(myString, pat) {
    return +[...myString].map((el) => el === 'A' ? 'B' : 'A').join('').includes(pat)
}