// 1) найти параграф с тектом "Важный текст" и заменить его на "Не такой уж и важный текст"
const p_text = document.querySelector('.main p'); // без точки ищет по тэгу, с точкой ищет по классу
console.log(p_text);
p_text.innerText = 'Не такой уж и важный текст';

// заменить fb на facebook
const a_text = document.querySelector('.media .fb a'); // без точки ищет по тэгу, с точкой ищет по классу
console.log(a_text);
a_text.innerText = 'facebook';

//
const ul_text_1 = document.querySelector('li.point_1');
console.log(ul_text_1);
ul_text_1.addEventListener('click', () => {
        ul_text_1.innerText = 'point_1';
    });

const ul_text_2 = document.querySelector('.menu .point_2');
console.log(ul_text_2);
ul_text_2.addEventListener('click', () => {
        ul_text_2.innerText = 'point_2';
    });    

const ul_text_3 = document.querySelector('.point_3');
console.log(ul_text_3);
ul_text_3.addEventListener('click', () => {
        ul_text_3.innerText = 'point_3';
    });    
    
    