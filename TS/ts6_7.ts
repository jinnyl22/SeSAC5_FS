// 나머지 매개변수 rest parameter
function f(g: string, ...args: string[]) {
  console.log(g, args);
}

const arr2 = ["a", "b"];
const arr3 = ["aa", "bb"] as const;
const arr4: [string, string] = ["a", "b"];
f(arr2[0], ...arr2.slice(1));
f(...arr3);
f(...arr4);

function f2(): [string, number] {
  return ["a", 1];
}

const rets = f2();
// rets[0] = 'c'; 이렇게 즉시 구조화 하지 않음

type TUser = {
  id: number;
  name: string;
};
type ID = number & string;
type TaddrUser = TUser & {
  //   id: string;
  addr: string;
};

type TDept = {
  id: number;
  name: string;
  captain: string;
};

// 타입은 유니언 가능!
type Ud1 = TUser | TDept;
type Ud2 = TUser | (TDept & { addr: string });

interface User {
  id: number;
  name: string;
}

interface AddrUser extends User {
  addr: string;
}

interface Dept {
  id: number;
  name: string;
  captain: string;
}

const au1: AddrUser = { id: 1, name: "Hong", addr: "seoul" };
const au2: AddrUser = { id: 1, name: "Lee", addr: "seoul" };

class Member implements User {
  id;
  // name;
  constructor(id: number, public name: string) {
    this.id = id;
    // this.name = name
  }
}

interface WC {
  // 인덱스 시그니처는 전체 key와 value의 타입을 지정해주는 것이다!
  [i: string]: number | string; // 여기가 제일 넓어야함!
  name: string;
  // isBool : boolean // 여기가 에러가 나지 않으려면 위에 인덱스 시그니처의 값 부분에 boolean을 추가해주어야한다!
}
