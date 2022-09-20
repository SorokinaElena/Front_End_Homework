//alert('Hello'); // всплывающее модальное окно, невозможно стилизовать

// prompt - аналог alert с вводом данных - будем имитировать сбор данных из формы
// const first_name = prompt('What is your name?'); // if const - it is impossible to assign const
// console.log(first_name);

// const last_name = prompt('What is your last name?');
// console.log(`Hello ${first_name} ${last_name}`);

// const age = prompt('What is your age?');
 
// if (age < 18) {
//     console.log(`Hi, ${first_name} ${last_name}! Your age is ${age}`);
// } else if (age > 18) {
//     console.log(`Hi, ${first_name} ${last_name}!`);
// } else {
//     console.log(`Hi, ${first_name} ${last_name}! Dear, your age is ${age}`);
// }

// Math.random():
// Math - объект
// .random() - метод
// text.length - length - свойство

// Сгенерируйте случайное число от 0 до 1. Округлите его до одного знака после точки. Тип выводимых данных должен быть number
// let random_number = Math.random();
// random_number = +random_number.toFixed(1);
// console.log(random_number);
// console.log(typeof random_number);

// let random_number = +Math.random().toFixed(1);
// console.log(random_number);

// Напишите условный оператор. Если случайное число больше 0.5, то выводить в консоль сообщение "Победа", если меньше, то "Поражение". Если случайное число = 0.5 - "Ничья"
// let random_number = Math.random();
// console.log(random_number);
// if (random_number > 0.5) {
//     console.log('Victory');
// } else if (random_number < 0.5) {
//     console.log('Loss');
// } else {
//     console.log('Draw');
// }
