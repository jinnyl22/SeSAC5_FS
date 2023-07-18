/**
 * getNextWeek 함수는 widx 변수에 부수 효과(side effect)가 있다.
 * 이를 부수 효과가 없도록 변경하시오
 */
const weeks = ["일", "월", "화", "수", "목", "금", "토"];

// let widx = -1;

// const getNextWeek = () => {
//   widx += 1; // side effect!
// 토요일 다음에 다시 일요일로 가기 위해서!
//   if (widx >= weeks.length) widx = 0;
//   return `${weeks[widx]}요일`;
// };

const getNextWeek = () => {
  let widx = -1;
  const weekCnt = (wid) => {
    wid += 1;
    return wid;
  };
  return `${w[weekCnt]}요일`;
};

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side effect!
  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);
