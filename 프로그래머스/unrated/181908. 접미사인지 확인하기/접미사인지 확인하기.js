function solution(my_string, is_suffix) {
    return +(my_string.substring(my_string.length - is_suffix.length) === is_suffix)
}