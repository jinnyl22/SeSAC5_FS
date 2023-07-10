var gg = 1;
let bb = 2;

function f1(x, y) {
  var gg = 11;
  let bb = 22;
  console.log("f1>", gg, bb, zz, f2, f2.length); // t,u,v
  f2("first"); // t,u,v 실행 (이 시점에 nested f2는 hoisting됐지만 <f.o>로 정의되지 않은 상태!)
  {
    const xx = 99; // f1 평가 시 xx는 notInitializedYet(uninitialized) 상태로 block상단에 hoisting.
    f2("nest-first"); // no error? which call f2(inner) or f2(nested) ? --> block 안으로 들어왔기 때문에 console.log(t, "nested", xx, zz) 여기가 실행된다!
    var zz = 88; // f1 평가 시 f1 상단에 undefined로 hoisting.
    function f2(t) {
      // console.log(t, "nested", xx, zz, lll); // ReferenceError: Cannot access 'lll' before initialization --> hoisting이 되긴하나 let, const는 그 라인이 실행되기전까지는 초기화가 되지 않는다! (TDZ) let lll=0 을 console.log 위로 올려주면 err 안남
      console.log(t, "nested", xx, zz);
      let lll = 0; // hoisting되는 이유는 뒤에서 선언했는지 여부를 개발자에게 알려줘야 중복 선언 안함!
    } // hoisting은 undefined로?!
  } // 평가시점에 f1 scope로 hoisting.
  function f2(t, u) {
    // 여기는 평가 때 덮어씌워져서 실행이 되지 않아 inner가 아예 찍히지 않음!
    console.log(t, "inner", xx, zz);
  } // f1 평가 시 f1 상단에 <f.o>로 hoisting
  function f2(t, u, v) {
    console.log(t, "inner2", xx, zz);
  } // hoisting 시, 위 라인의 f2를 덮어씀!
  var zz = 800;
  f2("second"); // which call 'nested' or 'inner' or 'inner2' ? -->
}

function f2(g) {
  console.log(g, "global f2>", gg, bb, xx, kk); // ?
}

console.log("----------------------- start!!");
let xx = 9;
if (gg > 0) {
  var kk = 33;
  const yy = 9;
}
f1(1, 2);
// console.log(kk, yy); // ? yy is not defined in global scope
console.log(kk);
f2("third"); // global f2 실행
