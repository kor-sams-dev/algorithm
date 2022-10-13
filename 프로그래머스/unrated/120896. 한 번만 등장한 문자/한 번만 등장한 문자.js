function solution(s) {
    return s.split('').reduce((a,b)=>{
        if(a.exception.includes(b)) return a
        
        if(a.answer.includes(b)){
            a.exception.push(b)
            a.answer.splice(a.answer.indexOf(b), 1)
        } else {
            a.answer.push(b)
        }
        return a
    },{answer:[], exception:[]}).answer.sort().join('')
}