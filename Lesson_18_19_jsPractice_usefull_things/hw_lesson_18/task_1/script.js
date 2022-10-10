
const button = document.querySelector('button');

button.style.width = `30px`;
button.style.height = `30px`;
button.style.backgroundColor = 'rgb(224, 87, 87)';
button.style.border = '1px solid rgb(224, 87, 87)';

// Вариант 1:
let width = 30;
let height = 30;

button.addEventListener('click', () => {
        width = width + 10;
        height = height + 10;
        // button.style.width = `${width}px`;
        // button.style.height = `${height}px`;
        button.style.width = width + 'px';
        button.style.height = height +'px';
})

// Вариант 2:
//If we want to know the current button size and use that in our calculation of a new button size, we need to use getBoundingClientRect . It is a great function built into elements and contains information about size and position in the viewport.

// button.addEventListener('click', () => {
//     button.style.width = `${button.getBoundingClientRect().width + 10}px`;
//     button.style.height = `${button.getBoundingClientRect().height + 10}px`;
// })

// Вариант 3:

// let button_params = 30;

// const incr_button_render = (params) => {
//     button.style.width = params + 'px';
//     button.style.height = params + 'px';
// }

// incr_button_render(button_params);

// button.addEventListener('click', () => {
//     button_params +=10;
//     incr_button_render(button_params);
// })