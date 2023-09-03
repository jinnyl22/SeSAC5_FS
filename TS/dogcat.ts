/**
 * 인터페이스를 쓰지 않고 메서드로 합침
 */

class Animal {
  #name;
  constructor(name: string) {
    this.#name = name;
  }
  bark() {}
  getName() {
    return this.#name;
  }
}

class BaseAnimal extends Animal {
  // 오버라이딩
  private ani: Animal;
  constructor(aniOrName: string | Animal) {
    if (typeof aniOrName === "string") {
      super(aniOrName);
      this.ani = new Animal(aniOrName);
    } else {
      super(aniOrName.getName());
      this.ani = aniOrName;
    }
  }

  // constructor(aniOrName: string | Animal) {
  //   super(typeof aniOrName === "string" ? aniOrName : aniOrName.getName());
  //   this.ani = typeof aniOrName === "string" ? new Animal(aniOrName) : aniOrName;
  // }
  bark(): void {
    super.bark();
    this.ani.bark();
  }
}

class Dog extends BaseAnimal {
  bark() {
    super.bark();
    console.log("멍멍");
  }
}
class Cat extends BaseAnimal {
  bark() {
    super.bark();
    console.log("야옹");
  }
}

const x = new Dog(new Cat("개냥이"));
x.bark();

class X {
  constructor(public id: number) {}
  f() {
    console.log("f >>", this.id);
  }
}

const xx = new X(123);

console.log("----------------------------------------");

//
const fns = {
  id: xx.id,
  //   f: xx.f(),
  // 이렇게 가져온 건 f라는 <f.o>를 그냥 가져온 것!
  // function pool에 있는 <f.o>를 참조하고 있기 때문에
  // fns의 env와 x의 env가 같은 <f.o>를 바라보고 있지만 호출되었을 때의 this는 다름!
  f: xx.f,
  barkDog() {
    console.log("멍!멍!멍!");
    return this;
  },
  barkCat() {
    console.log("야옹야옹~");
    return this;
  },
};

// 이런 패턴이 디자인패턴에서 빌더 패턴임!
// fns.barkCat().barkDog();
// apply를 안주면 f는 undefined가 된다! this로 xx를 넣어준것
// fns.barkCat().barkDog().f.apply(xx);
fns.barkCat().barkDog().f();
// fns.barkCat();
// fns.barkDog();
