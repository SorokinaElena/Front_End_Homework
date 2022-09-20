const rootElem = document.querySelector('.root');

const card = document.createElement('div');
const firstNameElem = document.createElement('p');
const lastNameElem = document.createElement('p');
const idElem = document.createElement('p');
const ageElem = document.createElement('p');
const salaryElem = document.createElement('p');
const imgElem = document.createElement('img');
const emailTextElem = document.createElement('p');// блочный элем div - занимает всю строку
const emailElem = document.createElement('a');//  строчный элем span img - не занимает не всю строку (flex of display-block)

firstNameElem.innerText = 'First name: Olga';
lastNameElem.innerText = 'Last name: Petrova';
imgElem.setAttribute('src', 'https://reqres.in/img/faces/12-image.jpg'); // добавляем атрибут src к изображению, метод принимает два параметра - название атрибуда и его значение
imgElem.setAttribute('alt', 'Photo');
// imgElem.src = 'https://reqres.in/img/faces/12-image.jpg' // для распространенных атрибутов
emailElem.innerText = 'example@gmail.com' // содержание тэга
emailTextElem.innerText = 'Email: ' 
emailElem.setAttribute('href', 'mailto:example@gmail.com');
// emailElem.href = 'mailto:example@gmail.com';
idElem.innerText = 'ID: 1';
ageElem.innerText = 'Age: 18';
salaryElem.innerText = 'Salary: 1500';
 
card.classList.add('card'); // добавляем класс элементу card, remove - для удаления класса
imgElem.classList.add('photo');

card.append(idElem, firstNameElem, lastNameElem, ageElem, salaryElem, emailTextElem, emailElem, imgElem);
rootElem.append(card);

// crs alt - обязательные атрибуты img, alt - поисковые системы реагируют на описание, указанное в alt
// <img src="https://reqres.in/img/faces/12-image.jpg" alt="Photo of a user">
// <a href="example.com">Ссылка</a> - переход по ссылке
// <a href="mailto:example@gmail.com">example@gmail.com</a> - mailto - при клике на почту открывается приложение для отправки письма
// https://validator.w3.org/ - валидатор для проверки кода 

// progressbar homework
//div in div + параграф с цифрой-значением и ширина зеленого контейнера в % от родительского контейнера
// css - статичные стили в css, зеленый контейнер задается через js

// ==========================================================================================================

