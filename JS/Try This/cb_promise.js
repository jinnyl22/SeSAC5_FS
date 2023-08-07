/**
 * 앞에서 작성한 다음 코드를 Promise를 이용하여 리팩토링 하시오
 */

// const promiseFn = () => {
//   new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log("depth1", new Date());
//     }, 1000);
//   })
//     .then(
//       setTimeout(function () {
//         console.log("depth2", new Date());
//       }, 2000)
//     )
//     .then(
//       setTimeout(function () {
//         console.log("depth3", new Date());
//         reject(new Error("Already 3-depth!!"));
//       }, 3000)
//     );
// };

const promiseFn = (depth = 1) =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      //   let time = 1000;
      console.log(`depth${depth}`, new Date());
      //   if (depth < 3) resolve(depth + 1);
      //   else reject(new Error("Already 3-depth!!"));
      depth < 3 ? resolve(depth + 1) : reject(new Error("Already 3-depth!!"));
    }, 1000 * depth);
  });
promiseFn()
  //   .then((nextDepth) => promiseFn(nextDepth))
  //   .then((nextDepth) => promiseFn(nextDepth))
  // promiseFn이 resolve함수... then은 resolve일 때 타니까...? 넣어주면 무조건 resolve?..
  .then(promiseFn)
  .then(promiseFn)
  .catch((err) => console.log("err >>>", err));

console.log("START!", new Date());

// setTimeout(function () {
//   console.log("depth1", new Date());
//   setTimeout(function () {
//     console.log("depth2", new Date());
//     setTimeout(function () {
//       console.log("depth3", new Date());
//       throw new Error("Already 3-depth!!");
//     }, 3000);
//   }, 2000);
// }, 1000);
