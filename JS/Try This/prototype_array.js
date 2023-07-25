/**
 * 1) mapBy(), findBy(), filterBy()
 * 2) firstObject, lastObject
 */
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };

const arr = [1, 2, 3, 4, 5];

Array.prototype.mapBy = function () {
  return this.id.map((el) => {});
};

Object.defineProperties();

arr.firstObject; // 1
arr.lastObject; // 5

const users = [hong, kim, lee]; // {id:1, name: 'Hong'}, …
users.mapBy("id"); // [1, 2, 3]
users.mapBy("name"); // ['Hong', 'Kim', 'Lee']
users.filterBy(id, 2); // [{id: 2, name: 'Kim'}]
users.findBy("name", "Kim"); // {id: 2, name: 'Kim'}