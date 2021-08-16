{
  // 타입 엘리어스와 인터페이스의 차이

  // 타입과 인터페이스 선언
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  const obj1: PositionType = { x: 1, y: 1 };
  const obj2: PositionInterface = { x: 1, y: 1 };

  // 클래스에도 똑같이 가능
  class Pos1 implements PositionType {
    x = 1;
    y = 1;
  }
  class Pos2 implements PositionInterface {
    x = 1;
    y = 1;
  }

  // 인터페이스와 타입 확장하기
  // 1. 새로운 인터페이스를 만드는 방법
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  // 2. 같은이름의 인터페이스를 만드는 방법
  //   interface PositionInterface {
  //       z:number
  //   }

  type ZPositionType = PositionType & { z: number };

  // 타입얼라이어스는 선언된것을 다른타입으로 적용할수있음
  type Person = {
    name: string;
    age: number;
  };

  // 타입 네임은 펄슨['name']타입이라고 지정가능
  type Name = Person["name"];
  type Number = Person["age"];

  // OOP에서 공부햇듯이 interface는 구현해놓은걸 쓰라고 정해주는 느낌이면
  // 타입은 단순히 데이터타입을 정해주는 느낌으로 보면된다.
}
