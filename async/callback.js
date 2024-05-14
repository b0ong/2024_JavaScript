// async
/*
1. callback
2. promise - 콜백함수 대신에 사용하는 비동기 오브젝트
3. async await
promise - 콜백함수 대신에 사용하는 비동기 오브젝트. producer와 consumer를 연결해주는 특별한 js객체
        promise를 사용해서 비동기 실행 함수를 만들고 실행 결과가 성공되면 resolve(value)를 호출하여 결과값을 consumer에게 전달한다.
        실패하면 reject(error)를 호출하여 에러를 전달한다.
        대기(pending)
        이행(fulfilled)
        거부(rejected)
        consumer: .then()
*/

// synchronous
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');

// async
console.clear();
console.log('1');
setTimeout(() => {      // 브라우저 API
    console.log('2');
}, 2000);
console.log('3');

function printImmedi(print) {
    print();
}

printImmedi(() => console.log("Hello!"));

function printDelay(print, timeout) {
    setTimeout(print, timeout);
}

printDelay(() => console.log('async callback'), 4000);
