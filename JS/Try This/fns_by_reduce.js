/*
다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여 각 요소를 다음의 순서로 처리하시오
 → 배열의 각 요소를 제곱   n => n ** 2
 → 배열 각 요소의 제곱근   n => Math.sqrt(n)
 → 배열의 각 요소를 세제곱  n => n ** 3
결과 ==>  [ 1, 8, 27, 64, 125 ]
*/
const arr = [1, 2, 3, 4, 5];

// map을 사용해서 풀면 이런 방식이 된다!
const calc = arr
  .map((el) => el ** 2)
  .map((el) => Math.sqrt(el))
  .map((el) => el ** 3);
// console.log(calc);

// 계산식을 함수로 만들어둔다
const calcFn1 = (el) => el ** 2;
const calcFn2 = (el) => Math.sqrt(el);
const calcFn3 = (el) => el ** 3;

// 함수를 배열에 넣어줌
const calcArr = [calcFn1, calcFn2, calcFn3];

// 초기값으로 arr을 줌!
// calcArr의 요소를 돌면서
// 1. arr을 순회하면서 map의 콜백함수 자리에 calcFn1을 넣어줌
// 2. calcFn1의 반환값이 acc에 들어오게 되고 다시 map의 콜백함수에 calcFn2
// 3. 마지막도 동일함..!
// 그래서 순서대로 제곱, 제곱근, 세제곱을 계산한 배열을 반환받는 것!
const useReduceFn = calcArr.reduce((acc, fn) => acc.map(fn), arr);

console.log(useReduceFn);
