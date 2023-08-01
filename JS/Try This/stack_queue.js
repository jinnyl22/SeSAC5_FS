/**
 * class와 array를 이용하여 stack과 queue를 구현하시오
 * #arr 프라이빗 으로 만들어야함
 * 왜냐하면 pop과 push를 하기 전까지 외부에서 값을 접근해서 만들면 안되기 때문에!
 * Queue와 Stack은 무조건 이터레이터!
 */

class Stack {
  #arr;
  // rest 파라미터 인수 요소를 배열로 직접 전달받을 수 있다
  constructor(...args) {
    console.log(args[0]);
    // 배열이면
    if (Array.isArray(args[0])) {
      this.#arr = args[0];
      // 배열이 아니면
    } else this.#arr = args;
  }
  push(item) {
    return this.#arr.push(item);
  }

  pop() {
    return this.#arr.pop();
  }

  print() {
    console.log(this.#arr);
  }
}

// ex) Stack
// 후입선출
const stack = new Stack(1, 2, 3);
stack.push(4);
// stack.pop(); // 마지막에 추가된 하나 꺼내기
stack.print();
// const stack2 = new Stack([1, 2]);
// stack2.print();

class Queue {
  #arr;
  constructor(...args) {
    console.log(args[0]);
    // 배열이면
    if (Array.isArray(args[0])) {
      this.#arr = args[0];
      // 배열이 아니면
    } else this.#arr = args;
  }
  enqueue(item) {
    return this.#arr.push(item);
  }

  dequeue() {
    // shift() 배열의 첫번째 요소를 제거하고 제거된 요소를 반환
    return this.#arr.shift();
  }
}

// ex) Queue
// 선입선출
// const queue = new Queue(1,2,3,4);
// queue.enqueue(3); // 추가하기
// console.log(queue.dequeue()); // 가장 먼저 추가 된 것 하나 꺼내기
