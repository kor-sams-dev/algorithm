function solution(start, end) {
    return Array.apply(null, Array(start - end + 1)).map((_, idx) => start - idx);
}