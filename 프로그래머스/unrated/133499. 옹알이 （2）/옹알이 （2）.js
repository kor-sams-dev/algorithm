function solution(babbling) {
    return babbling.reduce((acc, cur) => {
        const temp = cur.replace(/aya/g, '1')
            .replace(/ye/g, '2')
            .replace(/woo/g, '3')
            .replace(/ma/g, '4')
        if(isNaN(+temp)) return acc
        
        for(let i = 0; i < temp.length; i++){
            if(temp[i] === temp[i+1]) return acc
        }
        
        return ++acc
    },0)
}