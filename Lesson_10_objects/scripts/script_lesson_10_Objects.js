// 8 типов данных в js - примитивные типы данных
let a = 'hello'; // string
let b = 7; // number
let c = true; // boolean
// undefined
// null

// непримитивные (сложные) типы данных (1 непримитивный тип):
// Объект

// let object = {
    // ключ: значение, значение может быть любым типом данных
//    ключ: значени
//}

let object = {
    firstname: 'Nelli', // строки - свойства Объекта
    lastname: 'Efremyan',
    age: 27,
    active: true,
    'first name' : 'Nelli',
  };
 
console.log(object);

let aa = 'first name';
let user = {
    'first name' : 'Nelli', // строки - свойства Объекта
    lastname: 'Efremyan',
    age: 27,
    active: true,
  };
// обращение к элементам Объекта  
console.log(`Hello ${object.firstname}! You are ${object.age} years old`); // по ключу
console.log(`Hello ${user['first name']}! You are ${user['age']} years old`); // по названию
console.log(`Hello ${user[aa]}! You are ${user['age']} years old`); // по переменной

// 1. если ключ состоит из двух и более слов
// 2. если ключ - это переменная



// способ хранения информации - массив и в нем объекты как элементы массива, элемент массива с типом данных Объект
const users = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      salary: 500
    },
  
    {
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 12,
      salary: 250
    },
  
    {
      first_name: 'irina',
      last_name: 'Alexandrova',
      age: 46,
      salary: 1500
    },
  
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      salary: 760
    },

    {
        first_name: 'Olga',
        last_name: 'Maher',
        age: 18,
        salary: 250
      },
  ];
  
  let arr = [1, 'hello', true];

  console.log(arr[1]);
  console.log(users[1]);
  console.log(users[1].salary);
  console.log(`Hello ${users[0].first_name}!`);
  console.log(users);


// method substring - возвращает диапазон элементов из массива от индекса до индекса
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// 1. Выводим в консоль каждый элемент массива методом forEach
users.forEach(elem => console.log(elem));

// 2. Пройдитесь по массиву с объектами циклом forEach и выведите в консоль значения first_name из каждого объекта

users.forEach(elem => console.log(elem.first_name));
users.forEach(elem => console.log(elem.first_name +' ' + elem.last_name));
users.forEach(elem => console.log(`${elem.first_name} ${elem.last_name}`));

// 3. Добавить в конец массива объект со следующими значениями:
// {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }

users.push({
    first_name: 'Anton',
    last_name: 'Gribov',
    age: 36,
    salary: 1760
  });
console.log(users);

// 4. Сформируйте массив из совершеннолетних пользователей
let users_18 = users.filter(elem => elem.age >= 18);
console.log(users_18);

// 5. Получите из всех объектов значения last_name и сформируйте из этих фамилий массив.
// => ['Ivanov', 'Petrova', 'Alexandrova', 'Sokolov', 'Gribov']
let arr_users_fam = users.map(elem => elem = elem.last_name);
console.log(arr_users_fam);

// 6. Сформируйте массив, состоящий только из имен и фамилий пользователей. Выведите результат в консоль.
// => ['Ivan Ivanov', 'Olga Petrova', 'Irina Alexandrova', 'Denis Sokolov', 'Anton Gribov']
let arr_users_nam_fam = users.map(elem => elem = `${elem.first_name} ${elem.last_name}`);
console.log(arr_users_nam_fam);

// 7. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной => .find()
let users_olga_find = users.find(item => item.first_name === "Olga" && item.age === 12); // возвращает элемент (объект) {...}
console.log(users_olga_find);
// https://learn.javascript.ru/array-methods
// Возвращает первый найденный отвечающий условиям элемент

let users_olga_filter = users.filter(item => item.first_name === "Olga" && item.age >= 18); // возвращает массив [{...}]
console.log(users_olga_filter);

// let find = users.find((e) => e.first_name === "Olga");
// let filter = users.filter((e) => e.first_name === "Olga")[0];

// 8. Сформировать массив со всеми пользователями, чьи first_name начинаются с буквы I/i
let users_i = users.filter(elem => elem.first_name.charAt(0) === "I" || elem.first_name.charAt(0) === "i");
console.log(users_i);

let users_i_1 = users.filter(elem => elem.first_name[0] === 'I' || elem.first_name[0] === 'i');
console.log(users_i_1);

let users_i_2 = users.filter(elem => elem.first_name[0].toLowerCase() === 'i');
console.log(users_i_2);


// 9. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// => ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760', 'Anton Grobov (36)'];
let users_18_1 = users.map(elem => {
    if(elem.age >= 18)
    return elem = `${elem.first_name} ${elem.last_name} (${elem.age}): ${elem.salary}`;
});
console.log(users_18_1);

let users_18_2 = users.filter(elem => elem.age >= 18).map(elem => `${elem.first_name} ${elem.last_name} (${elem.age}): ${elem.salary}`);
console.log(users_18_2);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// https://www.codegrepper.com/code-examples/javascript/for%28let+key+in+obj%29














