
const form = document.querySelector('.form');
const container = document.querySelector('.container');
const test_button = document.querySelector('.test')


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameElem = document.createElement('p');
    const surnameElem = document.createElement('p');

    nameElem.innerText = event.target.name.value;
    surnameElem.innerText = event.target.surname.value;

    test_button.style.backgroundColor = 'green';
    test_button.innerText = event.target.name.value;

    container.append(nameElem, surnameElem);
})
