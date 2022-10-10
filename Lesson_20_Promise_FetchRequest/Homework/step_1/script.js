// https://jsonplaceholder.typicode.com/todos
// task = title
// status

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

const createCard = (arr, index) => {
    const card = document.createElement('div');
    const taskName = document.createElement('p');
    const taskStatus = document.createElement('p');

    card.classList.add('card');

    arr[index].statusEl === 'hw done' ? card.style.backgroundColor = '#45b545' : card.style.backgroundColor = '#7c877c';

    // if(arr[index].statusEl === 'hw done') {
    //     card.style.backgroundColor = '#45b545';
    //     console.log(arr[index].statusEl)
    // } else {
    //     card.style.backgroundColor = '#7c877c';
    //     console.log(arr[index].statusEl)
    // };
    
    taskName.innerText = `Task: ${arr[index].id}`;
    taskStatus.innerText = `Status: ${arr[index].name}`;
    
    card.append(taskName, taskStatus);
    root.append(card);
}

createCard(arr, 0);
createCard(arr, 0);
createCard(arr, 2);
createCard(arr, 0);
createCard(arr, 2);
createCard(arr, 1);

