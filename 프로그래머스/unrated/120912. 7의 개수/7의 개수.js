function solution(array) {
    return array.reduce((a,b)=> {
        a += + String(b).split('').reduce((a,b)=>{
            if(b === '7') a++
            return a
        },0)
        return a
    },0)
}