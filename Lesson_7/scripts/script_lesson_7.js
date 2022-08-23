// 1. Напишите функцию, которая принимает два числовых аргумента a и b (a > b) и выводит в консоль числа от a  до b кратные трем (числа, которые делятся на 3 без остатка)
// Пример 10, 3 -> 9, 6, 3
// const getNum = (a, b) => {
//     for (let i = a; i >= b; i--) {
//     if (a % 3 === 0) {
//         console.log(a);
//         a -= 1;
//     } else {
//         a -= 1;
//     }
// }
// }
// console.log(getNum(10, 3));

// const getNum = (a, b) => {
//     for (let i = a; i >= b; i--) {
//     if (i % 3 === 0) {
//         console.log(i);
//     } 
// }
// }

// 2. Напишите функцию, которая суммирует числа от 0 до 100 кратные 3 или 5. Выведите сумму в консоль.

// const getNum = (a, b) => {
//     let sum = 0;
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             if (i % 3 === 0 || i % 5 === 0) {
//                 sum = sum + i;
//             }
//         }
//     } else {
//         for (let i = b; i <= a; i++) {
//             if (i % 3 === 0 || i % 5 === 0) {
//                 sum = sum + i;
//             }
//         }
//     }
//     return sum;
// }
// console.log(getNum(10, 1));

// const getSum = () => {
//     let sum = 0;
//     for (let i = 0; i <= 100; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(getSum());

// 3. Напишите функцию, формирующую массив из чисел от 0 до 50 кратных 5.
// => [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// Вариант 1
// const getArray = () => {
//     let result = [];
//     for (let i = 0; i <= 50; i++) {
//         if (i % 5 === 0 && i !== 0) {
//             result.push(i); // вносим элемент в пустой массив
//         }
//     }
//     return result;
// }

// Вариант 2
// let isDivided = (a, b) => {
//     let arr = [];
//     let index = 0;
//     for (let i = a; i <= b; i++) 
//     {
//       if (i % 5 == 0 && i !== 0) {
//         arr[index] = i;
//         index++;
//       }
//     }
//     return arr;
//   }

// Напишите функцию, формирующую массив из чисел от a до b (b > a) кратных 2.
// const getArray = (a, b) => {
//     let result = [];
//     for (let i = a; i <= b; i++) {
//         if (i % 2 === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(getArray(1, 10));
  
// https://leetcode.com/problems/reverse-string/
// const reverseStr = (arr) => {
//     let reverse_arr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reverse_arr.push(arr[i]);
//     }
//     return reverse_arr;
// } 
// const reverseStr1 = (arr) => arr.reverse();
// console.log(reverseStr(["h", "l", "o"]));

// let a = [1, 40, 53, 3, 6, 15];
// a.sort(); // 1, 3, 6, 15, 40, 53 => 1, 15, 3, 40, 53, 6 - сортировка по первому числу - не для сортировки от меньшего к большему



