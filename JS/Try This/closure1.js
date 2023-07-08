/**
 * 클로저 예시1
 * 할인 금액 구하기
 * ECS 그려보기
 */
function discount() {
  const dcRate = 0.1;
  return function (price) {
    return price * dcRate;
  };
}

const items = [
  { item: "상품A", price: 32000 },
  { item: "상품B", price: 45000 },
];
const dc = discount();

for (const { item, price: orgPrice } of items) {
  const salePrice = orgPrice - dc(orgPrice);
  console.log(`${item} : ${orgPrice}원 --> ${salePrice.toLocaleString()}원`);
}
