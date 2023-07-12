/**
 * 원시값만을 갖는 객체 kim을 복사하는 ㅍ로그램을 object의 클래스 메소드, spread(...) 연산자를 사용하지 말고 작성하시오
 */

const kim = {
  nid: 3,
  nm: "Hong",
  addr: "Busan",
};

const copyObject = (obj) => {
  if (typeof obj !== "object") return obj;

  const copy = {};
  for (const key in obj) {
    copy[key] = obj[key];
  }
  return copy;
};

const newKim = copyObject(kim);
newKim.addr = "Deagu";
console.log(newKim.addr);
console.log(kim.addr);
console.log(kim.addr !== newKim.addr);
