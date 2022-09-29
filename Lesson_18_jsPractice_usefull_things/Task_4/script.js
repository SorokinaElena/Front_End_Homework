// Менять цвет кнопки на случайный

const random_color_btn = document.querySelector('.random_color_btn');

const getRandomNum = () =>  Math.round(Math.random() * 255);

random_color_btn.addEventListener('click', event => 
    event.target.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`)

// event - если что-то происходит именно с объектом, к которому обращаемся - event.target - ссылка на объект    
// rgb 0- 255
// event.target.style.backgroundColor = 'rgb(0, 0, 0)' - черный;
// // event.target.style.backgroundColor = 'rgb(255, 255, 255)' - белый

//Math.random() => дробное от 0 до 1
//Math.random() * 255 => дробное от 0 до 255
//Math.round(Math.random() * 255) => целое число от 0 до 255

// Меняем цвет фона на случайный

const random_color_backgroundColor = document.querySelector('.random_color_backgroundColor');
random_color_backgroundColor.addEventListener('click', () => 
    document.body.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`)
