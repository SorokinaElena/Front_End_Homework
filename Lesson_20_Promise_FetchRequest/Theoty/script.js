// js - синхронность - последовательность (в программировании все операции идут последовательно):
// let a = 10;
// a = 34;
// console.log(a);

// ассинхронность (имитация ассинхронности):

// setTimeout(() => {
//     a = 34;
//     console.log(a)
// }, 2000)

// console.log(a);

// Promise нужен, чтобы заставить программу дождаться ответа на запрос и только после этого выполняь код дальше - нужен для избежания вложенности
// Fetch-запрос всегда ассинхронная операция - т.к. ответ на запрос с сервера приходит с какой-то задержкой

// call-back функция resolve будет выполняться при успешном ответе на запрос, reject - при неуспешном:
// let promise_example = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(a = 34);
//     }, 2000)
// })

// Обработчик promise:
// promise_example.then((resolve) => console.log(a),
//    (reject) => 
// )

// const random_num = new Promise((resolve, reject) => {
//     if(Math.random() >= 0.5) {
//         resolve(10)
//     } else {
//         reject()
//     }
// })

// random_num.then(
//     (value) => console.log('>= 0.5' + value),
//     () => console.log('< 0.5')
// )

const random_num = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a >= 0.5) {
        resolve(a)
    } else {
        reject(a)
    }
})

random_num.then(
    (value) => console.log(`${value} >= 0.5`),
    (value) => console.log(`${value} < 0.5`)
)