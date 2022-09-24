//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.
// https://reqres.in/img/faces/7-image.jpg
// в css object-fit: cover - чтобы фотография не деформировалась при изменении размера

//Добавьте к форме поле ввода почты.

//Добавьте к форме поле ввода прогресса. Выведите прогресс в карточку.


const workers_form = document.querySelector('.workers_form');
const cards_container = document.querySelector('.cards_container');

workers_form.addEventListener('submit', (event) => {

    event.preventDefault();

    const card = document.createElement('div');
    const firstNameEl = document.createElement('p');
    const lastNameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const salaryEl = document.createElement('p');
    const photoEl = document.createElement('img');
    const emailBoxEl = document.createElement('div');
    const emailEl = document.createElement('a');
    const progressValue = document.createElement('div')

    card.classList.add('card');
    
    const {firstname, lastname, age, rate, days, photo, email, progress} = event.target;

    firstNameEl.innerText = `First name: ${firstname.value}`;
    lastNameEl.innerText = `Last name: ${lastname.value}`;
    ageEl.innerText = `Age: ${age.value}`;
    salaryEl.innerText = `Salary: ${rate.value * days.value}`;
    photoEl.setAttribute('src', photo.value);
    photoEl.setAttribute('alt', 'Photo');
    emailBoxEl.innerText = `E-mail: `;
    emailEl.setAttribute('href', email.value);
    emailEl.innerText = `${email.value}`;
    progressValue.innerText = `${progress.value}%`;

    emailBoxEl.append(emailEl);
    card.append(firstNameEl, lastNameEl, ageEl, salaryEl, photoEl, emailBoxEl, progressValue);
    cards_container.append(card);

    firstname.value = '';
    lastname.value = '';
    age.value = '';
    rate.value = '';
    days.value = '';
    photo.value = '';
    email.value = '';
    progress.value = '';
});

