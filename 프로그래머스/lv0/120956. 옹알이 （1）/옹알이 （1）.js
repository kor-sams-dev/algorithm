function solution(babbling) {
    return babbling.reduce((a,b)=> {
        if(b.replace(/aya|ye|woo|ma/g, '') === '')a++
        return a
    },0)
}