import React from 'react'

function Example({ first_name, last_name}) {
  return (
    <div>
        <p>First name: {first_name}</p>
        <p>Last name: {last_name}</p>
    </div>
  )
}

export default Example;

// App - Самый главный компонент - собирает в себе все остальные компоненты по приложению
// { first_name, last_name} - передаем переменные  - проксы - с помощью проксов можем забрасывать информацию в компонент - забрасываем через проксы информацию внутрь компонентов