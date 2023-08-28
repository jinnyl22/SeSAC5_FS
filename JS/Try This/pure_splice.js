/**
 * splice 함수를 순수함수로 구현하시오
 */

const arr = [1, 2, 3, 4, 5];

const pureSplice = (arr, idx, cnt, ...args) => {
  const arr1 = arr.slice(0, idx);
  const arr2 = cnt !== undefined ? arr.slice(idx + cnt) : arr.slice(arr.length);

  return [...arr1, ...args, ...arr2];
};

// 인덱스 1부터 3개의 요소를 제거
const a1 = pureSplice(arr, 1, 3); // a1 = [1, 5]
console.log("🦄  a1:", a1);
// 인덱스 1부터 0개의 요소를 제거하고 그 자리에 2, 3, 4 요소 추가
const a2 = pureSplice(a1, 1, 0, 2, 3, 4); // a2 = [1, 2, 3, 4, 5]
console.log("🦄  a2:", a2);
const a3 = pureSplice(a2, 2); // a3 = [1, 2]
console.log("🦄  a3:", a3);
const a4 = pureSplice(a3, 1, 1, 3, 4, 5); // a4 = [1, 3, 4, 5]
console.log("🦄  a4:", a4);
const a5 = pureSplice(a4, 2, 2, 7, 8, 9); // a5 = [1, 3, 7, 8, 9]
console.log("🦄  a5:", a5);
const a6 = pureSplice(a5, 2, 2, 10); // a5 = [1, 3, 10, 9]
console.log("🦄  a5:", a6);

console.log("원본배열 >>", arr);
