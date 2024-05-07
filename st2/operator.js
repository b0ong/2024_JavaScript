document.open();
// // 일치 연산자
// let num = 10;
// let str = '10';
// if (num == str) console.log('같다');   // 값만 비교
// if (num === str) console.log('같다');     // 값 + 타입 비교
// else console.log('다르다');
//
// console.log(0 == false);        // 동등연산자
// console.log(0 === false);       // 일치연산자
// console.log('' == false);
// console.log('' === false);
// console.log(null == undefined);
// console.log(null === undefined);
//
// // 제어문
// // 선택
// const name = 'adam';
// if (name === 'adam') {
//     console.log("Welcome Adam!!");
// } else if (name === 'scott') {
//     console.log("Welcome Scott!!");
// } else {
//     console.log("누구냐 넌..");
// }
//
// console.log(name === 'smith' ? 'yes' : 'no');
//
// /* switch */
// const brower = 'Chrome';
// switch (brower) {
//     case 'IE':
//         console.log('Microsoft');
//         break;
//     case 'Firefox':
//         console.log('Mozilla');
//         break;
//     case 'Chrome':
//         console.log('Google');
//         break;
//     default:
//         console.log('unknown');
//         break;
// }
// // 입력한 숫자가 3의 배수인지 확인하는 프로그램 작성
// let num1 = prompt("숫자를 입력하세요.");
// // const result = Number(num1);
//
//     if (num1 === null) {
//         alert("다시 입력하세요.");
//     } else {
//         if (num1 % 3 === 0) {
//             alert("3의 배수 입니다.");
//         } else {
//             alert("3의 배수가 아닙니다.");
//         }
//     }
//
// let session = prompt("관심 세션을 선택해 주세요. 1.마케팅, 2.개발, 3.디자인");
//
// switch (session) {
//     case "1":
//         document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>")
//         break;
//     case "2":
//         document.write("<p>개발 세션은 <strong>202호</strong>에서 진행됩니다.</p>");
//         break;
//     case "3":
//         document.write("<p>지다인 세션은 <strong>205호</strong>에서 진행됩니다.</p>");
//         break;
//     default:
//         alert("잘못 입력하셨습니다.")
// }

// <script> 태그에 defer 속성이 있으면 document 객체를 바로 사용할 수 없다.

// 반복문
// for
// for (let i = 5; i > 0; i--) {
//     console.log(`for: ${i}`);
// }
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// document.write("전부 더한 값은 " + sum);
//
// let ary = [10, 20, 30, 40, 50];
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// for (let i of ary) {    // 인덱스를 사용할 수 없다.
//     console.log(i);
// }
// let i = 5;
// while (i > 0) {
//     console.log(`while: ${i}`);
//     i--;
// }
//
// 1 입력된 구구단 출력
// 2 1단부터 9단까지 출력
// 3 0부터 100까지 4의 배수를 출력(continue)
// 4 입력된 숫자만큼 카운터하시오

// 1번
// let num = prompt("숫자를 입력하시오.");
//
// for (let i = 1; i <= 9; i++) {
//         document.write(`${num}X${i}=${num*i}<br>`);
//
// }

// 2번
// for (let i = 1; i <= 9; i++) {
//     document.write(`<p>${i}단</p>`)
//     for (let j = 1; j <= 9; j++) {
//         document.write(`${i}X${j}=${i*j}<br>`)
//     }
// }

// 3번
for (let i = 0; i <= 100; i++) {
    if (i % 4 !== 0) {
        continue;
    }
    document.write(`${i}<br>`)
}

// 4번
// let num = prompt("숫자를 입력하시오.");
// for (let i = 1; i <= num; i++) {
//     document.write(`${i}<br>`)
// }
document.close();