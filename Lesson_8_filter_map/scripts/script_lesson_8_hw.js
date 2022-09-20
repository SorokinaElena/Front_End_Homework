// ЗАДАЧА 1
// Дан массив с числами.
let arr = [1, -6, 4, 0, 9, -5, 16];
// Создайте новый массив, состоящий только из отрицательных чисел.
    let new_arr = arr.filter(elem => elem < 0);
console.log(arr);
console.log(new_arr);

let new_arr_1_1 = (arr) => {
    let tempArr = [];
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            tempArr[idx] = arr[i];
            idx ++;
            console.log(idx + " " + arr[i]);
        }
    }
    return tempArr;
};
console.log(new_arr_1_1(arr)); 

// Создайте новый массив, состоящий только из четных чисел.
let new_arr1 = arr.filter(elem => elem % 2 === 0 && elem !== 0);
console.log(arr);
console.log(new_arr1);
// Напишите программу, высчитывающую количество отрицательных чисел в этом массиве.
let getSummNumbers = (arr) => {
    let sumNumbers = 0;
    arr.forEach(elem => {
        if (elem < 0) 
        {
            sumNumbers ++;
        }
})
return sumNumbers;};
console.log(getSummNumbers(arr));

// ЗАДАЧА 2
// Дан массив с числами.
let arr2 = [1, -6, 4, 0, 9, -5, 16];
// Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.
let new_arr2 = arr2
.filter(elem => elem > 0)
.map(elem => elem ** 0.5); // Math.sqrt
console.log(arr2);
console.log(new_arr2);

// ЗАДАЧА 3
// Дан массив из разных типов данных.
let arr3 = [8, 'hello', true, false, 'bye', 122, undefined, 15];
// Необходимо сформировать массив из чисел (если значение не число, то подставить -1)
let new_arr3 = arr3.map(elem => typeof elem === 'number' ? elem : -1);
let new_arr3_1 = arr3.map(elem => Number.isInteger(elem) ? elem : -1);
let new_arr4 = arr3.filter(elem => typeof elem === 'number');
console.log(arr3);
console.log(new_arr3);
console.log(new_arr4);
console.log(new_arr3_1);


// ЗАДАЧА 4
// Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность).
// Напишите filter, который оставляет только активных пользователей (true).
// Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки.
let arr5 = [
  ['Максим', 'Грибов', true],
  ['Антон', 'Куликов', true],
  ['Светлана', 'Иванова', false],
  ['Ольга', 'Петрова', true],
  ['Сидр', 'Сидоров', false]
];

console.log(arr5);

let new_active_users = arr5.filter(elem => elem[2] === true).map(elem => `${elem[0]} ${elem[1]}`);
console.log(new_active_users);

let trueArray = arr5.filter((el) => {
    for (let i = 0; i < el.length; i++) {
      if (el[i] === true) {
        return true;
      }
    }
  });
console.log(trueArray);

// let arr = [1, -6, 4, 0, 9, -5, 16];
// console.log(arr);

// Создайте новый массив, состоящий только из отрицательных чисел.

// js - смешанный язык - 
// ИМПЕРАТИВНЫЙ СПОСОБ - говорим программе как выполнить задачу
let new_array = [];
for (let i =0; i < arr.length; i++) {
    if(arr[i] < 0) {
        new_array.push(arr[i])
    }
} 
console.log(new_array);
// ДЕКЛАРАТИВНЫЙ СПОСОБ - говорим программе что надо сделать
let new_array2 = arr.filter(elem => elem < 0);
console.log(new_array2);