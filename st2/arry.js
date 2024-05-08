/* 배열 */
// 배열생성
/*
const arr1 = new Array();
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

const fruits = ['🍎', '🍐']
console.log(fruits);
// for
for (let i = 0; i < 2; i++) {
    console.log(fruits[i]);
}
// for of
for (let fruit of fruits) {
    console.log(fruit);
}
// forEach
fruits.forEach(function (fruits, index, array) {        // 함수
    console.log(fruits, index, array);
});
// 콜백함수: 원하는 형태로 출력을 갖기 때문에 사용한다.
fruits.forEach((fruits, index) => {      // 에로우 함수: ()부분이 입력 {} 출력
    console.log(fruits, index);
});

fruits.forEach((fruit) => console.log(fruits));
 */
// 배열의 삽입과 삭제
/*
let ary = [1, 2, 3, 4, 5];
console.log(ary.length);
ary.push(10);       // 배열의 원소를 마지막에 추가한다.
console.log(ary.length);
console.log(ary);
ary.unshift(0);     // 배열의 원소를 맨앞에 추가한다.
console.log(ary.length);
console.log(ary);
ary.pop();  // 배열의 마지막 원소를 삭제한다.
console.log(ary.length);
console.log(ary);
ary.shift();    // 배열의 맨 앞 원소를 삭제한다.
console.log(ary.length);
console.log(ary);
*/
// splice
const fruits = ['🍎', '🍐']
console.log(fruits);
fruits.push('🍊','🍌','🍓','🥝')
console.log(fruits);
fruits.splice(1, 1);    // (시작인덱스, 삭제갯수, 추가갯수)
console.log(fruits);
fruits.splice(3, 2);
console.log(fruits);
fruits.splice(1, 1, '🍓', '🥝');
console.log(fruits);
// concat
const fruits2 = ['🍒','🥑']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
// searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍓'));   // 인덱스 리턴
console.log(fruits.indexOf('🍌'));
console.log(fruits.includes('🍍'));  // 인덱스 값이 있으면 true, 없으면 false 출력
console.log(fruits.includes('🍓'));
