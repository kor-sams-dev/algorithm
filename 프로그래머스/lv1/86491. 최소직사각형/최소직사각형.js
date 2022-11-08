function solution(sizes) {
    const maxSize = sizes.reduce((a,b)=> {
        let widthIndex = 0
        let heightIndex = 1 
        if(b[0] < b[1]){
            widthIndex = 1
            heightIndex = 0
        }
        if(a.width < b[widthIndex])  a.width = b[widthIndex]
        if(a.height < b[heightIndex])  a.height = b[heightIndex]
        return a
    },{width:0, height:0})
    return maxSize.width * maxSize.height;
}