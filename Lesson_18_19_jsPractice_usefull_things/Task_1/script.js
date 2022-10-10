// Вывести текст, введенный в инпут, в консоль

const showTextBtn = document.querySelector('.show_text_btn');
const showTexInput = document.querySelector('.show_text_input');

showTextBtn.addEventListener('click', event => {
    console.log(showTexInput.value);
})

// value in input = "можно задать по умолчанию в html"