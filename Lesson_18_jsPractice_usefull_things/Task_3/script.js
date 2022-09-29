//При клике на кнопку цвет фона меняется на черный

// const body = document.querySelector('body');
// const button = document.querySelector('.change_background_color');

// button.addEventListener('click', event => {
//     body.style.backgroundColor = 'black';
// })

// К body можно обратиться напрямую

const change_background_color = document.querySelector('.change_background_color');
const change_mode = document.querySelector('.change_mode');

// Изменеие цвета путем изменения стиля
change_background_color.addEventListener('click', event => {
    document.body.style.backgroundColor = 'black';
})

// Изменение цвета путем добавления-удаления класса
// change_mode.addEventListener('click', event => {
//     document.body.classList.toggle('black_mode');
// })

// classList.add('class') // добавляет класс
// classList.remove('class') // удаляет класс
// classList.toggle('class') // удаляет класс, если он есть. добавляет класс, если его нет

// Изменение цвета
change_mode.addEventListener('click', () => {
    const backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';

    document.body.style.backgroundColor = backgroundColor;
});