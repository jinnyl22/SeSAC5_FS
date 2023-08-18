/**
 * 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때
 * 배열에서 합해서 N이 되는 두개의 요소(index)를 찾는 keyPair(arr, N) 함수를 작성하시오
 *
 * 메모아이즈 함수를 생각하면서 미리 담아두고 페어가 되는 것을 찾는 것! 합쳐서 9면 담아둔 곳에서 짝을 찾으면 될듯..!
 */

// const keyPair = (arr, N) => {
//   const pairIdx = {};
//   for (let i = 0; i < arr.length; i++) {
//     //
//     let val = arr[i];
//     pairIdx[val] = N - val;
//     console.log(pairIdx);
//     if (pairIdx.val === arr[i]) return [pairIdx[val], i];

//   }
// };

const keyPair = (arr, n) => {
  const pairIdx = {}; // {val:idx} : val의 값은 idx와 짝이야!
  for (let i = 0; i < arr.length; i += 1) {
    console.log("i >>>", i);
    const val = arr[i];
    console.log("val>>", val);
    console.log("pairIdx>>", pairIdx);
    if (pairIdx[val]) return [pairIdx[val], i];
    pairIdx[n - val] = i;
    console.log(pairIdx[n - val]);
  }
};

//                   0  1  2  3  4
const kp1 = keyPair([1, 2, 3, 4, 5], 7); // [2, 3]
console.log("🚀  kp1:", kp1);
// const kp2 = keyPair([1, 2, 3, 4, 5], 9); // [3, 4]
// console.log("🚀  kp2:", kp2);

// const kp3 = keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
// console.log("🚀  kp3:", kp3);
// const kp4 = keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
// console.log("🚀  kp4:", kp4);
