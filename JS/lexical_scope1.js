/**
 * 23.07.24 (화)
 * 함수레벨 스코프는
 * 함수의 평가는 함수가 호출될 때 된다!
 * 실행컨텍스트는 실행 되는 스코프이다!
 *
 * 전역함수선언식은 평가시점에 <f.o>로 hoisting 되며, 그 외에는 모두 해당 라인 실행 시점에 <f.o>로 정의됨
 */

var gg = 1;
let bb = 2;
function f1() {
  var gg = 11;
  let bb = 22;
  console.log("f1 >", gg, bb);
  f2(); //inner 이 시점에는 f2는 hoisting 됐지만 <f.o>로 정의되지 않은 상태
  function f2() {
    // 평가 시점에 f1 scope로 hoisting 된다
    console.log("nested");
  }
  f2();
}

function f2() {
  console.log("f2 >", gg, bb, xx, kk);
}
let xx = 9;
if (gg > 0) {
  var kk = 33;
  const yy = 9;
}

f1();
console.log(kk, yy);
