/**
 * 객체 kim을 깊은 복사하는 deepCopy 함수를 작성하시오
 * 재귀함수 사용해서 해보기!
 */
const arr = [1, 2, 3];
const hong = { id: 1, name: "Hong" };

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

// 오브젝트가 아닐때는 그냥 값을 세팅
// 오브젝트 일때는 다시 재귀

const deepCopy = (obj) => {
  // if (typeof obj !== "object" || obj === null) return obj;

  const deepObj = {};
  const deepArr = [];
  // console.log(Object.getOwnPropertySymbols(obj));

  // // obj가 배열이면
  // if (Array.isArray(obj)) {
  //   for (const key of obj) {
  //     let i = 0;
  //     if (typeof obj[key] !== "object") {
  //       deepArr[i] = obj[key];
  //     }
  //     // console.log(obj[key]);
  //     // console.log("딥어레이", deepArr);
  //     i += 1;
  //   }
  //   // obj가 배열이 아닐 때
  // } else {
  //   for (const key in obj) {
  //     // console.log(">>>>>>>", obj[key]);
  //     if (typeof obj[key] !== "object") {
  //       deepObj[key] = deepCopy(obj[key]);
  //     } else deepObj[key] = deepCopy(obj[key]);
  //   }
  // }

  for (const key in obj) {
    if (Array.isArray(obj[key]) == false) {
      // console.log("오브젝트 키", obj[key]);
      deepObj[key] = deepCopy(obj[key]);
    } else {
      let i = 0;
      for (const k of obj[key]) {
        // console.log("케이", k);
        Array.isArray(k) == false && typeof k == "object" ? deepCopy(k) : console.log(">>>>>>>>", k);

        deepArr[i] = deepCopy(k);
        i += 1;

        console.log("딥어래이", deepArr);
      }
      deepObj["arr"] = deepArr;
    }
  }

  return deepObj;
};

const newKim = deepCopy(kim);
// newKim.arr[3].aid = 4;
// newKim.arr[4][0] = 30;
console.log(newKim);
// console.log(kim.arr[3].aid);
// console.log(newKim.arr[3].aid);
// console.log(kim.arr[4][0]);
// console.log(newKim.arr[4][0]);

// const kim = {
//   nid: 3,
//   addr: 'Pusan',
//   arr: [1, 2, 3, { aid: 1 }, [10, 20]],
//   oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
//   xx: null,
//   yy: function () {
//     console.log(this.oo);
//   },
//   [Symbol()]: 9,
//   [Symbol()]: Symbol('symbol2'),
//   zs: new Set([arr, hong]),
//   zws: new WeakSet([arr, hong]),
//   zm: new Map([[1, arr]]),
//   zwm: new WeakMap([[hong, arr]]),
//   dog: lucy,
// };
// const newKim = deepCopy(kim);
// assert.deepStrictEqual(newKim, kim, 'deepCopy equal fail!');
// newKim.addr = 'Daegu';
// newKim.oo.name = 'Kim';
// assert.notDeepStrictEqual(newKim, kim, 'Not Valid Deep Copy!');
// newKim.arr[0] = 100;
// newKim.arr[3].aid = 200;
// newKim.arr[4][1] = 300;
// newKim.oo.addr.city = 'Daejeon';
// console.log(
//   'Pass1?',
//   kim.arr[0] !== newKim.arr[0] && kim.arr[3].aid !== newKim.arr[3].aid
// );
// assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], 'pass2: 다르지 않아요!');
// console.log('Pass3?', kim.oo.addr.city !== newKim.oo.addr.city);
