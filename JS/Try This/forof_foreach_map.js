/**
 * 주어진 정수 배열에서 각 요소를
 * 제곱한 값들과 제곱근 값들을
 * 반환하는 함수를 for-of, forEach, map을 사용하여 각각 작성하시오.
 */

const arr = [1, 4, 9];

const calc1 = (el) => el ** 2;
const calc2 = (el) => Math.sqrt(el);
const calcArr = [calc1, calc2];

const powSqrtByForOf = (arr) => {
  let arr1 = [];
  let arr2 = [];
  for (const n of arr) {
    arr1 = [...arr1, n ** 2];
    arr2 = [...arr2, Math.sqrt(n)];
  }

  return [arr1, arr2];
};

const powSqrtByForEach = (arr) => {
  let arr1 = [];
  let arr2 = [];
  arr.forEach((el) => arr1.push(el ** 2));
  arr.forEach((el) => arr2.push(Math.sqrt(el)));
  return [arr1, arr2];
};

const powSqrtByMap1 = calcArr.map((el) => arr.map(el));
const powSqrtByMap2 = (arr) => calcArr.map((el) => arr.map(el));

console.log(powSqrtByForOf(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByForEach(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByMap1); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByMap2(arr)); // [[1, 16, 81], [1, 2, 3]]
