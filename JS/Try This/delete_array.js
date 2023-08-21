/**
 * 다음과 같은 deleteArray와 deleteObjectArray를 순수함수로 구현하시오
 */

const arr = [1, 2, 3, 4];
const user = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

const deleteArray = (arr, start, end = arr.length - 1) => {
  let arr1 = [...arr];
  arr1.splice(start, end - 1);
  return arr1;
};

// const deleteObjectArray = (arr, ...args)=>{
//     const {}
// }

// 2번 인덱스부터 삭제
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 3)); // [1, 2, 3]
// 1번 인덱스부터 3-1번까지(1,2번 인덱스) 삭제
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(deleteArray(arr, 1, 4)); // [1]
// deleteObjectArray(users, 2); // Hong, Kim
// deleteObjectArray(users, "id", 2); // Hong, Lee
// deleteObjectArray(users, "name", "Lee"); // Hong, Kim
console.log("원본배열 >>>", arr);
