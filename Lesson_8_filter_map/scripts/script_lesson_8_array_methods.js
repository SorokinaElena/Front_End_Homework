// Все эти методы всегда возвращают новый массив!!!!, в отличии от .forEach() - не возвращает ничего 

// .filter() 
// Всегда возвращает новый массив со всеми элементами, прошедшими проверку!!!
// Длина нового массива может быть меньше длины оригинального массива

// .map() - возвращает новый массив с результатом вызова указанной функции для каждого элемента

// .reduce() - подучаем какое-то финальное значение, совершив итерацию по масиву


// .filter() - используем, если нужна проверка!
// Дан массив. Сформируйте новый массив с числами меньше 100.
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

let new_array = array.filter(elem => {
    return elem < 100
});
console.log(new_array);

// Укороченная запись!!
// let new_array = array.filter(elem => elem < 100);
// console.log(new_array);

// Сформируйте новый массив с именами длиннее 5 букв
let users = ['Ivan', 'Victoria', 'Olga', 'Elena', 'Anton']
let new_users = users.filter(elem => elem.length >= 5);
console.log(users);
console.log(new_users);

// Сформируйте новый массив с числами, которые кратны 2.
let new_array1 = array.filter(elem => elem % 2 === 0 && elem !== 0);
console.log(new_array1);

// Сформируйте новый массив с числами, которые заканчиваются на 5.
let new_array2 = array.filter(elem => elem % 10 === 5);
console.log(new_array2);

let new_array3 = array.filter(elem => {
    console.log(elem);
    return elem % 10 === 5;
});
console.log(new_array3);

// Дан массив из строк. Вывести только слова, длиннее 10 символов
let arr = ['hello', 'bye', 'good morning', 'good evening', 'good night'];
let new_arr = arr.filter(elem => elem.length > 10);
console.log(new_arr);

// .map() - длина нового масссива совпадает с длинной оригинального массива

// Вернуть новый массив с каждым элементом * 2
let mult_on_2 = array.map(elem => elem * 2);
console.log(array);
console.log(mult_on_2);

let age = [23, 15, 18, 56, 43, 28];
// Сформировать новый массив с совершеннолетними
// Сформировать новый массив, где возраст всех совершеннолетних заменен на 100

let adult = age.filter(elem => elem >= 18);
console.log(age); 
console.log(adult); 

let adult_1 = age.map(elem => {
    if(elem >= 18) {
    return elem = 100;
    } else {
        return elem;
    }
});
console.log(age); 
console.log(adult); 
console.log(adult_1); 

let age_adult = age.filter(elem => elem >= 18).map(elem => elem = 'adult');
console.log(age_adult); 

// Короткая запись
// let age_adult = age
// .filter(elem => elem >= 18)
// .map(elem => elem = 100);

// Создать массив, где несовершеннолетние заменены на слово ребенок, а совершеннолетние на слово взрослый
// let adults = age.map(elem => {
//     if (elem < 18) {
//         return elem = 'child';
//     } else {
//         return elem = 'adult';
//     }
// });
// console.log(age); 
// console.log(adults); 

// Укороченная запись
// let adults = age.map(elem => {
//     if (elem < 18) return elem = 'child';
//     return elem = 'adult'; 
// });
// console.log(age); 
// console.log(adults); 

// Запись тернарным оператором - если есть 2 варианта развития событий - конструкция: условие ? true (что произойдет) : false (что произойдет)
let adults = age.map(elem => (elem < 18 ? "child" : "adult"));

// Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'
console.log(array);
let array_change = array.map(elem => {
    if(elem >= 100) return elem = '> 100';
 else return elem = '< 100';
});
console.log(array_change);

// let array_change = array.map(elem => (elem >= 100 ? '> 100' : '< 100'));
// console.log(array_change);

// Сформировать массив из последних цифр элементов => [23, 15, 18, 56, 43, 28] -> [3 5 8 6 3 8] (можно сделать и с forEach, но он не вернет новый массив - нужно делать push в новый массив)
let age_last_simbol = age.map(elem => elem % 10);
console.log(age);
console.log(age_last_simbol);





