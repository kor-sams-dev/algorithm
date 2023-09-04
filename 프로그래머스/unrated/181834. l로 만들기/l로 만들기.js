function solution(myString) {
    return [...myString].reduce((a,b)=> a + (b.charAt() < 'l'.charAt() ? 'l' : b ),'')
}