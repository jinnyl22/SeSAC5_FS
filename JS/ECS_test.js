/**
 * 평가에서 초기화는 되지만
 * 실행을 하면서 값이 할당되기 때문에
 * var가 호이스팅이 되어서 위로 올라간다 하더라도
 * 그 라인이 실행되지 않는 이상 undefined임!
 */

function foo(a) {
  const y = 4;
  bar(10); // 20 10 undefined 4 5
  var x = 3;
  // bar(10);
  function bar(b) {
    // console.log(a, b, x, y, z); // --> ReferenceError: Cannot access 'z' before initialization
    const z = 5;
    console.log(a, b, x, y, z);
  }
}
foo(20);
