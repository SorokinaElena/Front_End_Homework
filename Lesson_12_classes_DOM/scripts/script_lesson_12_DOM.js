// DOM - Document Object Model - для управления html-документом из js 
// Document - html
// Object - элемент документа - тэг, комментарий, параграф, заголовок
// Model - 

// Создаем условия для обращения из js к Объектам html:
// const header = document.querySelector('h2');
const header = document.querySelector('.header');   // ищу элемент в html документе
const paragraph = document.querySelector('#par');
const container = document.querySelector('.container');

console.log(header);
console.log(paragraph);


// Меняем стиль заголовка:
header.style.color = 'red';
paragraph.style.backgroundColor = 'green';  // стиль пишется camelCase, значение в ковычках

// Можно добавлять классы:
header.classList.add('class_2');    // Выезжающее меню
header.classList.remove('class_1');

const text = document.createElement('p');   // создаю новый элемент, в ковычках указывается название создаваемого тэга
text.innerText = 'Добавляем какой-то текст в элемент параграф';  // Добавляем текст в р, свойства и методы() добавляются через .


const divElem = document.createElement('div');
divElem.innerText = 'Добавляем какой-то текст в сщзданный через js элемент div';
// container.append(divElem);
container.append(text, divElem);     // добавляю р внутрь container, важен порядок элементов в append - в том же порядке выведутся в html

