// Область видмости
// Создайте функцию, принимающую массив и возвращающую массив с отрицательными числами
let arr = [1, 34, -10, 8, -5, -3];
const negative_nums = (arr) => {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            new_arr.push(arr[i])
        }
    }
    console.log(new_arr);
    return new_arr;
}
// console.log(new_arr);
console.log(negative_nums(arr));


const positive_nums = (arr) => {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            new_arr.push(arr[i])
        }
    }

    return new_arr;
}
// var - глобальная область видимости в циклах и в if https://learn.javascript.ru/var
function f() {
    var a = 1;
    console.log(a)
  }
  
  f();
//   console.log(a)

    let arr1 = [1, 34, -10, 8, -5, -3];
    let new_arr1 = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            new_arr1.push(arr[i])
        }
    }
    console.log(i);

// ===============================
// .reduce() - подучаем какое-то финальное значение, совершив итерацию по масиву - Найти сумму чисел в массиве (возвращает число)
let numbers = [1, 2, 3, 4, 5];

// цикл for
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// .reduce() - принимает обязательно 2 аргумента:
// 1 - total - куда будет складываться результат, 
// 2 - elem - элемент массива, 
// 0 - стартовое значение (initial value) - необязательный параметр - по умолчанию в total записывается значение первого элемента 
// способы использования - суммирование всех значений в массиве (один из) - например сумма товаров в корзине

// let result = numbers.reduce((total, elem) => {
//     return total + elem
// }, 0);
// console.log(result);

let result = numbers.reduce((total, elem) => total + elem, 0);
    console.log(result);

// 0 + 1 = 1 (initial value = 0)
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

// Дан массив
let nums = [3, 6, 7, 1];
// Найти среднее арифметическое элементов массива (сумма деленая на общее колличество)
let avg = nums.reduce((total, elem) => total + elem) / nums.length;
console.log(avg);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

//======================================================
// Tasks Methods
// Задан массив:
let array = [137, 5, 84, 299, 777, 500, 1, 8, 17];

// Задачи:
// 1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.
// 2. Сформируйте массив из чисел меньше 100. Выведите в консоль результат.
// 3. Сформируйте массив, состоящий только из чисел, кончающихся на 7.
// 4. Найдите сумму чисел, которые меньше 100.
// 5. Найдите сумму чисел, которые заканчиваются на 7.

// 1.
array.unshift(67);
array.push(56);
console.log(array);
// 2. 
let arr_less_100 = array.filter(elem => elem < 100);
console.log(arr_less_100);
// 3.
let arr_ends_7 = array.filter(elem => elem % 10 === 7);
console.log(arr_ends_7);
// 4.
// let arr_less_100_sum = arr_less_100.reduce((total, elem) => total + elem, 0);
// console.log(arr_less_100_sum);

let arr_less_100_sum = array.filter(elem => elem < 100).reduce((total, elem) => total + elem, 0);
console.log(arr_less_100_sum);

// 5.
let sum_7 = array.filter(elem => elem % 10 === 7).reduce((total, elem) => total + elem, 0);
console.log(sum_7);



