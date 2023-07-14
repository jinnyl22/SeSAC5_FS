function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function factorialTCO(n, acc = 1) {
  if (n === 0) return acc;
  return factorialTCO(n - 1, n * acc);
}

// const arrFacto = [];
// const arrTCO = [];

// for (let i = 0; i <= 10; i++) {
//   console.log(i, factorial(i));
// }
// console.log("---------------------------------");
// for (let i = 0; i <= 10; i++) {
//   console.log(i, factorialTCO(i));
// }

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

// p가 이전 값, pp가 이이전 값!
const fibonacciTCO = (n, pp = 0, p = 1) => (n === 0 ? pp : fibonacciTCO(n - 1, p, pp + p));
// const fibonacciTCO = (n, pp = 0, p = 1) => (!n ? pp : fibonacciTCO(n - 1, p, pp + p)); // 이거보다 위의 n===0이 더 가독성이 좋음!

for (let i = 0; i <= 10; i++) {
  console.log(i, fibonacci(i));
}
console.log("---------------------------------");
for (let i = 0; i <= 10; i++) {
  // 여기서 i는 위의 n!
  console.log(i, fibonacciTCO(i));
}
