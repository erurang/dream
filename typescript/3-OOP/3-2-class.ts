{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 클래스를 만들어보자
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance level

    constructor(coffeeBeans: number) {
      // 인자를받아 클래스내의 coffeeBeans 갯수를 정해줌
      this.coffeeBeans = coffeeBeans;
    }

    // static은 변수뿐아니라 함수에도적용이 됨
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      // 클래스 안의 변수는 this로 참조함
      // static으로 선언된 변수는 this.변수명 이 아닌 클래스명.변수명 으로 사용해야함
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffe beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // 클래스를 이용한 오브젝트만들기
  const maker = new CoffeeMaker(30);
  console.log(maker);

  const maker2 = new CoffeeMaker(60);
  console.log(maker2);
  // 클래스가 생성될떄 BEANS_GRAMM_PER_SHOT처럼 변하지않는 클래스 멤버변수는 클래스가 생성될때마다 계속 같이 생성이됨.
  //   CoffeeMaker { coffeeBeans: 30, BEANS_GRAMM_PER_SHOT: 7 }
  //   CoffeeMaker { coffeeBeans: 60, BEANS_GRAMM_PER_SHOT: 7 }
  // static를 붙여주면 클래스가 생성될떄 같은값 선언을 막아줄수 있음
  //   CoffeeMaker { coffeeBeans: 30 }
  // CoffeeMaker { coffeeBeans: 60 }

  const maker3 = CoffeeMaker.makeMachine(4);
  console.log(maker3);
}
