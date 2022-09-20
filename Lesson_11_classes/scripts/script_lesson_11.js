// 4 способа создания объектов - литеральная нотация, с помощью классов, через Object.create
// Литеральная нотация объектов: - создаем объект вручную
const person = {
    name: 'Ivan',
    age: 23
  }

car1_1 = {                  // Объект, созданный вручную
    name : 'Toyota',
    model: 'RAV4', 
    country: 'Japan', 
    volume: 2.4, 
    color: 'red',   
    year: 2020
}  
console.log(car1_1);


// Класс - один из способов создания объектов

class Car {
    constructor(name, model, country, volume, color, year) {    // конструктор (встроенный метод) - встроенный в класс метод
        this.name = name;           // this - контекст - ссылка на объект, с которым происходит действие.name - свойство экземпляра класса, name - значение, которое передается при создании экземпляра класса
        this.model = model;
        this.country = country;
        this.volume = volume;
        this.color = color;
        this.year = year;
    }

    get_info() {
        console.log(`Car ${this.name} ${this.model} from the country: ${this.country}`)
    }

    get_year() {
        console.log(`Car ${this.name} the year of production: ${this.year}`)
    }
}

// Создаем экземпляры класса
const car1 = new Car('Toyota', 'RAV4', 'Japan', 2.4, 'red, 2020');  // экземпляр класса - объект, созданный с помощью класса
// this.name === car1.name ...
const car2 = new Car('BMW', 'X3', 'Germany', 2.0, 'green', 2018);
// this.name === car2.name ...
const car3 = new Car('BMW', 'X3', 'Germany', undefined, 'green', 2018);
// this.name === car3.name ...



// name, model, country, volume, color, year

console.log(car1);
console.log(car2);
console.log(car3);

console.log(car1.country);
console.log(car3.name);

// Самописные методы (функции внутри класса)

// Вызываем метод
car1.get_info();
car1.get_year();

car2.get_info();
car2.get_year();

// ЗАДАЧА
// Реализуйте класс Country (Страна), который будет иметь следующие свойства: 
// name (имя), capital (столица), population (численность населения), climat (климат)
//Создайте 3 экземпляра этого класса с разными свойствами
//Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса
//Реализйуте метод get_capital, который выводит в консоль сообщение 'The capital of <COUNTRY> is <CAPITAL>'

class Country {

    constructor(name, capital, population, climat) {
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.climat = climat;
    }

    get_capital() {
        console.log(`The capital of ${this.name} is ${this.capital}`)
    }

}

const country_1 = new Country('Germany', 'Berlin', 83000000, 'continental');
const country_2 = new Country('Russia', 'Moscow', 145000000, 'different climat arias');
const country_3 = new Country('Egypt', 'Cairo', 105000000, 'Tropical Desert');

console.log(country_1.name);
console.log(country_2.capital);
console.log(country_3.population);

country_3.get_capital();
