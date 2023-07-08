/**
 * 클로저 예시2
 * 동시 접속자 수
 * ECS 그려보기
 */
function currentCount() {
  let currCount = 0;
  return {
    connect() {
      currCount += 1;
    },
    disconnect() {
      currCount -= 1;
    },
    getCount() {
      return currCount;
    },
    get count() {
      return currCount;
    },
  };
}

const actions = ["입장", "입장", "입장", "퇴장", "입장", "퇴장"];

const counter = currentCount();
for (const action of actions) {
  action === "입장" ? counter.connect() : counter.disconnect();
  console.log(`${action} --> 현재 입장객 : ${counter.count}`);
}

console.log("Current User Count=", counter.count);
