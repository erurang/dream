{
  const obj = {
    name: "erurang",
  };

  obj.name; // erurang
  obj["name"]; // erurang

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  //
  type Name = Animal["name"];

  // 이제 문자열만 할당가능
  const text: Name = "string";
  //   const text2: Name = 123;a

  type Gender = Animal["gender"]; // 'male' | 'female' 과 같음

  type Keys = keyof Animal; // Animal의 키로 할다댐, 즉 name | age | gender 라는 문자열 유니온 타입이됨

  const key: Keys = "age"; // age/name/gender만 가능

  type Person = {
    name: string;
    gender: Gender;
  };

  const person: Person = {
    name: "zz",
    gender: "female",
  };
}
