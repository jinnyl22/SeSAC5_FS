/**
 * object method와 같은 non-construcor
 * 함수를 반환하는 고차 함수에 사용하기 좋다
 *
 * 아래의 3개 함수는 모두 다 같은 구문이다!
 */

const addTax1 = function (resolve) {
  return function (price) {
    return resolve(price * 1.1);
  };
};

// function 키워드 생략 가능
const addTax2 = (resolve) => {
  return (price) => {
    return resolve(price * 1.1);
  };
};

//body가 한 문장이면 중괄호와 return문을 생략할 수 있다
const addTax3 = (resolve) => (price) => resolve(price * 1.1);
