function solution(my_string) {
    return my_string.split('').reduce((a,b)=> {
        const stringCharCode = b.charCodeAt()
        if(65 <= stringCharCode && stringCharCode <= 90){
            a += b.toLowerCase()
        } else {
            a += b.toUpperCase()
        }
        return a
    },'')
}