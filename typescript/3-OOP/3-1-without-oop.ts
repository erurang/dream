{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  let coffeeBeans: number = 0;
  const BEANS_GRAMM_PER_SHOT: number = 7;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffe beans!");
    }

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
