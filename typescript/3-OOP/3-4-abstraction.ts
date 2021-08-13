{
  // 추상화
  // 1. 사용자에게 꼭 필요한 정보만 보여주도록 private함
  // 2. interface를 통해서 지정해줄수도있음

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
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
  const maker = new CoffeeMachine(30);

  // maker에 너무 많은
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(3);
}
