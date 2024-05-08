// function
// 함수 선언(정의), 호출
// func();     //함수 호출 - 함수가 실행
// func(){    // 함수 정의    - 한수를 만든다
//     ~~~~
// }
// printHello();
// function printHello() {     // 함수정의를 만드는게 제일 먼저다. -> 함수호출이 이루어진다.
//     console.log("Hello!!");
// }
// printHello();   // 함수 호출: 함수이름(입력);
//
// function log(message) {
//     console.log(message);
// }
// log();
// log('Hello!!!');
// log(123);

// function showError() {
//     alert("에러 발생, 다시 시도하세요.")
// }

// showError();
// showError. - 지원되는 내장 함수들을 볼 수 있다. 왜냐하면 함수가 객체이기 때문이다.
// 입력 파라미터를 객체로 받는 함수
/*
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'}   // ellie 객체생성
console.log(ellie);
changeName(ellie);
console.log(ellie);
// default parameters
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}

showMessage("hi");

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'javis', 'adam', 1, 2);
*/
// 함수출력
/*
function add(num1, num2) {
    return num1 + num2;
}

const res = add(10, 20);
console.log(res);
// 함수 표현식
// let func = function () {}   함수를 변수에 할당시킨다.
let showHello = function f() {
    console.log("Hello");
}
showHello();
let hiHello = showHello;
hiHello();
// 즉시 실행 함수 : 즉시 실행되며  단 한번만 호출되어 다시는 호출할 수 없다.
let res1 = (function () {
    let a = 10;
    let b = 20;
    return a + b;
}());
console.log(res1);
// 입력파라미터가 있는 즉시 실행 함수
let res2 = (function (a,b) {
    return a * b;
}(2,3));
console.log(res2)
 */
// 화살표 함수
// let func = () => {};
const simplePrint = function () {
    console.log('simplePrint');

}
console.log(simplePrint);
console.log(simplePrint());
const simplePrint1 = () => {
    console.log('simplePrint');
}
console.log(simplePrint1());
simplePrint1();
const simplePrint2 = () => console.log('simplePrint');
console.log(simplePrint2());
simplePrint2();

const add = (a, b) => {
    return a + b;
};
console.log(add(1, 2));

// const hi = () => {
//     alert("안녕하세요!");}
// hi();
document.open();
let hi1 = (user) => {
    document.write(user + "님 안녕하소");}
hi1("한국")
document.close();

// 콜백함수
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'i love you') {
        printYes();
    } else printNo();
}

const printYes = function () {
    console.log("Yes!");
};
const printNo = function () {
    console.log("No!!");
};
randomQuiz('i love you', printYes, printNo);
randomQuiz('worng', printYes, printNo);