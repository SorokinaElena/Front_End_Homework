// МЕТОДЫ МАССИВОВ

// .forEach() - ничего не возвращает!!! - функция высшего порядка, т.к. внутрь нее передана другая функция!
// выполяняет переданную функцию один раз для каждого элемента массива, ничего не возвращает (undefined)

let age = [40, 45, 53, 23, 12, 7]; // создаем массив только совершеннолетних

// for (let i = 0; i < age.length; i++) {
//     if (age[i] >= 18) {
//         console.log(age[i])
//     }
// }

// age.forEach(elem => {
//     if (elem >= 18) {
//         console.log(elem)
//     }
// });

// age.forEach(el => console.log(el));
let age_new = [];
age.forEach(el => age_new.push(el));

let age_new1 = [];
age.forEach(el => age_new1.push(el + 1));

console.log(age);
console.log(age_new);
console.log(age_new1);

