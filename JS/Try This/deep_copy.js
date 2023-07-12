/**
 * 객체 kim을 깊은 복사하는 deepCopy 함수를 작성하시오
 */
const kim = {
  nid: 3,
  addr: "Busan",
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: function () {
    console.log(this.oo);
  },
};
