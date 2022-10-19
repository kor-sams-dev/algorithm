function solution(numlist, n) {
    return numlist.sort((a,b) => {
        if(Math.abs(n - a) > Math.abs(n - b)){
            return 1
        } else if(Math.abs(n - a) === Math.abs(n - b) && a < b){
            return 1
        }
        return -1
    })
}