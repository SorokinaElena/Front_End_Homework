// https://jsonplaceholder.typicode.com/todos

const root = document.querySelector('.root');

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => createCard(json))

const createCard = (json) => {
        json.forEach(({title, completed}) => {
        const card = document.createElement('div');
        const taskName = document.createElement('p');
        const taskStatus = document.createElement('p');
    
        card.classList.add('card');
    
        completed === true ? card.style.backgroundColor = '#45b545' : card.style.backgroundColor = '#7c877c';
        
        taskName.innerText = `Task: ${title}`;
        completed === true ? taskStatus.innerText = `Status: done` : taskStatus.innerText = `Status: not done`;
        
        card.append(taskName, taskStatus);
        root.append(card);
    })
}
    


