/**
 * 다음과 같은 push, pop, shift, unshift를 순수 함수로 작성하시오
 * (단, 입력값은 다음 예시로 한정함)
 *
 * splice는 비순수 함수, slice는 순수함수!
 */
const myArray = [1, 2, 3, 4];

const push = (arr, ...appendValues) => [...arr, ...appendValues];
const pop1 = (arr, cnt = 1) => arr.slice(arr.length - cnt);

// except built-in functions slice 안쓰고!
const pop = (arr, cnt = 1) => {
  let rets = [];
  for (let i = 0; i < cnt; i += 1) {
    rets = [...rets, arr[arr.length - (i + 1)]];
  }
  return rets?.length === 1 ? rets[0] : rets;
};
// -------------------------------------------------

const unshift = (arr, ...appendValues) => [...appendValues, ...arr];
const shift = (arr, cnt = 1) => {
  arr.slice(cnt);
};

console.log(push(myArray, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(pop(myArray)); // [1, 2, 3]
console.log(pop(myArray, 2)); // 2개 팝! ⇒ [1, 2]
console.log(unshift(myArray, 0)); // [0, 1, 2, 3, 4]
console.log(unshift(myArray, 7, 8)); // [7, 8, 1, 2, 3, 4]
console.log(shift(myArray)); // [2, 3, 4]
console.log(shift(myArray, 2)); // [3, 4]

console.log(myArray); // [1, 2, 3, 4]
