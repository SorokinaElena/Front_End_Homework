// Задан массив:
let arr = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];
console.log(arr);
// Задачи:
// 1. Добавьте в начало массива число 53. Затем удалите из конца массива последние 2 числа. Далее решайте задачи с обновленным массивом.
arr.unshift(53);
console.log(arr);

// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

let i = arr.length;
let j = i - 2;
for(let idx = i; idx > j; idx--) {
    arr.pop();
};
console.log(arr);

// 2. Сформируйте массив из положительных чисел меньше 50. Найдите сумму всех положительных чисел меньше 50.
let arr_positive_numbers = arr.filter(elem => elem > 0 && elem < 50);
console.log(arr_positive_numbers);
let sum_positive_numbers = arr_positive_numbers.reduce((total, elem) => total + elem);
console.log(sum_positive_numbers);

// 3. Сформируйте массив, состоящий только из положительных чисел, кончающихся на 3. Найдите сумму всех положительных чисел, кончающихся на 3.
let arr_positive_numbers_3 = arr.filter(elem => elem > 0 && elem % 10 === 3);
console.log(arr_positive_numbers_3);
let sum_positive_numbers_3 = arr_positive_numbers_3.reduce((total, elem) => total + elem);
console.log(sum_positive_numbers_3);

// 3. Сформируйте массив, в котором положительные числа на строку '+', а отрицательные числа - на '-'
console.log(arr);
let arr_str = arr.map(elem => {
    if(elem >= 0) {
        return elem = '+';
    } else {
        return elem = '-';
    }
}
);
console.log(arr_str);
