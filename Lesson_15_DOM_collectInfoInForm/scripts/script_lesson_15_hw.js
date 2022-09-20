// ЗАДАЧА 1
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
// При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета (текст взять произвольный)

const buttonEl = document.querySelector('.button');
const container = document.querySelector('.container');

buttonEl.addEventListener('click', () => {
    const pEl = document.createElement('p');
    pEl.innerText = 'Create a paragraph with a text in green color';
    container.style.color = 'green';
    container.append(pEl);
});

// ЗАДАЧА 2
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
// При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px. К контейнеру применить свойство grid.

const buttonEl_1 = document.querySelector('.button.button_1');
const container_1 = document.querySelector('.container.container_1');

buttonEl_1.addEventListener('click', () => {
    const pEl = document.createElement('div');
    pEl.classList.add('square');
    pEl.style.backgroundColor = 'yellow';
    pEl.style.width = '300px';
    pEl.style.height = '300px';
    pEl.style.border = '1px solid black';
    pEl.style.padding = '10px';
    container_1.append(pEl);
});