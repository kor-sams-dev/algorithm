function solution(s) {
    return s
        .substring(2, s.length-2)
        .split("},{")
        .sort((a,b) => a.length - b.length)
        .reduce((a,b)=>{
            const nextArr = b.split(',')
            for(let i = 0; i < nextArr.length; i++){
                if(!a.includes(parseInt(nextArr[i]))){
                    a.push(parseInt(nextArr[i]))
                    break;
                }
            }
            return a
        },[])
        //.map((a)=> parseInt(a[a.length-1]))
    
    return answer;
}