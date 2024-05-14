// state: pending -> fulfilled or rejected
//1. promise
// promise를 생성하는 순간에 자동으로 실행된다.

// const promise = new Promise(() =>{
//         console.log('doing something...');
//     });
/*
let promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        resolve('adam');        // 실행이 정상적으로 완료되면 resolve 호출
    }, 4000);
});
promise.then((value) => {
    console.log(value);
});
 */
// resolve() 가 전달한 값 'adam'을 than()을 통해서 받아온다.
/*
let promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        resolve('Eve');
        reject(new Error('no network'));
    }, 2000);
});

promise
    .then((resDate) => {
    console.log(resDate);
})
    .catch((error) => {     //.then.catch()
        console.log(error);
    })
    .finally(() => {       // 무조건 실행된다.
        console.log('Run unconditionally!!')
    });
 */
let fetchNumber = new Promise((resolve,reject) => {
    setTimeout(() => resolve(1), 1000);
});
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1);
            },1000);
        })
}).then(num => console.log(num));

// Error
let getHan = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🐓');
        },1000);
    });
}

let getEgg = (hen) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🐣');
        }, 1000);
    });
}

getHan()
    .then(hen => getEgg(hen))
    .then(egg => console.log(egg));