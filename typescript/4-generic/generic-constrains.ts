{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time!");
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time");
    }
    workPartTime() {}
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const one = new FullTimeEmployee();
  // console.log(one.pay);
  // console.log(one.workFullTime);

  const two = new PartTimeEmployee();
  // console.log(two.pay);
  // console.log(two.workPartTime);

  const onePay = pay(one);
  const twoPay = pay(two);

  onePay.workFullTime();
  twoPay.workPartTime();

  const obj1 = {
    name: "erurang",
    age: 20,
  };

  const obj2 = {
    animal: "dog",
  };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj1, "name"));

  console.log(getValue(obj2, "animal"));

  // 오류!
  console.log(getValue(obj2, "name"));
}
