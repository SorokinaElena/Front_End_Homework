let string = '7';
console.log(typeof string)


let number = +string;
console.log(typeof number);
console.log(number);

let a = Math.pow(10, 3); // возведение в степень
let b = Math.abs(5); // возвращает 5 - абсолютное значение какого-либо числа - свмо число со знаком +
let bb = Math.abs(-5); // возвращает 5

let d = Math.ceil(4.33); // округление до потолка - до первого круглого числа сверху
let dd = Math.floor(4.33); // округление до пола - до первого круглого числа снизу
let ddd = Math.round(4.33); // округление по правилам математики
console.log(d);
console.log(dd);
console.log(ddd);

let d_1 = Math.ceil(-4.33); // округление до потолка - до первого круглого числа сверху
let dd_1 = Math.floor(-4.33); // округление до пола - до первого круглого числа снизу
let ddd_1 = Math.round(-4.33); // округление по правилам математики
console.log(d_1);
console.log(dd_1);
console.log(ddd_1);

// -3
// -4
// -4.33
// -5

let min = Math.min(5, 34, -100, 56, 777);
let max = Math.max(5, 34, -100, 56, 777);
console.log(min);
console.log(max);

let random = Math.random(); // возвращает случайное дробноечисло от 0 до 1
console.log(random);

// генерация случайного целого числа от 0 до 10:
let step_1 = Math.random(); // выводит случайное число от 0 до 1
let step_2 = step_1 * 10; // случайное число из шага 1 * 10
// let step_2 = step_1 * 10 + 1; // смещаем диапазон с (0 до 10) на с (1 до 11)
// let step_2 = step_1 * 10 + 2; // смещаем диапазон с (0 до 10) на с (2 до 12)
// let step_2 = step_1 * 10 + 10; // смещаем диапазон с (0 до 10) на с (10 до 20)
let step_3 = Math.round(step_2); // округляет число из шага 2 по правилам математики

let random_num = Math.round(Math.random() * 10); // будет искать числа в диапазоне от 0 до 10
let random_num_2 = Math.round(Math.random() * 10 + 1); // будет искать числа в диапазоне от 1 до 11
let random_num_3 = Math.round(Math.random() * 10 + 2); // будет искать числа в диапазоне от 2 до 12
let random_num_4 = Math.round(Math.random() * 9); // будет искать числа в диапазоне от 0 до 9 - сделали диапазон 0 - 9 
let random_num_5 = Math.round(Math.random() * 9 + 1); // будет искать числа в диапазоне от 1 до 10 - сделали диапазон 0 - 9 и сдвинули его на 1

console.log(step_1);
console.log(step_2);
console.log(step_3);
console.log(random_num);

// напишите программу, которая выводит случайное число от 15 до 25
let random_num_15_25 = Math.round(Math.random() * 10 + 15);
// let random_num_15_25 = 15 + Math.round(Math.random() * 10);
// let random_num = Math.floor(Math.random() * 11); // будет искать числа в диапазоне от 0 до 10
console.log(random_num_15_25);

