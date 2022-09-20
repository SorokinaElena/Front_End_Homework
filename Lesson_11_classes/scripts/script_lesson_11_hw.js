//ЗАДАЧА 1
// Реализуйте класс Language (Язык), который будет иметь следующие свойства:
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
//Создайте экземпляр этого класса
//Выведете в консоль все свойства созданного экземпляра класса
// Реализуйте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)

class Language {

        constructor(name, alphabet, country) {
            this.name = name;
            this.alphabet = alphabet;
            this.country = country;
        }

        get_info() {
            console.log(`Язык: ${this.name}, Алфавит: ${this.alphabet}, Страна, в которой говорят на этом языке ${this.country}`)
        }
}

const language_en = new Language('English', 'latin', 'England');
console.log(language_en);
console.log(language_en.name);
console.log(language_en.alphabet);
console.log(language_en.country);
language_en.get_info();

//ЗАДАЧА 2 (*посложнее)
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.
// Реализуйте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней на amount)

class Worker {

    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
//        this.salary = rate * days;
    }

    get_salary() {
        return this.rate * this.days
    }

    add_days(amount) {
        return this.days = this.days + amount       // this.days += amount
    }

    delete_days(amount) {
        return this.days = this.days - amount
    }

}

const worker_1 = new Worker('Ivan', 'Ivanov', 230, 20);
const worker_2 = new Worker('Petr', 'Petrov', 250, 15);
const sum_salary = worker_1.get_salary() + worker_2.get_salary();
console.log(sum_salary);

worker_1.add_days(1);
console.log(worker_1);

worker_2.delete_days(2);
console.log(worker_2);
