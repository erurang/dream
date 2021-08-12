{
    // array
    const fruits :string[] = ['사과','바나나']
    const scores2: Array<number> = [1,3,4]

    // 인자로받은 데이터를 함수내부에서 변경하지않도록 readonly
    function printArray(fruits: readonly string[]) {
        // readonly기 때문에 push불가
        // fruits.push()
    }

    // tuple 
    // 첫인자는 문자 2인자는 숫자
    let student: [string,number];
    student =['ㅋㅋ',1]
    student[0] // ㅋㅋ
    student[1] // 1
    
    // nage age에 student의 타입이 들어가게됨
    const [name,age] = student 
}