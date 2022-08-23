// Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль
// hello ->
// h
// e
// l
// l
// o

function getCharStr (str_name) {
    let str_length = str_name.length;
    for (i = 0; i <= (str_length - 1); i++) {
        // console.log(str_name[i]);
    }
}
getCharStr(`Elena`);

function getCharStr_1 (str_name) {
    
    for (i = 0; i < str_name.length; i++) {
        // console.log(str_name[i]);
    }
}
getCharStr_1(`Elena`);
// i <= str_name.length - 1 === i < str_name.length

// Массивы Array - структура данных, которая может хранить в себе разные типы данных одновременно

let str = "Elena";
let array = ['hello', 5, true, false, 23, 'bye', str];
// console.log(array);

// Свойства строк: length, нумерация элементов по индексам - 1й = 0, последний = length - 1
// console.log(array.length);
// console.log(array[0]);
// console.log(array[array.length - 1]);
// console.log(array[0].length); // длина элемента hello
// console.log(array[0][0]); // выводит 1ю букву первого элемента

// Найти длину последнего элемента массива, длина массива заранее неизвестна
let str_1 = "hello, world";
let elements = ['hello', 5, true, false, 23, 'bye', 76, true, undefined, null, str_1];

// console.log(elements[elements.length - 1].length);

let last_elem = elements[elements.length - 1];
// console.log(last_elem);
// console.log(last_elem[last_elem.length - 1]); // последний элемент 

let text = 'good morning';
// console.log(text[0]); // g - выводим элемент по индексу

let arr = [1, 2, 3, 4, 5]; // оформляем массив
// console.log(arr[0]); // 1 выводим 1й элемент массива
// console.log(arr[arr.length - 1]); // выводим последний элемент массива
// console.log(arr.length); // длина масива

// Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
// Если входной массив пуст, функция возвращает null
// Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов

// Для начала пропишите аргументы функции.
// Пример: ['one', 'two', 'three'] => 'three'

// Мой вариант:
const getMaxString = (str_array) => {
let element_length = 0;
let element_value = null;
if (str_array.length <= 0) {
    return null;
} else {
    for (let i = 0; i < str_array.length; i++) {
        if (str_array[i].length > element_length) {
            element_length = str_array[i].length;
            element_value = str_array[i];
        }     
    } 
    return element_value;  
}
} 
console.log(getMaxString(['one', 'two', 'three', '*****']));

// Вариант преподавателя:
const getLongestString = (array) => {
    if (array.length === 0) {
        return null;
    }
    let result = ''; // 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > result.length) {
            result = array[i];
        }
    }
    return result
}
console.log(getLongestString(['one', 'two', 'three']));

// codewars.com
// leetcode.com


