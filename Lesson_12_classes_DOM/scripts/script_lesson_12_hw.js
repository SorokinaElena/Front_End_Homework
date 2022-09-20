// В файле html в тэге body есть один элемент div с классом root.
// Используя JS (DOM), создать карточку товара (div), которая должна включать в себя следующие данные: Артикул, наименование товара, цена. Данные взять произвольные.
// Применить стили к карточке: width, background-color, border, border-radius, padding, margin.

const root = document.querySelector('.root');

// root.innerText = 'Name'
// root.style.color = 'red';

const productCard = document.createElement('div');
root.append(productCard);

const article = document.createElement('div');
const product_name = document.createElement('h2');
const product_description_title = document.createElement('h3');
const product_description = document.createElement('div');
const product_price = document.createElement('div');
productCard.append(article, product_name, product_description_title, product_description, product_price);

article.innerText = 'Артикул: 46026882';
product_name.innerText = 'Детская железная дорога, поезд и вагоны';
product_description_title.innerText = 'Описание';
product_description.innerText = `Железная дорога отличный подарок на новый год и день рождения как для ребёнка, так и для взрослого. Играя с набором, ребенок сможет представлять себя водителем локоматива. Игрушка по-настоящему завораживает, ведь небольшой поезд выглядит совсем как настоящий. Малыши смогут буквально часами наблюдать за тем, как локомотив везет вагончики по рельсовому полотну. Несмотря на то, что железные дороги по традиции приобретают мальчикам, такая интересная игрушка заинтересует и многих девочек. 
Электромеханическая детская железная дорога создана с высокой степенью детализации. Длина трека более 100см, трек можно собирать разными способами. Комплектация: - 10 частей рельс - 1 локомотив - 2 вагона. Поезд механизирован, работает от батареек. Для работы требуются: 2 батарейки типа ААА (в подарок).`
product_price.innerText = 'Цена: 2000 руб.';

root.style.width = '100vw';
root.style.heigth = '100vh';

productCard.classList.add('card');
product_price.setAttribute('id', 'card_price')
// product_price.classList.add('card_price');

// productCard.style.width = '50vw';
// productCard.style.heigth = '50vh';
// productCard.style.backgroundColor = '#dfd8d8';
// productCard.style.border = '1px solid black';
// productCard.style.borderRadius = '12px';
// productCard.style.padding = '20px';
// productCard.style.margin = '20px';
// product_price.style.paddingTop = '20px';