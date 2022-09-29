//Поменять текст в инпуте с ??? на !!!

const changeTextBtn = document.querySelector('.change_text_btn');
const changeTexInput = document.querySelector('.change_text_input');

changeTextBtn.addEventListener('click', event => {
    changeTexInput.value = '!!!';
})

// value in input = "можно задать по умолчанию в html"