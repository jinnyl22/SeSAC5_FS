/**
 * unary함수는 고차함수에서 매개변수(인수)의 개수를 1개로 제한하여 실행하는 것!
 */
const arr = ["1", "2", "3"];

const i0 = arr.map(parseInt); // [ 1, NaN, NaN ]
const ii = arr.map((a) => parseInt(a));
const ii2 = arr.map((arg) => parseInt(arg));

console.log("🚀  i0:", i0);
console.log("🚀  ii:", ii);
console.log("🚀  ii2:", ii2);

const fx = (x, y, z) => console.log("fx>>", x, y, z);
arr.map((el, index, arr2) => fx(el, index, arr2));
arr.map(fx);

// 여기서 length는 함수객체의 속성으로 데이터 프로퍼티
// parseInt의 length는 2이다! (arg) => fn(arg) 여기가 실행된다
const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));
const ii3 = arr.map(unary(parseInt)); // [1, 2, 3]
// const ii3 = arr.map((arg)=>parseInt(arg)) 풀어서 쓰면 이렇게 실행이 되는 것!
console.log("🚀  ii3:", ii3);

const fxy = (x, y) => x + y;
console.log("fxy1>>", arr.map(fxy));
console.log("fxy1>>", arr.map(fxy));
const fitArgs =
  (fn) =>
  (...args) =>
    fn([...args].slice(0, fn.length));
