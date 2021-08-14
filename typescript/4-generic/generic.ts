{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) throw new Error("not valid number");
    return arg;
  }

  const res = checkNotNullBad(123);
  console.log(res);

  function checkNotNull(arg: string | null): string {
    if (arg == null) throw new Error("not valid number");
    return arg;
  }

  // 타입에 대한 정보상실..
  //   const res2 = checkNotNull(123)
  // 매번이렇게 타입을 체크하고 각 타입마다 checkNotnull을 만들어주기엔.. 너무 많은 코드낭비가 일어남
  // 제네릭은 사용하는 사람이 어떤 타입인지 결정할수있음, 타입을 보장받을수있음

  function checkNotNull1<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) throw new Error("not valid number");
    return arg;
  }

  // 제네릭으로 number는 number타입이됨
  const number = checkNotNull1(123);
  // 제네릭으로 boal은 true 타입이됨
  const boal = checkNotNull1(true);

  // 클래스에서 제네릭 사용

  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftV: L, private rightV: R) {}

    left(): L {
      return this.leftV;
    }

    right(): R {
      return this.rightV;
    }
  }

  const either1 = new SimpleEither(4, 5);
  const either2 = new SimpleEither("zz", {});
  const either3 = new SimpleEither(true, []);

  console.log(either1, either2, either3);
}
