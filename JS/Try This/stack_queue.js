/**
 * class와 array를 이용하여 stack과 queue를 구현하시오
 * #array 프라이빗 으로 만들어야함
 * 왜냐하면 pop과 push를 하기 전까지 외부에서 값을 접근해서 만들면 안되기 때문에!
 * Queue와 Stack은 무조건 이터레이터!
 */

// ex) Stack
const stack = new Stack();
stack.push(3);
console.log(stack.pop());

// ex) Queue
const queue = new Queue();
queue.enqueue;
console.log(queue.dequeue);
