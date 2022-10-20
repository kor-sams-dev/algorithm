function solution(board) {
    return board.reduce((acc, cur, index)=> {
        let result = 0
        for(let i = 0; i < cur.length; i++){
            if(board[index][i]===1)continue
            if(index > 0){
                if(i > 0 && board[index-1][i-1] === 1)continue
                if(board[index-1][i] === 1) continue
                if(i < cur.length - 1 && board[index-1][i+1] === 1) continue
            }
            
            if(i > 0 && board[index][i-1] === 1)continue
            if(i < cur.length - 1 && board[index][i+1] === 1) continue
            
            if(index < board.length - 1){
                if(i > 0 && board[index+1][i-1] === 1)continue
                if(board[index+1][i] === 1) continue
                if(i < cur.length + 1 && board[index+1][i+1] === 1) continue
            }
            console.log(index,i)
            result++
        }
        return acc + result
    },0)
}