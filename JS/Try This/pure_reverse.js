/**
 * Array.reverse 함수를 비순수함수와 순수함수로 작성
 */

// 순수 함수
const pureAll = [1, 2, 3, 4, 5];

const makeReverseArray = (arr) => {
  let pureArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    pureArr = [...pureArr, arr[i]];
  }
  return pureArr;
};

console.log(makeReverseArray(pureAll)); // [5, 4, 3, 2, 1] 반환

const all = [1, 2, 3, 4, 5];
// 비순수 함수
const reverseArray = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  arr.splice(0, arr.length / 2);
  return arr;
};

reverseArray(all); // [5, 4, 3, 2, 1] 반환

console.log("pureAll >>>", pureAll); // all은 변함 없음!
console.log("all >>>", all); // all도 이 값으로 변경됨!
