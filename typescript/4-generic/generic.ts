{
  // 만약 null인지 아닌지 판단하는 함수를 만들려 할때.

  function checkNotNullNumber(arg: number | null): number {
    if (arg == null) throw new Error("not valid number");
    return arg;
  }

  const res = checkNotNullNumber(123);

  // 이번엔 문자를 받았을때.. null인지 판별..
  function checkNotNullString(arg: string | null): string {
    if (arg == null) throw new Error("not valid number");
    return arg;
  }

  const res2 = checkNotNullString("123");

  // 매번이렇게 타입을 체크하고 각 타입마다 checkNotnull을 만들어주기엔.. 미친짓..

  // 그럼 아예 any로 해버리면 어떨까?
  function checkNotNull(arg: any | null): any {
    if (arg == null) throw new Error("not valid number");
    return arg;
  }

  // 이때 res3은 any타입이 되어 타입 정보를 상실함.. 타입스크립트를 쓰는 이유가 사라짐
  const res3 = checkNotNull(1);

  // 이런단점을 해결하기위해 제네릭이 나타남 통상적으로 T로 표현하지만 여기선 GENERIC으로 표현함
  function checkNotNullGeneric<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) throw new Error("not valid number");
    return arg;
  }

  // 입력받은 타입으로 타입이 정해지는걸 볼수있음

  // 제네릭으로 number는 number타입이됨
  const res4 = checkNotNullGeneric(123);
  // 제네릭으로 boal은 true 타입이됨
  const res5 = checkNotNullGeneric(true);
  const res6 = checkNotNullGeneric("generic");

  // 클래스와 인터페이스에서 에서는 제네릭을 어떻게 활용할까?
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
