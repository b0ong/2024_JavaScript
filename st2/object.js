/* object - key: 'value' 문자열 */
/*
// 1 function
const name = 'adam';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}
// 2 object
const obj1 = {};    // object literal syntax
const obj2 = new Object();  // object constructor syntax

const scott = {name: 'scott', age: 25}  // 클래스가 없어도 객체 생성가능
console.log(scott);
scott.gender = true;    // 외부에서 속성(프로퍼티) 추가 가능
console.log(scott.gender);
delete scott.gender;        // 프로퍼티 삭제
console.log(scott.gender);

console.log(scott.name);        // 일반적으로 사용하는 형태 -> 프로그램 작성할 때 사용
console.log(scott["name"]);     // 동적인 경우에 사용하는 형태

function printValue(obj, key) {
    console.log(obj.key);
    console.log(obj[key]);
}
printValue(scott, 'name');
// in       프롬포트 안에 속성 값이 있는지 확인
console.log('name' in scott);
console.log('age' in scott);
console.log('gender' in scott);
for (key in scott) console.log(key)
// for (key of scott) console.log(key)
const array = [1, 2, 3, 4, 5];
// in & of 의 차이점
for (value of array) console.log(value) // 배열의 값을 출력
for (value in array) console.log(value) // index 값을 출력
 */

// cloning copy
const user = {name: 'ellie', age: 19}
const user2 = user;
console.log(user);
console.log(user2);
user2.name = 'alis';
console.log(user);
console.log(user2);

const user3 = {};
Object.assign(user3, user);
user2.name = 'adam';
console.log(user);
console.log(user2);
console.log(user3);

const fruit1 = {color: 'red'}
const fruit2 = {color:'blue', size: 'mid'}
const mixed = Object.assign({}, fruit1, fruit2);        // 제일 오른쪽이 왼쪽으로 복사됨
console.log(mixed.color);
console.log(mixed.size);