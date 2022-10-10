// Fetch-запрос - запрос на back-end
// фейковый back-end: 
// https://jsonplaceholder.typicode.com/
// reqres.in
// https://dummyjson.com/

// https://jsonplaceholder.typicode.com/users - получаем массив с объектами
// https://jsonplaceholder.typicode.com/users/1 - получаем конкретный объект

// Отправили запрос по адресу - в ответ получим Promise, fetch всегда ассинхронная операция

// fetch('https://jsonplaceholder.typicode.com/users') // Отправляем запрос
    // .then(resronce => console.log(resronce))
    // .then(resronce => console.log(resronce.json())) // Получили ответ от сервера (ответ - promise в статусе ожидания) и преобразовали этот ответ в формат json (еще есть .text())
    // .then(resronce => resronce.json()) // Получили ответ от сервера и преобразовали этот ответ в формат json
    // .then(json_data => console.log(json_data)) // получили json, вывели данные в консоль

    // const render = (json) => {

    // }
    
    // fetch('https://jsonplaceholder.typicode.com/users/8')
    //     .then(res => res.json())
    // .then(json => console.log(json))

// https://reqres.in/api/users?page=1
// https://codebeautify.org/jsonviewer

// fetch('https://reqres.in/api/users?page=1')
//     .then(res => res.json())
//     .then(json => console.log(json.data))

    // .then(json => console.log(json))
    // .then(json => console.log(json, json.data))
    // .then(json => console.log(json.data[1].email))

// Задача  - при запросе по полученной ссылке достать массив с объектами!!!    

const cards_container = document.querySelector('.cards_container');

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(json => render(json))

const render = (json) => {
    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const userNameElem = document.createElement('p');
    const phoneElem = document.createElement('p');

    nameElem.innerText = `name: ${json.name}`;
    userNameElem.innerText = `name: ${json.username}`;
    phoneElem.innerText = `phone: ${json.phone}`;


    card.append(nameElem, userNameElem, phoneElem);
    cards_container.append(card);
}    

