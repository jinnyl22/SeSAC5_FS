/**
 * 객체 kim을 깊은 복사하는 deepCopy 함수를 작성하시오
 * 재귀함수 사용해서 해보기!
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
  // [Symbol()]: 9,
};

const deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  const deepObj = {};
  const deepArr = [];
  const deepDeepArr = [];
  // console.log(Object.getOwnPropertySymbols(obj));
  // console.log(obj[Symbol()]);

  for (const key in obj) {
    if (Array.isArray(obj[key]) == false) {
      console.log("오브젝트 키", obj[key]);
      deepObj[key] = deepCopy(obj[key]);
    } else {
      let i = 0;
      for (const k of obj[key]) {
        console.log("케이", k);
        Array.isArray(k) == false && typeof k == "object" ? deepCopy(k) : console.log(">>>>>>>>", k);
        // if (Array.isArray(k) == true) {
        //   for (const kk of k) {
        //     deepDeepArr[i] = kk;
        //   }
        //   deepArr[i] = deepDeepArr;
        // }
        deepArr[i] = deepCopy(k);
        i += 1;

        console.log("딥어래이", deepArr);
      }
      deepObj["arr"] = deepArr;
    }
  }

  // Array.isArray(obj) ? [] : {};
  return deepObj;
};

const newKim = deepCopy(kim);
newKim.arr[3].aid = 4;
newKim.arr[4][0] = 30;
console.log(newKim);
console.log(kim.arr[3].aid);
console.log(newKim.arr[3].aid);
console.log(kim.arr[4][0]);
console.log(newKim.arr[4][0]);
