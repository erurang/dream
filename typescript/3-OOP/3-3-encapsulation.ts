{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // 나머지 인자를 private로 숨겨놓음으로써 우회적으로 접근하여 변수를 수정할수있게 해주는 함수
    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error("0이하는 안돼");

      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("커피콩이 적어");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(30);
  // constructor도 private일땐
  //   const maker = CoffeeMaker.makeMachine()

  // 클래스내 변수에 접근하여 내 클래스의 값을 변경시킬수있음.
  // maker.coffeeBeans = -100
  // 이것을 숨기는것이 캡슐화 => private

  console.log(maker);

  maker.fillCoffeeBeans(32);

  console.log(maker);

  // protected도 있는데 이것은 클래스를 상속한 자식만 사용가능하게만듬
  // 그럼 new 클래스명()과 class내에서 static으로 선언된 클래스.생성함수 는 무슨차이일까?
  //   factory method 패턴이라고 해요 :)
  // 어떤 클래스를 이용해서 인스턴스를 만드는지, 이런 복잡한 상속 구조와 만드는데 필요한 데이터관련된 정보를 숨길 수 있죠.

  // 이렇게 사용하는 사람이 모든 클래스 타입에 대해 알필요 없도록
  // new BlueCar();
  // new YellowFancyCar();

  // 이렇게 해볼수도 있겠죵 :)
  // const car = Car.make('blue');
  // const car = Car.make('yellow');
}
