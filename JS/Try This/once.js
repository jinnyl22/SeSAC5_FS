/**
 * 함수를 한번만 실행하게 하는 once 함수를 작성하시오
 */

const once = (fn) => {
  let isDone = false;
  return (...args) => (isDone ? undefined : ((isDone = true), fn(...args)));
};
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다`);

console.log(fn(1, 6));
console.log(fn(2, 7));
console.log(fn(3, 8));
