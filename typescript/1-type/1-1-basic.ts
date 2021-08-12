{
    /**
     * Javascript
     * 원시타입 : number,string,boolean,bigint,symbol,null,undefiend
     * 오브젝트 : function, array....
     */

    // number
    const num:number = 0
    
    // string
    const str:string = ''

    // bool
    const  boal:boolean = true || false

    // undefiend 
    // 값이 있는지 없는지 결정안됨
    let name: undefined;

    // age는 숫자이거나 undefiend다
    let age: number | undefined;
    age = 1
    age = undefined

    // null
    // 값이 비었음

    // unknown === any
    // 어떤 타입인지 알수가없음..
    // 어떤데이터든 가능
    let notSure : unknown
    notSure = 'he'
    notSure = true

    // 함수리턴
    // void
    // 아무것도 리턴안할때
    function print():void {
        console.log('hello');
        
    }
    // never
    // 암만기다려도 값이 절대로 반환되지않아..
    function throwError(message:string):never {
        // message => server (log)
        throw new Error(message)
    }

    // object

    let obj: object // [] {} 둘다가능하기에.. 사용안하는것이좋음
    function acceptObj(obj:object) {}

}