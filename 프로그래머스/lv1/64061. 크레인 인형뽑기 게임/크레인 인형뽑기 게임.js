function solution(board, moves) {
    const tempArr = board.reduce((a,b)=>{
        for(let i = 0; i < b.length; i++){
            if(b[i] !== 0){
                if(a[i]){
                    a[i].unshift(b[i])
                } else {
                    a[i] = [b[i]]
                }
            }
        }
        return a
    },[])
    
    const outputArr = []
    
    return moves.reduce((a,b)=>{
        const targetNum = tempArr[b-1].pop()
        if(targetNum){
            if(outputArr[outputArr.length-1] === targetNum){
                outputArr.pop()
                a+=2    
            } else {
                outputArr.push(targetNum)
            }
        }
        return a
    },0)
    
    return answer;
}