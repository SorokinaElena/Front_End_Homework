// Дан массив с данными
const people = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      city: 'Moscow',
      country: 'Russia',
      active: true
    },
    {
      first_name: 'dmitry',
      last_name: 'Petrov',
      age: 7,
      city: 'Berlin',
      country: 'Germany',
      active: true
    },
    {
      first_name: 'Irina',
      last_name: 'Alexandrova',
      age: 46,
      city: 'Paris',
      country: 'France',
      active: false
    },
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 10,
      city: 'Rome',
      country: 'Italy',
      active: false
    }
  ];

  console.log(people);
  // 1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', {...}, {...}, ...]

  let people_address_info = people.map(elem => elem = `${elem.first_name} ${elem.last_name} (${elem.city}, ${elem.country})`);    
  console.log(people_address_info);

  // 2. Сформируйте массив из активных людей

  let people_active = people.filter(elem => elem.active === true);
  console.log(people_active);

  // 3. Сформируйте массив из людей, чьи имена начинаются на 'D' (регистр буквы может быть и нижним)

  let people_D = people.filter(elem => elem.first_name.charAt(0) === 'd' || elem.first_name.charAt(0) === 'D');
  let people_D1 = people.filter(elem => elem.first_name[0].toUpperCase() === 'D');
  console.log(people_D);
  console.log(people_D1);
  // startswith метод

  // 4. Получите из массива объект, где страной проживания человека является 'Germany'

  let people_country = people.filter(elem => elem.country === 'Germany');  // возвращает массив с искомым объектом
  let people_country1 = people.find(elem => elem.country === 'Germany');   // возвращает искомый объект

  console.log(people_country);
  console.log(people_country1);


  // 5. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: [ {<Имя> <Фамилия> (<возраст>), <Страна> (<Город>)}, {...}, {...}, ...]

  let people_adult = people.filter(elem => elem.age >= 18)
                            . map(elem => elem = `${elem.first_name} ${elem.last_name} (${elem.age}), ${elem.country} (${elem.city})`);
  console.log(people_adult);

  // 6. Измените у первого элемента значение first_name на "Petr" и age на 99;

  console.log(people[0]);

  people[0].first_name = 'Petr';
  people[0].age = 99;
  console.log(people);

  console.log(people[0]);

  // Создание объекта или массива с помощью const - почему можно перезаписывать значения Объектов:
  const user = {
    first_name: 'Elena',
    last_name: 'Sorokina',
    age: 41
  };

  // user = [1, 2, 3] // пытаемся переопределить значение переменной const user (объект) -> ошибка
  // user = {
  //   city: 'Erlensee'
  // }                // пытаемся переопределить значение переменной const user (объект) -> ошибка

  user.age = 30;  // можно переопределить содержимое объекта или массива, созданного с помощью const
  console.log(user);

  // ========================================

  // 1. Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ key: 'property' }, 'key') => 'property'
// Пример: (user, 'first_name') => 'Nelli'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'last_name') => 'Efremyan'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age') => 27  

const userN = { 
  first_name: 'Nelli', 
  last_name: 'Efremyan', 
  age: 27 
}

const get_value = (obj, key) => obj[key];
console.log(get_value(userN, 'first_name')); // -> Nelli
console.log(get_value({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age'));
console.log(get_value({ city: 'Berlin', country: 'Germany' },'country'));

const person = {
  name: 'Ivan',
  age: 23
}
let key = 'name';
console.log(person.name);
console.log(person['name']);
console.log([key]);

// 2. Проверьте, что массив не пустой - в нем есть хотя бы один объект с ключом age.

const people = [
  {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    city: 'Moscow',
    country: 'Russia',
    active: true
  },
  {
    first_name: 'dmitry',
    last_name: 'Petrov',
    age: 7,
    city: 'Berlin',
    country: 'Germany',
    active: true
  },
  {
    first_name: 'Irina',
    last_name: 'Alexandrova',
    age: 46,
    city: 'Paris',
    country: 'France',
    active: false
  },
  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 10,
    city: 'Rome',
    country: 'Italy',
    active: false
  }
];

console.log(people[0].age); // 20 / undefined
console.log(people[0].hasOwnProperty('age')); // true / false
console.log('age' in people[0]); // true / false

  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
