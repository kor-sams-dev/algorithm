function solution(M, N) {
    return M < N ? (M - 1) + (N - 1) * M : (N - 1) + (M - 1) * N
}