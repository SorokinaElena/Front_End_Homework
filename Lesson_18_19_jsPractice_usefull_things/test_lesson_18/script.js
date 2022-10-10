
const button_push = document.querySelector('.button_push');
const button_push_1 = document.getElementById('1');
const button_push_2 = document.getElementById('2');
const button_push_3 = document.getElementById('3');

const input_push = document.querySelector('.input_push');
const box_push_value = document.querySelector('.push_value');

const button_change_text = document.querySelector('.button_change_text');
const input_change_text = document.querySelector('.input_change_text');

const button_change_bgcolor = document.querySelector('.button_change_bgcolor');
const wrapper = document.querySelector('.wrapper');
const button_change_bgc_white_black = document.querySelector('.button_change_bgc_white_black')

const color_button_1 = document.querySelector('.color_button_1');
const color_button_2 = document.querySelector('.color_button_2');

const button_change_input = document.querySelector('.button_change_input');
const input_change_text_1 = document.querySelector('.input_change_text_1');

const products_form = document.querySelector('.products_form');
// const input_title = document.querySelector('.input_title');
// const input_value = document.querySelector('.input_value');
// const input_price = document.querySelector('.input_price');
// const button_create_card = document.querySelector('.button_create_card');
const cards_container = document.querySelector('.cards_container');



button_push.addEventListener('click',() => {
    console.log(input_push.value);
    box_push_value.innerText = input_push.value;
})


button_change_text.addEventListener('click', () => {
    input_change_text.value = '!!!'
})


button_change_bgcolor.addEventListener('click', () => {
    wrapper.style.backgroundColor = 'black';
})

// Изменение цвета фона (белый/черный) при нажатии на кнопку (с применением свойства toggle):
// button_change_bgc_white_black.addEventListener('click', () => {
//     wrapper.classList.toggle('background')
// })

// Изменение цвета фона (белый/черный) при нажатии на кнопку:
// button_change_bgc_white_black.addEventListener('click', () => {
//     if(wrapper.style.backgroundColor !== 'green') {
//         wrapper.style.backgroundColor = 'green'
//     } else
//         wrapper.style.backgroundColor = 'black'
// })    

button_change_bgc_white_black.addEventListener('click', () => {
    wrapper.style.backgroundColor = wrapper.style.backgroundColor === 'black' ? 'white' : 'black';
})    


button_push_1.addEventListener('click', () => {
    color_button_1.style.backgroundColor = 'rgb(98, 197, 89)'
})

button_push_2.addEventListener('click', () => {
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    const r_w = Math.round(Math.random()*255);
    const g_w = Math.round(Math.random()*255);
    const b_w = Math.round(Math.random()*255);

    color_button_2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    color_button_2.style.borderColor = `rgb(${r}, ${g}, ${b})`;
    wrapper.style.backgroundColor = `rgb(${r_w}, ${g_w}, ${b_w})`;
})


// button_push_3.addEventListener('click', () => {
//     button_push_3.style.backgroundColor = 'rgb(98, 197, 89)';
//     button_push_3.style.color = 'yellow';
// })


// let array = ['@@@','###','$$$','%%%'];
// button_change_input.addEventListener('click', () => {
//     let i = 0;
//     if(i < array.length - 1) {
//         input_change_text_1.value = array[i];
//     }
//     i = i + 1;
// })


// products_form.addEventListener('submit', () => {
//     const product_card = document.createElement('div');
//     const titleElem = document.createElement('p');
//     const valueElem = document.createElement('p');
//     const priceElem = document.createElement('p');
    
//     titleElem.value = title.value;
//     valueElem.value = title.value;
//     priceElem.value = title.value;

//     product_card.append(titleElem, valueElem, priceElem);
//     cards_container.append(product_card);
// })









