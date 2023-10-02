function solution(board, k) {
    return board
        .reduce((acc, cur, ai) => acc + cur.reduce((acc, cur, bi) => ai + bi <= k ? acc + cur : acc ,0) ,0)
}