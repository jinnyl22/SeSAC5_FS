/**
 * Array.reduce 함수를 고차함수로 만들기
 *
 * 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용
 */
// 유닛 테스트를 위해서 Node.js에서 사용할 수 있는 테스트 모듈
const assert = require("assert");

const reduce = (array, callback, initValue) => {
  let i = 0;
  let acc = initValue === undefined ? ((i += 1), array[0]) : initValue;
  //   let acc = initValue ?? ((i += 1), array[0]);
  console.log(acc);
  for (; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }

  return acc;
};

const r1 = [1, 2, 3].reduce((a, b) => a + b, 0); // 6
console.log("🚀  r1:", r1);

const r2 = reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
console.log("🦄  r2:", r2);

const r3 = reduce([1, 2, 3, 4], (a, b) => a + b, 2); // 12면 통과!
console.log("🦄  r3:", r3);

assert.strictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
  15
); // 15면 통과!
