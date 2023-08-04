/**
 * Template Literal의 발전된 형태인 tagged template
 * 아래와 같은 형태로 출력하는 fmt함수를 작성하시오.
 * 주문합계:   45,000원
 * 세액합계:    4,500원
 */

const total = { price: 45000, vat: 4500 };

function fmt(txts, num) {
  //   console.log("txts>>>", txts); // 첫번째 인수로 배열이 들어옴
  //   console.log(isTotal); // ${}로 사용된 부분이 인수로 차례대로 들어옴
  const [total, won] = txts;
  const numStr = num.toLocaleString().padStart(7, " ");
  return `${total}${numStr}${won}`;
}

console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

// const holiday = "한글날";
// const month = 10,
//   day = 9;

// function f(txts, a, b) {
//   console.log("날짜 구문>>>", txts);
//   console.log(a);
//   console.log(b);
// }

// f`${holiday}는 ${month}월 ${day}입니다`;
