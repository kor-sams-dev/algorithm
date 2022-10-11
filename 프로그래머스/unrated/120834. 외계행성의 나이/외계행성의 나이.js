function solution(age) {
    return String(age).split('').reduce((a,b)=> a+ String.fromCharCode(parseInt(b)+97),'')
}