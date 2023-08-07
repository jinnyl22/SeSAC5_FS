/**
 * 1)문자열에 한글이 있는지 체크하는 hasHangul(str) 함수를 작성하시오
 */
const hasHangul = (str) => {
  const reg = /[ㄱ-힣]/g;
  return reg.test(str);
};

const a = hasHangul("강원도"); //true
console.log("🚀  a:", a);
const b = hasHangul("ㄱㄴㄷ"); //true
console.log("🚀  b:", b);
const c = hasHangul("ㅜㅜㅠㅜㅠ"); //true
console.log("🚀  c:", c);
const d = hasHangul("케잌"); //true
console.log("🚀  d:", d);
const e = hasHangul("12345"); // false
console.log("🚀  e:", e);
const f = hasHangul("IC"); //false
console.log("🚀  f:", f);

/**
 * 2) 초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오
 */
const s = "강원도 고성군 토성군 북면";

const searchKoreanInitial = (str, word) => {
  const reg = new RegExp(`${word}`, "g");
  return str.match(reg);
};

const g = searchKoreanInitial(s, "ㄱㅅㄱ"); // 고성군
console.log("🦄  g:", g);
const h = searchKoreanInitial(s, "ㅌㅅㅁ"); // 고성군
console.log("🦄  h:", h);
const i = searchKoreanInitial(s, "푹면"); // undefined
console.log("🦄  i:", i);
