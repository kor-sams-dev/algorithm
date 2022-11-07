function solution(numbers, hand) {
    const isLeft = hand === 'left'
    let leftMove = false;
    
    return numbers.reduce((a,b)=>{
        if(b === 0) b = 11
        
        if(b % 3 === 1){
            leftMove = true
        } else if (b % 3 === 0){
            leftMove = false
        } else {
            const leftMoveCount = (a.left % 3 === 1 ? 1 : 0) + Math.abs( ((a.left % 3 === 1 ? 1 : 0) + a.left) - b ) / 3
            const rightMoveCount = (a.right % 3 === 0 ? 1 : 0) + Math.abs( ((a.right % 3 === 0 ? -1 : 0) + a.right) - b ) / 3
            if(leftMoveCount < rightMoveCount) {
                leftMove = true
            } else if (leftMoveCount > rightMoveCount){
                leftMove = false
            } else {
                leftMove = isLeft
            }
        }
        
        if(leftMove){
            a.result = a.result + 'L'   
            a.left = b
        } else {
            a.result = a.result + 'R'   
            a.right = b
        }
        return a
    }, {left:10,right:12,result:''}).result
}
