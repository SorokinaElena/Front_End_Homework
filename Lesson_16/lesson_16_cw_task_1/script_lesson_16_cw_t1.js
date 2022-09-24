const formElem = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards_container');

// Если кнопка внутри формы - вешаем событие на форму, если отдельно, то на кнопку
// Форма имеет поведение по умолчанию - при отправке формы страница перезагружается (и при обновлении очищается консоль) - метод preventDefault() - запрещает обновлять страницу после отправки формы

// Достаем из формы введенные в нее данные: 

// console.log(event); // событие
// console.log(event.target); // элемент с которым происходит событие (ссылка на форму)
// console.log(event.target.city); // конкретный инпут по атрибуту name
// console.log(event.target.city.value); // данные из инпута


// formElem.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // console.log(event);
//     // console.log(event.target);
//     // console.log(event.target.name);
//     // console.log(event.target.age);
//     // console.log(event.target.city);
//     console.log(event.target.city.value);

//     const card = document.createElement('div');
//     const nameElem = document.createElement('p');
//     const ageElem = document.createElement('p');
//     const cityElem = document.createElement('p');

//     nameElem.innerText = `Name: ${event.target.name.value} `;
//     ageElem.innerText = `Name: ${event.target.age.value} `;
//     cityElem.innerText = `Name: ${event.target.city.value} `;

//     card.append(nameElem, ageElem, cityElem);
//     cardsContainer.append(card);

//     // Очищаем поле после заполнения - ставим в конец
//     event.target.name.value = '';
//     event.target.age.value = '';
//     event.target.city.value = '';

// });


formElem.addEventListener('submit', (event) => { // (event) => === function(event){}
    event.preventDefault();
    console.log(event.target.city.value);

    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const cityElem = document.createElement('p');

// Применяем деструктуризацию - разбираем event.target на составляющие (строка создает три переменных:
// const name = event.target.name
// const age = event.target.age
// затем в коде можно сраазу обращаться к инетам по имени
    const { name, age, city } = event.target; // event.target === this (стрелочные функции не работают с контекстом this)

    nameElem.innerText = `Name: ${name.value} `;
    ageElem.innerText = `Name: ${age.value} `;
    cityElem.innerText = `Name: ${city.value} `;

    card.classList.add('card');

    card.append(nameElem, ageElem, cityElem);
    cardsContainer.append(card);

    name.value = '';
    age.value = '';
    city.value = '';

});


// event - происходящее событие
// event.target - ссылка на элемент с которым происходит событие
// target нужен, чтобы доставать значения из формы - console.log(event.target.name);
