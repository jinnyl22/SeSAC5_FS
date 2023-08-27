/**
 * Animal클래스가 있고 Dog랑 Cat의 클래스 합쳐보기
 * 동물이 여러 종류가 있어도 합칠 수 있어야 함
 */

class Animal {
  bark() {
    return console.log("동물 울음소리");
  }
}

// baseBark 클래스를 하나 더 만들어서 동물끼리 합칠 수 있게

// Dog가 데코레이터 역할..?
class Dog extends Animal {
  constructor(animalBark) {
    super();
    this.animalBark = animalBark;
  }
  bark() {
    return `arrrr 와 ${this.animalBark.bark()}`;
  }
}

class Cat extends Animal {
  bark() {
    return "miyaooooo";
  }
}

class Duck extends Animal {
  bark() {
    return "ggaeck";
  }
}

const dogCat = new Dog(new Cat());
const dogDuck = new Dog(new Duck());

console.log(dogCat.bark());
console.log(dogDuck.bark());
