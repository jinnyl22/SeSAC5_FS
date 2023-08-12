/**
 * 1. class와 array를 이용하여 stack과 queue를 구현하시오
 * #arr 프라이빗 으로 만들어야함
 * 왜냐하면 pop과 push를 하기 전까지 외부에서 값을 접근해서 만들면 안되기 때문에!
 * Queue와 Stack은 무조건 이터레이터!
 *
 * 2. 공통기능 확장하기
 * clear(), print(), toArray(), isEmpty(), peek, poll, remove, length
 */

class Stack {
  #arr;
  // rest 파라미터 인수 요소를 배열로 직접 전달받을 수 있다
  constructor(...args) {
    // 배열이면
    if (Array.isArray(args[0])) {
      this.#arr = args[0];
      // 배열이 아니면
    } else this.#arr = args;
  }
  // 요소 추가 push 변경된 length 프로퍼티 값 반환
  push(item) {
    return this.#arr.push(item);
  }
  // 마지막 요소를 꺼내줌
  pop() {
    return this.#arr.pop();
  }

  print() {
    console.log(this.#arr);
  }
  // stack에 있는 모든 요소 삭제
  clear() {
    // this.#arr = [];
    this.#arr.length = 0;
  }

  // stack에 남은 요소가 있는지 없는지 확인
  get isEmpty() {
    return this.#arr.length === 0;
  }

  // 가장 나중에 들어간 요소 반환
  get poll() {
    return this.#arr[this.length - 1];
  }

  // 배열 길이 반환
  get length() {
    return this.#arr.length;
  }

  //
  remove() {
    this.pop();
  }

  // 이터레이터
  iterator() {
    // 배열에 직접 이터레이터 함수를 호출
    // return this.#arr[Symbol.iterator]();
    // 아래의 제너레이터 함수를 호출
    return this[Symbol.iterator]();
  }

  // 제너레이터
  *[Symbol.iterator]() {
    for (let i = 0; i < this.#arr.length; i += 1) {
      yield this.#arr[i];
    }
  }
}

// ex) Stack
// 후입선출
const stack = new Stack(1, 2, 3, 4, 5, 6, 7);
// 이터레이터, 제너레이터 호출 방식은 똑같음!
const stackIter = stack.iterator();
console.log("🦄  stackIter:", stackIter.next());
console.log("🦄  stackIter:", stackIter.next());
console.log("🦄  stackIter:", stackIter.next());
console.log("🦄  stackIter:", stackIter.next());
console.log("🦄  stackIter:", stackIter.next());
console.log("🦄  stackIter:", stackIter.next());
console.log("🦄  stackIter:", stackIter.next());
console.log("🦄  stackIter:", stackIter.next());

// stack.print();
// console.log(stack.poll);
// stack.push(4);
// stack.pop(); // 마지막에 추가된 하나 꺼내기
// const stack2 = new Stack([1, 2]);
// stack2.print();

class Queue {
  #arr;

  constructor(...args) {
    // 배열이면
    if (Array.isArray(args[0])) {
      this.#arr = args[0];
      // 배열이 아니면
    } else this.#arr = args;
  }
  // 요소 추가 push 변경된 length 프로퍼티 값 반환
  enqueue(item) {
    return this.#arr.push(item);
  }

  dequeue() {
    // shift() 배열의 첫번째 요소를 제거하고 제거된 요소를 반환
    return this.#arr.shift();
  }
  print() {
    console.log(this.#arr);
  }
  // queue에 있는 모든 요소 삭제
  clear() {
    // this.#arr = [];
    this.#arr.length = 0;
  }

  // queue에 남은 요소가 있는지 없는지 확인
  get isEmpty() {
    // 빈배열이면 undefined를 반환해주기 때문에 옵셔널을 붙여준다
    return this.#arr?.length === 0;
  }

  // 가장 먼저 들어간 요소 반환
  get poll() {
    return this.#arr[0];
  }

  // 가장 먼저 들어간 요소 반환 및 삭제
  get peek() {
    // return this.dequeue();
    return this.#arr.shift();
  }

  get length() {
    return this.#arr.length;
  }

  // 가장 먼저 들어간 요소 삭제, 반환 X
  remove() {
    this.dequeue();
  }
}

// ex) Queue
// 선입선출
// const queue = new Queue(1, 2, 3, 4);
// queue.enqueue(5); // 추가하기
// queue.dequeue(); // 가장 먼저 추가 된 것 하나 꺼내기
// queue.print();
// queue.clear();
// queue.print();
// console.log(queue.poll);
// console.log(queue.length);
// console.log(queue.isEmpty);
// queue.print();
