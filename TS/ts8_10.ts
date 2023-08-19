// 튜플, rest
type A = [string, number];
type B = [boolean, A]; // [boolean, [string, number]]  튜플 속의 튜플이라고 보면됨
type C = [boolean, ...A]; // [boolean, string, number] 튜플을 풀어준다!

type Arr = (string | number)[];
type Brr = [boolean, Arr];
type Crr = [boolean, ...Arr];

const b: B = [false, ["a", 0]];
const c: C = [false, "a", 0];

const cc: Crr = [false, "a", "b", 1, 2];

// 자바스크립트로 컴파일 되었을 때 어떻게 나오나 확인하기!
class D {
  //   name: string;
  constructor(public name: string) {}
}

//
// class D {
//   constructor(name) {
//     this.name = name;
//   }
// }

const aaa = "A";
const bbb: string = "B";

const UserState = {
  준비: 1,
  진행: 2,
  done: 3,
  cancel: 8,
  withdraw: 9,
  etc: 0,
} as const;

// type State<T> = T[keyof T];
type State = (typeof UserState)[keyof typeof UserState]; // 1 | 2 | 3 | 8 | 9 | 0

type User1 = {
  id: number;
  name: string;
  state: State;
};

const hong: User1 = { id: 1, name: "Hong", state: 8 };
const kim: User1 = { id: 2, name: "kim", state: 0 };

// 188 페이지 코드 쳐보기
const ratings = {
  imdb: 8.4,
  metacritic: 82,
};
function logRating(key: keyof typeof ratings) {
  console.log(ratings[key]);
}
logRating("imdb"); // 8.4
// logRating("aa");

// top 타입의 keyof
type kk = keyof any; // string | number | symbol

// 219 쳐보기
function get<T, Key extends keyof T>(container: T, key: Key) {
  console.log("container >>", container[key]);
  return container[key];
}

const roles = {
  favorite: "Fargo",
  others: ["Almost", "Burn", "Nomad"],
};

const favorite = get(roles, "favorite");
const others = get(roles, "others");

// const missing = get(roles, "extras")
