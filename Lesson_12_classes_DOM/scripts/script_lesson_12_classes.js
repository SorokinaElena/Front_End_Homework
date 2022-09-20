// Реализуйте класс Group (групп), который будет иметь следующие свойства: 
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

class Group {
    constructor(name, major, number = 15) {     // number = 15 - запишется в свойства создаваемого обънкта, если аргумент при создании не передан
        this.name = name;
        this.major = major;
        this.number = 15;       // будет по умолчанию у всех создаваемых Объектов
    }

    add_student() {
        this.number ++      // += 1
    }

    delete_student() {
        this.number --
    }
}

const group_1 = new Group('31/32', 'JavaScript', 19);
console.log(group_1);
group_1.add_student();
console.log(group_1);
group_1.add_student();
console.log(group_1);
group_1.delete_student();
console.log(group_1);
const group_2 = new Group('33/34', 'Java', 10);
console.log(group_2);


// Создайте функцию, которая будет создавать экземпляры класса Group и собирать их в один массив 

const all_groups = [];

// function create_group(name, major, number) {
//     all_groups.push(new Group(name, major, number))
// }

// const create_group = (name, major, number) => {
//     const group = new Group(name, major, number);
//     all_groups.push(group);
// };

const create_group = (name, major, number) => all_groups.push(new Group(name, major, number));

create_group('31/32', 'JavaPro');
create_group('33/34', 'FrontEndPro');

console.log(all_groups);

// Создаем Объект - для того, чтобы обращаться к нему - задаем имя:
const user_1 = {
    name: 'Elena',
    age: 41
}

// В массиве к Объектам обращаемся по индексу (Объекту не нужно имя):
const users = [
    {
        name: 'Elena',
        age: 41
    },

    {
        name: 'Sergej',
        age: 39
    }
];
console.log(user_1);
console.log(users[1]);