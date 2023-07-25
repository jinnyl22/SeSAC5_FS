/**
 * 다음과 같이 작동하는 bill 함수를 클로저를 이용하여 작성하시오!
 * 부가세 구하는 공식 : Math.round((금액/1.1)*0.1)
 */
const MENU = {
  짜장: { price: 7000, taxfree: 0 },
  짬뽕: { price: 9900, taxfree: 0 },
  탕수육: { price: 25000, taxfree: 1 },
};

function bill() {
  const orderMenu = {};
  console.log(MENU[key]);
  const vat = Math.round((orgPrice / 1.1) * 0.1);
  console.log(`* ${menu}`);
  console.log(`공급가액 : ${orgPrice}원`);
  console.log(`부가세액 : ${vat}원`);

  console.log("=============================");
  console.log("=============================");
}

const table1 = bill();
table1.order("짜장");
// table1.order("짬뽕");
// table1.printBill();
// table1.order("탕수육");
