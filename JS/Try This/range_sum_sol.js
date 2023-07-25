/**
 * 다음과 같은 정수 배열이 주어졌을 때 구간의 합을 구하는 rangeSum 함수를 작성하시오
 */
const assert = require("assert");

const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

// 명령형으로 짠 것!
const rangeSum = (start = 0, end = arr.length - 1) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += arr[i];
  }
  console.log(start, end, "=>", sum);
};

const rangeSum2 = (start = 0, end = arr.length - 1) => {
  arr.reduce((acc, a, i) => (i < start || i > end ? acc : acc + a), 0);
};

// 통과되면 아무것도 뜨지 않음!
assert.strictEqual(rangeSum(2, 5), 19);
