/**
 * 다음과 같이 작동하는 bill 함수를 클로저를 이용하여 작성하시오!
 */
const MENU = {
  짜장: { price: 7000, taxfree: 0 },
  짬뽕: { price: 9900, taxfree: 0 },
  탕수육: { price: 25000, taxfree: 1 },
};

function bill() {}

const table1 = bill();
table1.order("짜장");
table1.order("짬뽕");

table1.order("탕수육");
