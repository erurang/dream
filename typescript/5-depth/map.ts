{
  type Video = {
    title: string;
    author: string;
  };

  // 음 근데 난 비디오에서 조금 수정된 타입을 가지고싶어!
  type VideoReadonly = {
    readonly title: string;
    readonly author: string;
  };
  // 근데 저렇게 하나하나 타입을 적어줘야하는것일까? no 맵타입을 만들자

  type Optional<T> = {
    // P라는것은 T의 키 //
    [P in keyof T]?: T[P];
  };

  type VideoOptional = Optional<Video>;
  // type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //   };
  const videoOp: VideoOptional = {};

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {};

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const videoRead: ReadOnly<Video> = {
    title: "zz",
    author: "zz",
  };

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  const test: Nullable<Video> = {
    // T[P]가 되거나 null값이 가능하다고 정해두어서 이런 타입도 가능함
    // title:'zz',
    title: null,
    author: "zz",
  };
}
