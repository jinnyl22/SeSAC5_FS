// 의존 관계 예시

// class Cheeze {
//   cheezePizza() {
//     console.log("cheeze pizza");
//   }
// }

// class Pizza {
//   ingrediens: Cheeze;
//   constructor() {
//     this.ingrediens = new Cheeze();
//   }
// }
// const p = new Pizza();
// p.ingrediens.cheezePizza();

// ------------------------------------------

// 생성자를 이용한 의존성 주입

// 의존 관계를 인터페이스로 추상화
interface Ingrediens {
  changePizza(): void;
}

class Pizza {
  constructor(public ingrediens: Ingrediens) {}
  makePizza() {
    this.ingrediens.changePizza();
  }
}

class Cheeze {
  changePizza() {
    console.log("cheeze pizza");
  }
}

class Mushroom {
  changePizza() {
    console.log("mushroom pizza");
  }
}

// 의존 관계를 외부에서 주입
const cp = new Pizza(new Cheeze());
cp.makePizza();
const mp = new Pizza(new Mushroom());
mp.makePizza();
