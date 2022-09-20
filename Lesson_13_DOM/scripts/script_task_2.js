const main_elem = document.querySelector('.main');

// main_elem.addEventListener('click', () => {  // приоритет стилей через js самый высокий
//     main_elem.style.color = 'red';
//     main_elem.style.backgroundColor = 'gray';
//     main_elem.style.padding = '20px';
// });

// объявить функцию, которая возвращает случайное число от 0 до 255
// 'rgb(124, 23, 45)'
// реализовать функцию random_color, которая возвращает случайный цвет в формате rgb 'rgb(124, 34, 52)'

const random_color = () => {
    let r = Math.round((Math.random()*255));
    console.log(r);
    let g = Math.round((Math.random()*255));
    console.log(g);
    let b = Math.round((Math.random()*255));
    console.log(b);
    let color;
    return color = `rgb(${r}, ${g}, ${b})`;
};

console.log(random_color());

main_elem.addEventListener('click', () => {  // приоритет стилей через js самый высокий, записывает стили прямо в тэг, используем для динамических объектов
    main_elem.style.color = random_color();
    main_elem.style.backgroundColor = random_color();
    main_elem.style.padding = '20px';
});

// const main_elem = document.querySelector('.main');
main_elem.addEventListener('click', () => {
    const value = main_elem.innerText;
    main_elem.innerText = +value + 1;
})

// console.log(+value + 1); // считывает как строку, поэтому для реализации счетчмка нужно преобразовать строку в число - с помощью унарного оператора +: +'12'



