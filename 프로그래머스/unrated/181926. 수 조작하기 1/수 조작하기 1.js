const role = {
    w: 1,
    s: -1,
    d: 10,
    a: -10
}

function solution(n, control) {
    return control.split('').reduce((acc,cur) => acc + role[cur], n)
}