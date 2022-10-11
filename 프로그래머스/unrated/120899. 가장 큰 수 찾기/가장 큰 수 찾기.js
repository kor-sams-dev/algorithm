function solution(array) {
    return array.reduce((a,b,index)=> {
        if(a[0] < b){
            a[0] = b
            a[1] = index
        }
        return a
    },[0,0])
}