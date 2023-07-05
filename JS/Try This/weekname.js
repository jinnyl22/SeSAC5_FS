/**
 * 2. 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해보고 switch문을 사용하지 않은 더 간단한 방법도 찾아보세요
 */

const getWeekName = (date) => {
  let weekName;
  switch (date.getDay()) {
    case 0:
      weekName = "일";
      break;
    case 1:
      weekName = "월";
      break;
    case 2:
      weekName = "화";
      break;
    case 3:
      weekName = "수";
      break;
    case 4:
      weekName = "목";
      break;
    case 5:
      weekName = "금";
      break;
    case 6:
      weekName = "토";
      break;
    default:
      throw new Error("Not valid weekday!!");
  }

  // const yyyy = date.getFullYear();
  // const mm = makeLenString1(date.getMonth());
  // const dd = makeLenString2(date.getDate());
  // console.log(`${yyyy}-${mm}-${dd}은 ${weekName}요일 입니다.`);

  return weekName;
};

const makeLenString1 = (s, len = 2) => {
  const t = "0".repeat(len) + s;
  return t.substring(t.length - len);
};

const makeLenString2 = (s, len = 2) => {
  const t = (s ?? "").toString();
  return t.length >= len ? t.substring(t.length - len) : "0".repeat(len - t.length) + t;
};

// test code
// const WEEK_NAMES = ["일", "월", "화", "수", "목", "금", "토"];
const WEEK_NAMES = "일월화수목금토"; // 실제로 string은 배열로 들어있기 때문에 위와 똑같음

// test code
const date = new Date();
for (let i = 0; i < 10; i++) {
  const wn1 = getWeekName(date);
  const wn2 = WEEK_NAMES[date.getDay()];

  const yyyy = date.getFullYear();
  const mm = makeLenString1(date.getMonth() + 1);
  const dd = makeLenString2(date.getDate());
  console.log(`${yyyy}-${mm}-${dd}은 ${wn1}/${wn2}요일 입니다.`);
  date.setDate(date.getDate() + 1);
}

/**
 * 전역으로 쓰는 const는 변수명을 통상적으로 대문자로 쓴다!
 */
