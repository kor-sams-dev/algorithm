function solution(A, B) {
    const index = (A + A).indexOf(B)
    return index === -1 ? -1 : (A.length - index) % A.length
}