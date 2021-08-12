{
    // js
    function jsAdd(num1,num2) {
        return num1+num2
    }

    // ts
    function tsAdd(num1:number,num2:number):number {
        return num1+num2
    }

    // js
    function jsFetchNum(id) {
        return new Promise((res,rej) => {res(100)})
    }
    // ts
    // :Promise -> :Promise<number> ==>  Promise를 하고 리턴값은 number일것이다
    function tsFetchNum(id:string):Promise<number> {
        return new Promise((res,rej) => {res(100)})
    }

    // js
    // optional parameter
    // 전달해도되고 안해도되는 인자에 ? 붙여줌
    function printName(firstName:string, lastName?:string) {
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve','Jobs')
    printName('erurang')

    // default parameter
    function printMessage(message:string = 'default message') {
        console.log(message);
    }
    printMessage()

    // rest parameter
    function addNumbers(...numbers:number[]):number {
        return numbers.reduce((a,b) => a+b)
    }

    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3));
    console.log(addNumbers(1,2,3,4));
// number숫자로 이루어진 [] 배열을 인자로 받기떄문에 'zz'는 안댐.
    // console.log(addNumbers(1,2,3,4,'zz'));
}   