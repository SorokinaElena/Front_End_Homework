
let products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000
    },
    {
        id: 2,
        title: 'ролики',
        price: 15000
    },
    {
        id: 3,
        title: 'самокат',
        price: 12000
    },
    {
        id: 4,
        title: 'лыжи',
        price: 23000
    },
    {
        id: 5,
        title: 'сноуборд',
        price: 20000
    }
]

// создать еще один div и залить в него карточки с продуктами
// этот div добавить в #root
// внешнему div элементу добавьте класс product-container
// div элементу, который является карточкой, присвойте класс product-item

const root = document.querySelector('#root');
const productContainer = document.createElement('div');
productContainer.classList.add('product-container');
root.append(productContainer);

// создать функцию, которая на вход получает title и price и возвращает
/*
    <div>
        <p>сноуборд</p>
        <p>20000</p>
    </div>
*/

const createProductElement = (id, title, price) => {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');

    title_p.innerText = title;
    price_p.innerText = price;

    container.classList.add('product-item');

    const delete_btn = createDeleteButton();
    
// повесить обработчик удаления на кнопку удаления
    delete_btn.addEventListener('click', () => deleteProduct(id));

    container.append(title_p, price_p, delete_btn);
    return container
}

// создать функцию, которая возвращает элемент (button) удаления
const createDeleteButton = () => {
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'X';
    buttonDelete.classList.add('delete_btn');
    return buttonDelete;
}


function render(){
    productContainer.innerText = '';
    if(products.length === 0) {
        productContainer.append(emptyList());
    } else {
        products.forEach(product => {
            const productElement = createProductElement(product.id, product.title, product.price);
            productContainer.append(productElement);
     })
    
    }
}

// написать функцию, которая получает id товара и удаляет его из массива

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    render();
}

render();

// deleteProduct(3);
// console.log(products);

productContainer.append(createDeleteButton());


// создать функцию emptyList которая возвращает параграф с текстом "Товаров нет."
function emptyList() {
    const p_elem = document.createElement('p');
    p_elem.innerText = 'Товаров нет';
    return p_elem;
}
