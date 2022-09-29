// Создайте форму сбора данных работников с пятью полями: Имя, Фамилия, Email, Ссылка на фото, Прогресс. Поля ввода должны включать "текст-подсказку". 

// Email должен быть кликабельным.
// Фото должно отображаться.

// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

// После отправки необходимо очистить инпуты.

// Будем собирать данные из формы в массив и потом из массива доставать данные в карточки!!!!

const form = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards_container');

let cards_info = [];

// 2. Из массива с объектами достаем данные и рендерим из них карточки
// const render = () => {
//   cardsContainer.innerText = '';
//   cards_info.forEach((/*el*/{firstname, lastname, email, photo}) => {
//     const cardElem = document.createElement('div');
//     const nameElem = document.createElement('p');
//     const emailContainer = document.createElement('div');
//     const emailElem = document.createElement('a');
//     const emailTextElem = document.createElement('span');
//     const photoElem = document.createElement('img');
  
//     nameElem.innerText = `Name: ${/*el.*/firstname} ${/*el.*/lastname}`;
//     emailElem.innerText = /*el.*/email;
//     emailTextElem.innerText = 'Email: ';
  
//     emailElem.href = `mailto:${/*el.*/email}`;
//     photoElem.src = /*el.*/photo;
//     photoElem.alt = 'photo';
  
//     cardElem.classList.add('card');
//     photoElem.classList.add('photo');
  
//     emailContainer.append(emailTextElem, emailElem);
//     cardElem.append(nameElem, emailContainer, photoElem);
//     cardsContainer.append(cardElem);
//   })
// }

const render = (/*el*/{firstname, lastname, email, photo}) => {
  
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const emailContainer = document.createElement('div');
    const emailElem = document.createElement('a');
    const emailTextElem = document.createElement('span');
    const photoElem = document.createElement('img');
  
    nameElem.innerText = `Name: ${/*el.*/firstname} ${/*el.*/lastname}`;
    emailElem.innerText = /*el.*/email;
    emailTextElem.innerText = 'Email: ';
  
    emailElem.href = `mailto:${/*el.*/email}`;
    photoElem.src = /*el.*/photo;
    photoElem.alt = 'photo';
  
    cardElem.classList.add('card');
    photoElem.classList.add('photo');
  
    emailContainer.append(emailTextElem, emailElem);
    cardElem.append(nameElem, emailContainer, photoElem);
    cardsContainer.append(cardElem);

}

// 1. При отправке формы данные записываются в массив cards_info ввиде объектов (делаем массив с объектами) + вызывается функция render
form.addEventListener('submit', event => {
  event.preventDefault();
  
  const { firstname, lastname, email, photo } = event.target;

  cards_info.push({
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    photo: photo.value
  })

  firstname.value = '';
  lastname.value = '';
  email.value = '';
  photo.value = '';
  // console.log(cards_info);

  // render();
  render(cards_info[cards_info.length -1]);

})


