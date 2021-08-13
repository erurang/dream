{
  /**
   * Type Aliases
   * 우리가 타입을 만들어서 타입을 지정해줌
   */

  // 원시타입
  type Text = string;

  const name: string = "erurang";
  const name2: Text = "erurang";

  type Num = number;
  const age: number = 1;
  const age2: Num = 2;

  // 오브젝트
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "zzz",
    age: 1234,
    //
    // dog : 'zzz', //이름이 달라서 오류
    // age : '1234' // number형식이 아니라서 오류
  };

  /**
   * String litieral types
   */

  type Name = "name";
  let erurangName: Name;
  //    erurangName = '변경할수없음'
  // 왜냐하면 type Name자체에서 Name은 name이라고 정의해두엇기 떄문에
  // 아래처럼밖에 사용할수없음

  erurangName = "name";
}
