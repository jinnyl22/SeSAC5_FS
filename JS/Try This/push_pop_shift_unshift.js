/**
 * push, pop, shift, unshift 순수함수로 작성
 * 모두 원본 배열을 변경하는 메서드임!
 */

const initArr = [1, 2, 3];

// Array.prototype.push
// 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 Length 프로퍼티 값을 반환

const myPush = (arr, ...appendVal) => {
  let pushArr = [...arr, ...appendVal];
  console.log("push >>>", pushArr);
  return pushArr.length;
};

// Array.prototype.pop
// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환
// 원본 배열이 빈배열이면 undefined를 반환
const myPop = (arr) => {
  let popArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    popArr = [...popArr, arr[i]];
  }
  console.log("popArr >>>", popArr);
  return arr.length === 0 ? undefined : arr[arr.length - 1];
};

// Array.prototype.unshift
// 인수로 전달 받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 Length 프로퍼티 값을 반환
const myUnshift = (arr, ...appendVal) => {
  let unshiftArr = [...appendVal, ...arr];
  console.log("unshiftArr >>>", unshiftArr);
  return unshiftArr.length;
};

// Array.prototype.shift
// 원본 배열에서 첫번째 요소를 제거하고 제거한 요소를 반환한다.
// 원본 배열이 빈배열이면 undefined를 반환
const myShift = (arr) => {
  let shiftArr = [];
  for (let i = 1; i < arr.length; i++) {
    shiftArr = [...shiftArr, arr[i]];
  }
  console.log("shiftArr >>>", shiftArr);
  return arr.length === 0 ? undefined : arr[0];
};

let res1 = myPush(initArr, 4, 5); // 5
console.log("🦄  res1:", res1);

let res2 = myPop(initArr); // 3
console.log("🦄  res2:", res2);

let res3 = myPop([]); // undefined
console.log("🦄  res3:", res3);

let res4 = myUnshift(initArr, 4, 5);
console.log("🦄  res4:", res4);

let res5 = myShift(initArr);
console.log("🦄  res5:", res5);

let res6 = myShift([]); // undefined
console.log("🦄  res6:", res6);

console.log("init >>>", initArr); // 원본 배열을 해치지 않게!!
