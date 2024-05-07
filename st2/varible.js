    console.log("Hello Javascript2!!");
    console.log("Hi Javascript3!!");

    /* 변수 */
    // javascript는 타입은 따로 없다.
    // 1. 변수선언(3개의 키워드)
    // var, let, const:ES6
    // let-지역변수, 재선언 안됨, 호이스팅시 초기화 안됨 <->var
    // 호이스팅: 변수 선언이 안되어 있는데도 변수를 사용할 수 있는 것
    // const-상수
    // let name = 'adam';
    // console.log(name);

    // var age;
    // console.log(age)
    // age = 5;
    //
    // name = 4;
    // let name;
    // 전역변수: 키워드 없이 사용하면 전역변수
    // n = 10;
    // console.log(n);
    // let n1 = 100;
    // console.log(n1);
    // // 지역변수
    // {
    //     let name = 'scott';     // 지역변수
    //     console.log(name)
    //     name = 'adam';
    //     console.log(name)
    //     console.log(n);         // 전역변수 사용가능
    //     console.log(n1);
    // }
    // console.log(name);      // 지역변수 사용불가능
    //
    // /* 변수 호이스팅 */
    // var a;
    // console.log("a의 값은 " + a);
    // console.log("b의 값은 " + b);
    // var b;

    // console.log("c의 값은 " + c);
    // let c;
    // let d;
    // console.log("d의 값은 " + d);
    //
    // console.log(x === undefined);
    // var x = 3;
    //
    // var myvar = "my value";
    // console.log(myvar);
    // (
    //     function () {
    //         console.log(myvar);     // undefined
    //         var myvar = 'local value';
    //         var m1 = "local";
    //     }
    // )();
    // console.log(myvar);
    // // console.log(m1);
    //
    // /* 함수 호이스팅 */
    // sayHello();
    // function sayHello() {
    //     console.log('Hello');
    // }
    // let name = 'scott';
    // console.log(name);
    // name = 1200;
    // console.log(name);
    // name = 'hong';
    // const message = `My name is ${name}`;
    // console.log(message)
    // // number, string, boolean, null, undefined, symbol(ES6), obj
    // console.log(typeof 100);
    // let pi = 3.14;
    // console.log(typeof pi);     // number: -2^53 ~ 2^53;
    // let nothing = null;
    // console.log(`value: ${nothing}, type: ${typeof nothing}`);
    // let x;
    // console.log(`value: ${x}, type: ${typeof x}`);
    // const infinity = 1 / 0;
    // console.log(infinity);
    // const negativeInfinity = -1 / 0;
    // console.log(negativeInfinity);
    // const nAn = 'not a number' / 2;
    // console.log(nAn);

    /* String */
    /*
    const char = 'a';
    const smith = 'smith';
    const greeting = 'Hello ' + smith;
    console.log(`value: ${char}, type: ${typeof char}`);
    console.log(`value: ${smith}, type: ${typeof smith}`);
    console.log(`value: ${greeting}, type: ${typeof greeting}`);

    const msg = 18 + 'old';
    console.log(msg);
    const i = '나는 ';
    const age = 29;
    console.log(i + age + '살 입니다.');
*/
    /* boolean */
    // false: 0 , null, undefined, NaN
    // true: any other value.

    /* symbol : 고유한 식별자가 필요한 경우*/
    /*
    const str1 = 'strId';
    const str2 = 'strId';
    console.log(str1 === str2);
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
    console.log(symbol1);
    console.log(symbol2);
    console.log(typeof symbol1);
    console.log(typeof symbol2);
    console.log(symbol1 === symbol2);
    const symbol3 = Symbol.for('id');       // 입력 문자열로 키 생성
    const symbol4 = Symbol.for('id');
    console.log(symbol3);
    console.log(symbol4);
    console.log(symbol3 === symbol4);
    // 래퍼
    let str = 'javascript';
    let len = str.length;
    console.log(len);
     */
    // 자바스크립트
    let text = 'hello';
    console.log(text.charAt(0));
    console.log(`value: ${text}, type: ${text}`);
    text = 1;
    console.log(`value: ${text}, type: ${text}`);
    // console.log(text.charAt(0));
    text = '10' + 5;
    console.log(`value: ${text}, type: ${text}`);
    text = '22' / '2';
    console.log(`value: ${text}, type: ${text}`);
// const
    const bird = {species:"kestrel"}
    console.log(bird.species);
    bird.species = "Striated Caracara";
    console.log(bird.species);
    // 형변환
    console.log(String(30), String(true), String(false));
    console.log(String(null));
    console.log(Number('12345'));

    /* 출력방법 */
/*
    1. console.log - 콘솔창에 출력
    2. document.write - 웹페이지 문서에 출력
    3. alert() - 윈도우 알림창에 출력
    4. innerHTML - 웹페이지에 출력
*/
    /* 버튼 입력방법 */
/*
    1. alert()
    2. prompt()
    3. confirm()
*/
    // const name = prompt("이름을 입력하세요.");
    // alert('반갑습니다.' + name + '님');

    // 두개의 정수를 입력받아 더하시오.
    const num1 = prompt("숫자를 입력하세요.");
    const num2 = prompt("숫자를 입력하세요.");
    const result = Number(num1) + Number(num2);
    alert('더한 값은' +result + '입니다.');