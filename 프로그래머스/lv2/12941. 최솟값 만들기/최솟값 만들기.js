function solution(A,B){ 
    A.sort((a,b)=>b-a)
    B.sort((a,b)=>b-a)
    const loopCount = A.length
    let result = 0
    
    for(let i = 0; i < loopCount; i++){
        if(A[0] === B[0]){
            if(A[A.length - 1] > B[B.length - 1]){
                result += A.shift() * B.pop()
            } else {
                result += A.pop() * B.shift()
            }
        } else if(A[0] > B[0]){
            result += A.pop() * B.shift()
        } else {
            result += A.shift() * B.pop()
        }
    }
    return result 
}