{
  // 추상화
  // 1. 사용자에게 꼭 필요한 정보만 보여주도록 private함
  // 2. interface를 통해서 지정해줄수도있음

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error("0이하는 안돼");

      this.coffeeBeans += beans;
    }

    clean() {
      console.log("기계닦는중..");
    }

    private grindBeans(shots: number) {
      console.log(`커피를 갈고있어 ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("커피콩이 적어");
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log("커피데우는중...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`커피추출중.. ${shots}`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 클래스를 생성한후에 maker의 타입을 interface로 지정해주면
  // 우리는 interface안에 지정된 것만 접근이 가능하다
  const maker: CommercialCoffeeMaker = new CoffeeMachine(30);

  // interface에 makeCoffee만 선언해두어서 fillCoffee는 오류가 뜨는걸 볼수있다.
  // maker.fillCoffeeBeans(32);
  maker.makeCoffee(3);

  // 선언후엔 가능
  maker.fillCoffeeBeans(32);
}
