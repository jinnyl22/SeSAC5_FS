/**
 * var : 함수레벨 스코프
 * let, const : 블록레벨 스코프
 */
function varFn() {
  var v = 1;
  {
    var v = 2,
      vv = 3;
    console.log(v, vv, xx); //2, 3, 9
  }
  console.log(v, vv); // 2, 3
}

function letFn() {
  let l = 1;
  {
    let l = 2,
      ll = 3;
    console.log(l, ll); // 2, 3
  }
  console.log(l, ll); // 같은 스코프 내부에 존재 하지 않으면 not defined
}

var xx = 9;
varFn();
letFn();
