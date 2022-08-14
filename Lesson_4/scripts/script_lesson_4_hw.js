
// First level: 1. Напишите функцию, которая принимает в качестве аргумента имя (строку), а возвращает сообщение в формате: Dear ИМЯ, welcome. Выведите результат в консоль. Запишите функцию в двух форматах (function declaration и arrow function).

function getGreeting (string) {
    return `Dear ${string}, welcome.`
}
console.log(getGreeting('Elena'));

let greeting = (string) => `Dear ${string}, welcome.`;
console.log(getGreeting('Elena'));

// 2. Напишите функцию, которая принимает в качестве аргументов два значения: имя и возраст. Если переданный возраст меньше 18, то функция возвращает сообщение в формате: Dear ИМЯ, you are younger than 18. Если возраст больше или равен 18, то функция возвращает сообщение в формате: Dear ИМЯ, you are adult. Запишите функцию в двух форматах (function declaration и arrow function).

function getGreeting_1 (name, age) {
    if (age < 18) {
        return `Dear ${name}, you are younger than 18`;
    } else {
        return `Dear ${name}, you are adult`;
    }
}
    console.log(getGreeting_1('Elena', 19));

let greeting_1 = (name, age) => {
    if (age < 18) {
        return `Dear ${name}, you are younger than 18`;
    } else {
        return `Dear ${name}, you are adult`;
    }
}
    console.log(greeting_1('Elena', 18));

// Second level: 3. Напишите функцию, которая принимает два числовых аргумента и возвращает результат их умножения. Значение второго аргумента должно быть указано по умолчанию 2. Запишите функцию в двух форматах (function declaration и arrow function).

function makeMultipl (num1, num2 = 2) {
    return num1 * num2;
    }
    console.log(makeMultipl(2));
    console.log(makeMultipl(2, 4));
    
    let multipl = (num1, num2 = 2) => num1 * num2; 
    console.log(multipl(3));
    
// 4. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает меньшее значение. Выведите результат в консоль. Предложите два варианта решения. Запишите функцию в двух форматах (function declaration и arrow function).

function getMin (num1, num2) {
    return Math.min(num1, num2);
}
console.log(getMin(1000,1));

let minNum = (num1, num2) => Math.min(num1, num2);
console.log(minNum(2,10));

// Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль отсортированные числа по убыванию. Используйте условный оператор.
function getNumMaxMin (n1, n2, n3) {
    let maxNum = Math.max(n1, n2, n3);
    let minNum = Math.min(n1, n2, n3);
    let middleNum;
    if (n1 > minNum && n1 < maxNum) {
        middleNum = n1;
    }
    if (n2 > minNum && n2 < maxNum) {
        middleNum = n2;
    }
    if (n3 > minNum && n3 < maxNum) {
        middleNum = n3;
    }
    return (`${maxNum}, ${middleNum}, ${minNum}`);
}
    console.log(getNumMaxMin(1, 30, 100));

// Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них. Используйте условный оператор.
function getNumMax (n1, n2, n3, n4, n5) {
    let varNum = n1;
    if (n2 > varNum) {
        varNum = n2;
    } 
    if (n3 > varNum) {
        varNum = n3;
    }
    if (n4 > varNum) {
        varNum = n4;
    }
    if (n5 > varNum) {
        varNum = n5;
    }
    return varNum;
}
console.log(getNumMax(1, 3, 2, 100, -5));