/**
 * 1) mapBy(), findBy(), filterBy()
 * 2) firstObject, lastObject
 */
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, kim, lee]; // {id:1, name: 'Hong'}, …

// 배열 리터럴은 인스턴스
const arr = [1, 2, 3, 4, 5];

Array.prototype.mapBy = function (k) {
  // 화살표함수로 적으면 globalThis가 된다, function 키워드 사용해야함
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리키게된다
  // 해당 메서드를 호출한 user에 this가 바인딩된다
  // console.log("디스", this);
  return this.map((el) => el[k]);
};

// Array.prototype.mapBy = function (args) {
//   const mapArr = [];
//   for (let i = 0; i < this.length; i++) {
//     mapArr[i] = this[i][args];
//   }
//   // console.log(mapArr);
//   return mapArr;
// };

// findBy
Array.prototype.findBy = function (k, name) {
  return this.find((el) => el[k] === name);
};

// filterBy
Array.prototype.filterBy = function (k, num) {
  // 원본배열이 변경되지 않은 새로운 배열 반환
  return this.filter((el) => el[k] === num);
};

// firstObject, lastObject
Object.defineProperties(Array.prototype, {
  firstObject: {
    get: function () {
      return this[0];
    },
    // enumerable: true,
  },
  lastObject: {
    get: function () {
      console.log(this[this.length - 1]);
      return this[this.length - 1];
    },
  },
});

// // Object.defineProperty 메서드는 한번에 하나의 프로퍼티만 정의 가능!
// Object.defineProperty(Array.prototype, "lastObject", {
//   get: () => {
//     console.log(this[this.length - 1]);
//     return this[this.length - 1];
//   },
// });

// 함수가 아니라 객체임!!!
arr.firstObject; // 1
arr.lastObject; // 5

// console.log(Object.getOwnPropertyDescriptors(Array.prototype));
// console.log("firstObject >>>>", Object.getOwnPropertyDescriptor(Array.prototype, "firstObject"));

// console.log(Object.getOwnPropertyDescriptors(users));

console.log(users.mapBy("id")); // [1, 2, 3]
console.log(users.mapBy("name")); // ['Hong', 'Kim', 'Lee']
console.log(users.findBy("name", "Kim")); // {id: 2, name: 'Kim'}
console.log(users.findBy("name", "Lee")); // {id: 3, name: 'Lee'}
console.log(users.filterBy("id", 2)); // [{id: 2, name: 'Kim'}]
console.log(users.filterBy("id", 3)); // [{id: 3, name: 'Lee'}]
