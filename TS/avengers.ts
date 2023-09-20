/**
 * 두개의 클래스를 상속을 받지 않고 합치는 것!
 */

interface Avengers {
  moveout(): void;
}

// 정석대로 가면 Avenger라는 사람에 무기를 붙인다는 느낌
// 아래에서 peter를 생성자로 받음! peter를 발전시키는 것임!
class Avenger implements Avengers {
  constructor(public name: string) {}
  moveout() {
    console.log(this.name);
  }
}

// 데코레이터!
// 공통기능을 여기다가 모아두면 되는 것임!
class BaseAvengers {
  constructor(public avenger: Avengers) {}
  moveout() {
    this.avenger.moveout();
  }
}

// implements하면 스파이더맨은 어벤져스 타입이 되는 것임!
class SpiderMan extends BaseAvengers {
  moveout() {
    super.moveout();
    console.log("Spider Web!!");
  }
}

// 데코레이터 사용 전
// class IronMan implements Avengers {
//   moveout() {
//     console.log("ParmFire!");
//   }
// }
class IronMan extends BaseAvengers {
  moveout() {
    super.moveout();
    console.log("ParmFire!");
  }
}

const hero = new Avenger("Peter");
// const hero1 = new SpiderMan(hero);
// hero1.moveout();

// const hero2 = new IronMan(hero);
// hero2.moveout();

// 클래스 데코레이터 패턴!
const newHero = new IronMan(new SpiderMan(hero));
newHero.moveout();
console.log("--------------------------------");
