/**
 * Collection 클래스를 상속받아 List 메서드들과 클래스 메서드 arrayToList, listToArray를 보유한 ArrayList 클래스를 구현하시오
 */

class Collection {
  #arr;
  constructor(...args) {
    if (Array.isArray(args[0])) {
      this.#arr = args[0];
    } else this.#arr = args || [];
  }
  // 인스턴스에서 #arr에 접근해주기 위해서 만들어줌
  get arr() {
    return this.#arr;
  }

  get length() {
    return this.#arr.length;
  }

  get isEmpty() {
    return this.#arr.length === 0;
  }

  print() {
    return console.log(this.#arr);
  }

  clear() {
    this.#arr = [];
  }

  // iterator
  iterator() {
    // 배열에 직접 이터레이터 함수를 호출
    // return this.#arr[Symbol.iterator]();
    // 아래의 제너레이터 함수를 호출
    return this[Symbol.iterator]();
  }

  // generator
  *[Symbol.iterator]() {
    for (let i = 0; i < this.#arr.length; i += 1) {
      yield this.#arr[i];
    }
  }
}

class ArrayList extends Collection {
  arrayToList() {}

  listToArray() {}
}

const alist = new ArrayList();
