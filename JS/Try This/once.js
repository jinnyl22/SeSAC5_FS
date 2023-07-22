/**
 * 함수를 한번만 실행하게 하는 once 함수를 작성하시오
 */

// 여기서 f는 (x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다`
const once = (f) => {
  let isDone = false;
  // ...args는 fn의 매개변수로 넣어준 숫자
  // ...args로 받은 이유는 확장성을 고려해서!
  //                                        쉼표 연산자는 좌항부터 연산후 마지막 연산을 반환
  return (...args) => (isDone ? undefined : ((isDone = true), f(...args)));
};

// fn에는 once의 return인 함수가 담김
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다`);

console.log(fn(1, 6)); // 여기만 실행 되게
console.log(fn(2, 7)); // undefined가 뜨게!
console.log(fn(3, 8)); // undefined가 뜨게!
