// 'use strict';

// new로 부르지 않으면 인스턴스화 된 것이 아님!
const Dog = function (name) {
  console.log("디스", this, "뉴타겟", new.target, "인스턴스오브", this instanceof Dog);
};

const dog = Dog("Doggy"); // 일반함수이기 때문에 this가 전역객체를 가리킨다
console.log("type=", typeof dog); // undefined인 이유는 return이 없어서!
