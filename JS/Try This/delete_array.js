/**
 * 다음과 같은 deleteArray와 deleteObjectArray를 순수함수로 구현하시오
 */

const arr = [1, 2, 3, 4];
const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

const deleteArray = (arr, start, end = arr.length) => {
  const start1 = arr.slice(0, start);
  const end1 = arr.slice(end);

  return [...start1, ...end1];
};

const deleteObjectArray = (arr, ...args) => {
  const [k, v] = args;
  return arr.filter((el, i) => (v === undefined ? i !== k : el[k] !== v));
};

// 2번 인덱스부터 삭제
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 3)); // [1, 2, 3]
// 1번 인덱스부터 3-1번까지(1,2번 인덱스) 삭제
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(deleteArray(arr, 1, 4)); // [1]
console.log(deleteArray(arr, 0, 3)); // [4]

// 2번 인덱스 삭제
console.log(deleteObjectArray(users, 2)); // Hong, Kim
console.log(deleteObjectArray(users, "id", 2)); // Hong, Lee
console.log(deleteObjectArray(users, "name", "Lee")); // Hong, Kim
console.log("원본배열 >>", arr);
console.log("원본배열 >>", users);
