// 1. Создайте переменную user и присвойте ей значение: '   Ivan Ivanov    '. Выведите переменную user в консоль, но без лишних пробелов по краям.
let user = '   Ivan Ivanov    ';
console.log(user);
console.log(user.trim());

// 2. Напишите программу, которая выводит в консоль рандомное/случайное число от 0 до 1 и округляет его до третьего знака после точки. Воспользуйтесь методом toFixed().
// console.log(Math.toFixed(Math.random()));
let random_numer = Math.random();
let random_round_number = +random_numer.toFixed(3); // метод возвращает строку
console.log(random_round_number);
console.log(typeof random_round_number);


console.log(Math.random().toFixed(3));

// 3. Выведите на экран первую и последнюю буквы предложения, записанного в константу text (текст строки произвольный), в следующем формате:
// First: <первая буква строки>
// Last: <последняя буква строки></последняя>
const text = 'I want to study IT';
let first_char = text[0];
let sentance_lenght = text.length;
let last_char_number = sentance_lenght - 1;
let last_char = text[last_char_number];
console.log(first_char);
console.log(sentance_lenght);
console.log(last_char_number);
console.log(`First: ${first_char} Last: ${last_char}`);

console.log(text[0]);
console.log(text[text.length - 1]);

console.log(`First: ${text[0]} Last: ${text[text.length - 1]}`);

// интерпаляция поддерживает enter
console.log(`First: ${text[0]} 
Last: ${text[text.length - 1]}`);

// \n - перенос на новую строку:
console.log(`First: ${text[0]}\nLast: ${text[text.length - 1]}`);






