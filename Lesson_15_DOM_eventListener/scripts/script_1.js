// Сбор информации - отправка запроса на сервер, получение информации и ее обработка
// или
// Написать форму, которая собирает информацию и складывает ее в массив

// Как повесить на элемент слушателя событий addEventListener - click - для элементов submit - для формы - events:
// У метода 2 аргумента:
// - имя события
// - call-back функция - что произойдет при выполнении собития


// При клике на квадрат цвет квадрата будет меняться на зеленый:

const square = document.querySelector('.square');
const container = document.querySelector('.container');


square.addEventListener('click', () => {
    container.innerText = 'красный квадрат';
    container.style.color = 'green';
    
});

// без querySelector можно обращаться только к body
square.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

square.addEventListener('click', () => container.innerText = 'красный квадрат');
