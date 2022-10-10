
const game_btn = document.querySelector('.game_btn');
const game_result = document.querySelector('.game_result');

const get_num = () => Math.round(Math.random() * 5 + 1); 

game_btn.addEventListener('click', () => {
    game_result.innerText = `${get_num()} x ${get_num()}`;
})

//Math.random() => дробное от 0 до 1
//Math.random() * 5 => дробное от 0 до 5
//Math.random() * 5 + 1 => дробное от 1 до 6
//Math.round(Math.random() * 5 + 1) => целое от 1 до 6

// Создание ПРОТОТИПА:

const add_form = document.querySelector('.add_form');
const form_result = document.querySelector('.form_result');

add_form.addEventListener('submit', (event) => {
    event.preventDefault();

    const {type, content, color} = event.target

    form_result.innerText = '';

    const elem = document.createElement(type.value);
    elem.innerText = content.value;
    elem.style.color = color.value;

    form_result.append(elem);

    type.value = '';
    content.value = '';
    color.value = '';

})
