let runCnt = 0;
// function fibonacciRecursive(n) {
//   runCnt += 1;
//   if (n < 2) return n;
//   return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
// }

// function fibonacciLoop(n) {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i += 1) {
//     runCnt += 1;
//     arr[i] = arr[i - 2] + arr[i - 1];
//   }
//   return arr[n];
// }

/**
 * 트리구조가 된다! 계속 부른 것을 부르게 됨!
 * 근데 이제 memoizedTable에서 캐시된 값을 사용하는 것
 */
function memoized(fn) {
  const memoizedTable = {};
  return function (k) {
    console.log(k);
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedFibonacci = memoized(function (n) {
  runCnt += 1;
  if (n < 2) return n;
  return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
});

console.time("X");
for (let i = 0; i < 10; i += 1) {
  runCnt = 0;
  // console.log(`${i}, ${fibonacci(i)}, ${runCnt}회`);
  // console.log(`${i}, ${memoizedFibonacci(i)}, ${runCnt}회`);
  // console.log(`${i}, ${fibonacciLoop(i)}, ${runCnt}회`);
  // fibonacciLoop(i);
  memoizedFibonacci(i);
}
// console.log(`${fibonacciRecursive(40)}, ${runCnt}회`);
// console.log(`${fibonacciLoop(40)}, ${runCnt}회`);
// console.log(`${memoizedFibonacci(40)}, ${runCnt}회`);
console.timeEnd("X");
