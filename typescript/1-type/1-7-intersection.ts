{
  /**
   * Intersection Types : &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    // person은 타입2개를 합쳐놓앗기 떄문에 모든 타입에 접근이 가능함
    //  person.name person.employeeId person.work person.score
  }

  // & 타입을두개 합치것이기때문에 모든 타입을 적어줘야함
  internWork({
    name: "zz",
    score: 1,
    employeeId: 1,
    work: null,
  });
}
