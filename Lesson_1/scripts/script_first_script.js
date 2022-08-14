// !!! каждая команда - это инструкция - разделяютcя ;  
// console.log('Hello, world');
// см. Консоль в инструменте разработчика, для проверки правильности отработки скрипта, потом нужно его стереть

// alert('Hello, world');
// alert('Hello, world-2');
// js читает код сверху вниз!!
// появляется модальное окно - пока его не закроешь, нельзя взаимодействовать с остальной частью сайта)
// alert - базовый способ сделать модальное окно, но дизайн изменить нельзя, только содержимое - при совершении какого-то действия на сайте - можно использовать как сообщение об ошибке 

// Комментарии в js:
// однострочные - //
// многострочные - /* */ Ctrl + / Edit -> Comments

// инструкция - объявление переменной: объявляем переменную а и присваиваем ей значение 7
// может быть разный тип данных - число, строка...
let a = 7;
let b = 11;
console.log(a);
console.log(b);

// объявление переменной: старый способ, до разделения на let and const
var v = 13;
console.log(v);

// могут быть переопределены
a = 101;
console.log(a);

// инструкция - (assignment) объявление переменной константы:
// не могут быть переопределены
const c = 12;
console.log(c);

// выдает ошибку при попытке переопределить константу
// c = 102;
// console.log(c);

// правила для названия переменных:
// английские слова в контексте let number = 0;
// несколько слов в названии переменной:
// snack_case - number_of_workers
// camelcase - numberOfWorkers - первая буква маленькая, с большой буквы пишуться классы в js
// используется не для переменных - kebab-case - number-of-workers - вроде для функций

// названия переменных не могут повторяться
// 8 типов данных
// 1 - число
let number = 5;
// 2 - строка string
let greeting = 'Hello';
let firstName = "Elena";
// `` имеют расширенный функционал - можем включать в состав строки переменную
let city = `Berlin`;
let m = 5;
let n = 7;
console.log(m + 5);
console.log(m + n);
// конкатенация
console.log('Приветствие через конкатенацию: ' + ' ' + greeting + ' ' + firstName); 
// интерполяция
console.log(`Приветствие через интерполяцию: ${greeting} ${firstName}`)

// проверка типа данных переменной:
let aa = 5;
let bb = 'Hello';
// работает только с typeof:
// typeof aa; - как оператор
// typeof (aa); - как функция
console.log(typeof aa); // number
console.log(typeof (bb)); // string
//3 - object - тип данных объект

// оператор + - * / 
// % - остаток от деления 56%10 = 6
// ** - возведение в степень: основа**степень 5**2 = 25

// если операнды разных типов данных: 

console.log(7 + '7'); //-> '7' + '7' = 77
let aaa = +(7 + '7')
// console.log(+(7 + '7')); -> '7' + '7' = 77
console.log(aaa);
console.log(typeof aaa);
let aaaa = (7 + '7');
console.log(typeof aaaa);

let bbb = +"hello"; // пытаемся преобразовать к числу
console.log(bbb); // ошибка NaN - not a number

let bbbb = +"100"; // пытаемся преобразовать к числу
console.log(bbbb); // ошибка NaN - not a number

let bbbbb = "100";
console.log(bbbbb / 2);

let bbbbbb = "100h";
console.log(bbbbbb / 2);

// язык со слабой типизацией - преобразует туда, куда проще: при + преобразование идет числа в строку 
// оператор - : преобразование в число, тк - математический оператор
let aaaaa = (7 - '7');
console.log(aaaaa);
console.log(typeof aaaaa);

let aaaaaa = (7 - '7h');
console.log(aaaaaa);

let cc = '200';
console.log(cc / 2);

let ccc = '200fhgfj';
console.log(ccc / 2);

// операнд + операнд + бинарный оператор
// let bbbb = +"100" унарный оператор
let y = "100"; 
console.log(y); 
console.log(typeof y); 

let yy = +"100"; 
console.log(yy); 
console.log(typeof yy); 

let yyy = +"100h"; // пытаемся строку привести к числу
console.log(yyy); // NaN - not a number - имеет тип данных number
console.log(typeof yyy); 

let yyyy = "100h" / 2; 
console.log(yyyy); 
console.log(typeof yyyy); 