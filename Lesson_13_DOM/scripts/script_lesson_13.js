// Объект document - основной объект для взаимодействия с html документом
// console.log(document);

// 1. Обращение к элементу документа через селектор:

// const main_p = document.querySelector('.main');  // обратимся к первому найденому элементу - 
// const p_list = document.querySelectorAll('p');  // обращаемся ко всем элементам
// console.log(main_p);
// console.log(p_list); // экземпляр класса NodeList

// NodeList - один из итерируемых объектов - отличие от массива - имеет меньший объем методов (only vethod forEach), чем массив - создается при отработке метода querySelectorAll
// существует много итерируемых объектов (по ним можно пройтись циклом) - например массив 
// p_list.forEach(elem => console.log(elem));

// 2. Обращение к элементу документа (старый способ):
// const main_p_old = document.getElementsByClassName('main'); // итерируемый объект с одним элементом
// const main_p_old_1 = document.getElementsByClassName('main')[0]; // возвращается содержимое объекта 
// console.log(main_p_old_1);

// querySelector метод, возвращающий элемент по селектору
// const main_p = document.querySelector('.main');

// querySelectorAll метод, возвращающий итерируемый объект (NodeList) по селектору
// const p_list = document.querySelectorAll('p');
// console.log(p_list);

// getElementsByClassName метод, возвращающий итерируемый объект 
// (HTMLCollection) по селектору

// const prod_p = document.getElementsByClassName('products')[0].getElementsByTagName('p')[0];
// console.log(prod_p);

const prod_p = document.querySelector('.products p'); // достаем параграф из продуктов
console.log(prod_p);
// const prod_p = document.querySelector('.products p.title');

// prod_p.innerText = 'Goods';
// console.log(prod_p);

// Обработка событий - берем элемент и при клике происходит действие (события в js)
// prod_p.addEventListener('click', () => {
//     prod_p.innerText = 'Goods';
// });
// addEventListener позволяет повесить событие (в данном случае click) на параграф prod_p
// и при этом событии выполнится callback функция



