/**
 * 23.07.24 (화)
 * 이렇게 쓰는게 표준 주석!
 * 1) 1~10 사이의 정수에 대해 제곱근을 소수점 3자리까지 출력하시오
 * - 정수는 제외
 * - 소수점 3자리
 *
 * 항상 확장성을 고려해서 짤 것!!
 */

const print3 = (i, f) => {
  console.log(`${i} ==> \t ${f / 1000}${f % 10 === 0 ? "0" : ""}`);
};

function printSqrt(start = 1, end = 10) {
  // statement 선언문!
  for (let i = start; i <= end; i++) {
    const sq = Math.sqrt(i);

    if (sq % 1 === 0) continue;

    // const sqi = Math.floor(sq * 1000);
    // const ret = sqi / 1000;
    // console.log(`${i} ==> \t ${ret}${sqi % 10 === 0 ? "0" : ""}`);
    print3(i, Math.floor(sq * 1000));
  }
}

printSqrt(1, 30);

// console.assert() 유닛 테스트...?
/**
 * 코드 우클릭 -> 리팩터링
 * 코드를 함수로 묶어주고 싶을 때 사용한다!!
 */
