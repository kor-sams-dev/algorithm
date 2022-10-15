function solution(array, n) {
    return array.reduce((a,b)=> {
        if(Math.abs(a-n) > Math.abs(b-n)){
            return b
        } else if(Math.abs(a-n) === Math.abs(b-n) && a > b){
            return b
        }
        return a
    },0)
}