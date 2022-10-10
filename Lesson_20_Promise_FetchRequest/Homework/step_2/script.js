// https://jsonplaceholder.typicode.com/todos

const root = document.querySelector('.root');

const arr = [
    {
        id: 1,
        name: 'Denis',
        statusEl: 'hw done'
    },
    {
        id: 2,
        name: 'Kira',
        statusEl: 'hw not done'
    },
    {
        id: 3,
        name: 'Egor',
        statusEl: 'hw not done'
    }
]

// arr.forEach((elem) => {
//     const card = document.createElement('div');
//     const taskName = document.createElement('p');
//     const taskStatus = document.createElement('p');

//     card.classList.add('card');

//     elem.statusEl === 'hw done' ? card.style.backgroundColor = '#45b545' : card.style.backgroundColor = '#7c877c';
    
//     taskName.innerText = `Task: ${elem.id}`;
//     taskStatus.innerText = `Status: ${elem.name}`;
    
//     card.append(taskName, taskStatus);
//     root.append(card);
// })

arr.forEach(({id, name, statusEl}) => {
    const card = document.createElement('div');
    const taskName = document.createElement('p');
    const taskStatus = document.createElement('p');

    card.classList.add('card');

    statusEl === 'hw done' ? card.style.backgroundColor = '#45b545' : card.style.backgroundColor = '#7c877c';
    
    taskName.innerText = `Task: ${id}`;
    taskStatus.innerText = `Status: ${name}`;
    
    card.append(taskName, taskStatus);
    root.append(card);
})


