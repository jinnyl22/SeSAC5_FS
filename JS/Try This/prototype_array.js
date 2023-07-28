/**
 * 1) mapBy(), findBy(), filterBy()
 * 2) firstObject, lastObject
 */
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };

const arr = [1, 2, 3, 4, 5];

Array.prototype.mapBy = function (args) {
  const mapArr = this.map((el) => el[args]);
  // console.log("디스", this);
  // console.log(mapArr);
  return mapArr;
};

// Array.prototype.mapBy = function (args) {
//   const mapArr = [];
//   //   console.log(args);
//   for (let i = 0; i < this.length; i++) {
//     mapArr[i] = this[i][args];
//   }
//   console.log(mapArr);
//   return mapArr;
// };

// findBy
Array.prototype.findBy = function (k, name) {
  const findArr = this.find((el) => el[k] == name);
  // console.log(findArr);
  return findArr;
};

// filterBy
Array.prototype.filterBy = function (k, num) {
  const filteArr = this.filter((el) => el[k] == num);
  console.log(filteArr);
  return filteArr;
};

// firstObject
Object.defineProperties(Array.prototype, {
  firstObject: {
    get: () => {
      console.log(arr[0]);
      return arr[0];
    },
  },
});

// lastObject
Object.defineProperties(Array.prototype, {
  lastObject: {
    get: () => {
      console.log(arr[arr.length - 1]);
      return arr[arr.length - 1];
    },
  },
});

// 객체의 프로퍼티에 접근하는 것처럼 사용!(호출하지 않음)
arr.firstObject; // 1
arr.lastObject; // 5

const users = [hong, kim, lee]; // {id:1, name: 'Hong'}, …
users.mapBy("id"); // [1, 2, 3]
users.mapBy("name"); // ['Hong', 'Kim', 'Lee']
users.findBy("name", "Kim"); // {id: 2, name: 'Kim'}
users.findBy("name", "Lee"); // {id: 2, name: 'Kim'}
users.filterBy("id", 2); // [{id: 2, name: 'Kim'}]
users.filterBy("id", 3); // [{id: 2, name: 'Kim'}]
