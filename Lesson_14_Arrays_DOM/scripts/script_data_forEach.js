// В реальном коде данные будут приходить из форм или с сервера
const data = [
    {
      id: 1,
      title: 'Велосипед',
      price: 100,
    },
  
    {
      id: 2,
      title: 'Самокат',
      price: 500,
    },
  
    {
      id: 3,
      title: 'Скейт',
      price: 200,
    },

    {
      id: 4,
      title: 'Лыжи',
      price: 300,
    }
  ]

  const rootElem = document.querySelector('.root');

//   data.forEach((product_item) => {
//     const cardElem = document.createElement('div');
//     const idElem = document.createElement('p');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');
  
//     idElem.innerText = `ID: ${product_item.id}`;
//     titleElem.innerText = `Title: ${product_item.title}`;
//     priceElem.innerText = `Price: ${product_item.price}`;
  
//     cardElem.classList.add('card');
    
//     cardElem.append(idElem, titleElem, priceElem);
//     rootElem.append(cardElem);
//   });

// Деструктуризация, можно указать только необходимые свойства
// {id, title, price} = product_item
// const id = product_item.id
// const title = product_item.title
// const price = product_item.price

  data.forEach(({id, title, price}) => {
    const cardElem = document.createElement('div');
    const idElem = document.createElement('p');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
  
    idElem.innerText = `ID: ${id}`;
    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}`;
  
    cardElem.classList.add('card');
    
    cardElem.append(idElem, titleElem, priceElem);
    rootElem.append(cardElem);
  });

//   const cardElem = document.createElement('div');
//   const idElem = document.createElement('p');
//   const titleElem = document.createElement('p');
//   const priceElem = document.createElement('p');

//   idElem.innerText = `ID: `;
//   titleElem.innerText = `Title: `;
//   priceElem.innerText = `Price: `;

//   cardElem.classList.add('card');
  
//   cardElem.append(idElem, titleElem, priceElem);
//   rootElem.append(cardElem);



