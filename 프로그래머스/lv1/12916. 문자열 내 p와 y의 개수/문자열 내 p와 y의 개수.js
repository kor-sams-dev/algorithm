function solution(s){
    return s.replace(/p|P/g,'').length === s.replace(/y|Y/g,'').length
}