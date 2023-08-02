/**
 * Collection 클래스를 상속받아 List 메서드들과 클래스 메서드 arrayToList, listToArray를 보유한 ArrayList 클래스를 구현하시오
 */

class Collection {
  #arr;
  constructor() {}
  // 인스턴스에서 #arr에 접근해주기 위해서 만들어줌
  get arr() {
    return this.#arr;
  }
}

class ArrayList extends Collection {
  arrayToList() {}

  listToArray() {}
}

const alist = new ArrayList();
