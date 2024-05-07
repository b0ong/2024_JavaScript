# JavaScript

- consol.log()
- document.write()
- window.alert()
- document.getElementByld().innerHTML


    - let : 지역변수
    - const : 상수
    - var : 함수 레벨 스코프


### 전역변수
- 키워드 없이 사용되는 변수
```javascript
 n = 10;
 console.log(n);
 let n1 = 100;
 console.log(n1);
 // let 이나 const 등 키워드가 없음.
```

### 지역변수
```javascript
 {
     let name = 'scott';     // 지역변수
     console.log(name)
     name = 'adam';
     console.log(name)
     console.log(n);         // 전역변수 사용가능
     console.log(n1);
 }
 console.log(name);      // 지역변수로 사용불가능
```

### 변수 호이스팅
- 선언전에 초기화나 함수 호출이 가능하다.\
  이는 변수 선언이 런타입이 아니라 그 이전단계에서 먼저 실행되기 때문이다.
```javascript
     var a;
     console.log("a의 값은 " + a);     // 원래의 방식
     console.log("b의 값은 " + b);     // b의 값을 나중에 선언
     var b;

     console.log("c의 값은 " + c);
     let c;
     let d;
     console.log("d의 값은 " + d);
    
     console.log(x === undefined);      // ===은 비교연산자
     var x = 3;
    
     var myvar = "my value";
     console.log(myvar);
     (
         function () {      // 함수를 사용할 때는 funtion을 사용한다.
             console.log(myvar);     // undefined
             var myvar = 'local value';
             var m1 = "local";
         }
     )();
     console.log(myvar);
     console.log(m1);
```

### 함수 호이스팅
```javascript
sayHello();
    function sayHello() {
        console.log('Hello');
    }
    let name = 'scott';
    console.log(name);
    name = 1200;
    console.log(name);
    name = 'hong';
    const message = `My name is ${name}`;
    console.log(message)
    // number, string, boolean, null, undefined, symbol(ES6), obj
    console.log(typeof 100);
    let pi = 3.14;
    console.log(typeof pi);     // number: -2^53 ~ 2^53;
    let nothing = null;
    console.log(`value: ${nothing}, type: ${typeof nothing}`);
    let x;
    console.log(`value: ${x}, type: ${typeof x}`);
    const infinity = 1 / 0;
    console.log(infinity);
    const negativeInfinity = -1 / 0;
    console.log(negativeInfinity);
    const nAn = 'not a number' / 2;
    console.log(nAn);
```

### String
```javascript
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
```