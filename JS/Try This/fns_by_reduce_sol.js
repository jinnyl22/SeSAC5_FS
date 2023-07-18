/*
 → 배열의 각 요소를 제곱   n => n ** 2
 → 배열 각 요소의 제곱근   n => Math.sqrt(n)
 → 배열의 각 요소를 세제곱  n => n ** 3
 ==>  [ 1, 8, 27, 64, 125 ]
*/

const arr = [1, 2, 3, 4, 5];
// const res = arr
//   .map((a) => a ** 2)
//   .map((a) => Math.sqrt(a))
//   .map((a) => a ** 3);
// console.log(res);

const f1 = (n) => n ** 2;
const f2 = (n) => Math.sqrt(n);
const f3 = (n) => n ** 3;

const fns = { f1, f2, f3 };
const inputs = ["f1", "f2", "f3"];

const results = arr.map(f1).map(f2).map(f3);
console.log("🚀 results: ", results);

const results2 = inputs.map((fname) => fns[fname]).reduce((acc, f) => acc.map(f), arr);
console.log("🚀 results2: ", results2);

const results3 = [f1, f2, f3].reduce((acc, f) => acc.map(f), arr);
/*                acc                  f
              1)  [1,2,..]            f1   [f1(1), f1(2), ...]
              2)  [f1(1), f1(2), ...] f2   [f2(f1(1)),  ]
*/
console.log("🚀 results3: ", results3);
