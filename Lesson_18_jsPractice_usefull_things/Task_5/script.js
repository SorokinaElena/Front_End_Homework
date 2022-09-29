// Меняем содержимое инпута на значение из массива

const change_btn = document.querySelector('.change_btn');
const change_input = document.querySelector('.change_input');
const symbols = ['...', '!!!', '+++', '@@@'];
let symbols_index = 0;

change_btn.addEventListener('click', () => {
    change_input.value = symbols[symbols_index++ % symbols.length];
})

// можно при каждом клике увеличивать symbols_index на 1: symbols_index++
// symbols_index++ % symbols.length
// 0 % 4 = 0
// 1 % 4 = 1
// 2 % 4 = 2
// 3 % 4 = 3
// 4 % 4 = 0
// 5 % 4 = 1
// 6 % 4 = 2
// 7 % 4 = 3
// 8 % 4 = 0
// С этой логикой реализуется слайдер!!!


// создать слайдер с фотографиями из массива
// https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png

const photos = [
  'https://icdn.lenta.ru/images/2022/06/13/19/20220613193918938/square_320_606658bb7374481a05a664f151a8d888.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg',
  'https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg',
  'https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg'
];

const img_slider = document.querySelector('.img_slider');

let photoIndex = 0;

img_slider.addEventListener('click', (event) => event.target.src = photos[photoIndex++ % photos.length]);





