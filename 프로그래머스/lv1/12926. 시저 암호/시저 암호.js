function solution(s, n) {
  return s
    .split('')
    .map((el) => {
      if (el === ' ') return el;
      const maxCharCode = el.charCodeAt() <= 90 ? 90 : 122;
      const minCharCode = el.charCodeAt() <= 90 ? 64 : 96;

      return String.fromCharCode(
        el.charCodeAt() + n > maxCharCode
          ? ((el.charCodeAt() + n) % maxCharCode) + minCharCode
          : el.charCodeAt() + n
      );
    })
    .join('');
}