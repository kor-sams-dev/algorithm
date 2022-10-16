function solution(id_pw, db) {
    const id = db.filter((el) => el[0] === id_pw[0])
    if(id.length === 0) return 'fail'
    if(id[0][1] === id_pw[1]) return 'login'
    return 'wrong pw'
}