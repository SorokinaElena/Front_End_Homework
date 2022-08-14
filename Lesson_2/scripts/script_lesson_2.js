// свойства - записываются через точку
// свойство строк - длина
let string = 'Elena Sorokina!';
console.log(string.length); // считает длину строки - все символы

// array - массивы
let array = [1, 2, 3, 4, 5, 'hello'] // длина строки 6 
console.log(array.length); // считает длину массива - все символы

let array_1 = [1, 2, 3, 4, 5] // длина строки 5 при этом индекс последнего значения массива = 4, тк нумерация элементо с 0 
console.log(array_1.length); // считает длину массива - все символы

let string_1 = 'Elena Sorokina!';
console.log(string_1[0]); // достаем элемент из строки, нумерация идет с 0
console.log(array[0]);

// Есть строка и мы не знаем сколько в ней символов и нам нужно вывести в консоль последний символ
let long_string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea id magni esse dicta sed nesciunt eaque accusantium, maxime nostrum, aspernatur aliquid consequuntur distinctio inventore qui assumenda autem hic ipsa?*'
let long_string_lenght = long_string.length;
console.log(long_string[long_string_lenght - 1]);

let index = long_string.length - 1; // индекс последнего элемента строки
console.log(long_string[index]);
console.log(long_string[long_string.length - 1]);

// методы - записываются через точку и (), метод = функция

let str = 'Hello, world';
console.log(str.toLowerCase()); // приводит все символы к нижнему регистру
console.log(str.toUpperCase());

// trim - обрезает лишние пробелы по бокам
let str_1 = '     Hello  ';
console.log(str_1);
console.log(str_1.trim());

