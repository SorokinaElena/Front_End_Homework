// функция - это всегда какое-то действие, методы - тоже функции

// правила наименования фукций:
// настоящие английские слова
// снэк или кэмел кейс
// первое слово в наименованиии функци - глагол:
// getSum show sum divide


//способы записи функций в js:

//1. function declaration - через объявление функции: - может быть вызвана в любом месте - даже до ее объявления в коде
// !!! функция может быть объявлена в любом месте!!!! в т.ч. по ходу написание кода функция может быть сначала вызвана, а том уже объявлена в коде - не относится к вторым 2м способам объявления функций
// !!! 
// function sum() {
// тело функции - что должно происходить при вызове функции
// }

// sum(); // вызываем функцию

// функция, возвращающая результат сложения 2х чисел:
// function res_sum() {
//     return 4 + 4;
// }
// console.log(res_sum);

// function res_sum_1() {
//     let a = 10 + 10;
    //console.log(a);
//     return a;
// }
// console.log(res_sum_1());

// function res_sum() {
//     return 1 + 1;
// }
// console.log(res_sum());

// function res_sum_2(num1, num2) {
//     let a = num1 + num2;
//     return a;
// }
// console.log(res_sum_2(1,2));
// console.log(res_sum_2(10,10));
// console.log(res_sum_2(100,100));

// function getGreeting (first_name) {
//     return `Hello ${first_name}`;
// }
// console.log(getGreeting(`Olga`));
// console.log(getGreeting(`Elena`));
// console.log(getGreeting(`Sergej`));

// установка зачений по умолчанию:
// function getSum (num1, num2 = 3) {
//     return num1 + num2;
// }
// console.log(getSum(5)); //-> Nan = 5 + undefined
// 5 + '5'= 55
// 5 + true = NaN
// num2 = 3 - задаем значение по умолчанию

// function getGreeting (first_name = 'Elena') {
//     return `Hello ${first_name}`;
// }
// console.log(getGreeting());


// чтобы работать с результатом функции, она должна что-то обязательно возвращать - для этого используется ключевое слово return
// наличие аргументов позволяет шаблонизировать функцию

// Напишите функцию, прнимающую три аргумента и возвращающую результат умножения чисел друг на друга. Значение последнего аргумента по умолчанию должно быть = 1
// function getMultiplication (num1, num2, num3 = 1) {
//     // const num3 = 1;
//     return num1 * num2 * num3;
// }
// console.log(getMultiplication(2, 2, 2));

// Напишите функцию, принимающую 2 аргумента firstName age и возвращающую сообщение в формате "Hello, firstName. Your age is age" По умолчанию указать значение Elena для firstName 18 для age
// function getGriting (firstName = 'Elena', age = 18) {
//     return `Hello, ${firstName}. Your age is ${age}`;
// }
// console.log(getGriting('Denis', 7));
// console.log(getGriting());
// console.log(getGriting(undefined, 7));

// Напишите функцию, которая принимает в себя 2 аргумента и возвращает результат деления большего числа на меньшее
// function getMaxMinDivisionRes (num1, num2) {
//     if (num1 > num2) {
//         return num1 / num2;
//     } else {return num2 / num1}
// }
// console.log(getMaxMinDivisionRes(2, 100));
// console.log(getMaxMinDivisionRes(2, 50));


// function getMaxMinDivisionRes_1 (num1, num2) {
//     return Math.max(num1, num2) / Math.min(num1, num2);
// }
// console.log(getMaxMinDivisionRes_1(2, 400));
// console.log(getMaxMinDivisionRes(2, 300));

//1. function declaration - через объявление функции:
// function greeting_declaration(name, lastName) {
//     return `Hello ${name} ${lastName}!`;
// }
// console.log(greeting_declaration('Olga', 'Petrova'));


//2. функциональные выражения: - function expression - вызываются только после объявления функции
// let greeting = function getHello (name, lastName) {
//     return `Hello ${name} ${lastName}!`;
// }
// console.log(greeting('Olga', 'Petrova'));

//3. стрелочные функции - arrow function
// примерно то же, что и функциональные выражения, но немного видоизмененные
// синтакси стрелочной функции:

// let greeting_arrow = () => {
//     return
// }

// let greeting_arrow = (name, lastName) => {
//     return `Hello ${name} ${lastName}!`;
// }
// console.log(greeting_arrow('Olga', 'Petrova'));

// Если функция состоит из одной строки, то можно сократить код и избавиться от {} и return
// let greeting_arrow_1 = (name, lastName) => `Hello ${name} ${lastName}!`;
// console.log(greeting_arrow('Olga', 'Petrova'));

// методы уже написаны и вшиты в js, все методы - это функции, не все функции являются методами - есть самописные функции
// let text = 'hello world'
// text.toUpperCase();

