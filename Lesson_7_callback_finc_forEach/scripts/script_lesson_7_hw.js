// сделать двумя способами - цикл for и метод  forEach

// Дан массив

let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// Сформируйте новый массив с числами меньше 100. Предложите два способа решения (цикл for и метод .forEach).

let get_new_array = (array) => {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 100) {
            new_array.push(array[i]);
        }
    }
    return new_array;
}
console.log(get_new_array(array));

let new_array = [];
array.forEach (elem => {
    if (elem < 100) {
        new_array.push(elem);
    }
});
console.log(new_array);

// Сформируйте новый массив с числами, которые кратны 2. Предложите два способа решения (цикл for и метод .forEach).


let get_new_array1 = (array) => {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] !== 0) {
            new_array.push(array[i]);
        }
    }
    return new_array;
}
console.log(get_new_array1(array));

let new_array1 = [];
array.forEach (elem => {
    if (elem % 2 === 0 && elem !== 0) {
        new_array1.push(elem);
    }
});
console.log(new_array1);

// Сформируйте новый массив с числами, которые заканчиваются на 5. Предложите два способа решения (цикл for и метод .forEach).

let get_new_array3 = (array) => {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 10 === 5) {
            new_array.push(array[i]);
        }
    }
    return new_array;
}
console.log(get_new_array3(array));

let new_array2 = [];
array.forEach (elem =>{
    if (elem % 10 === 5) {
        new_array2.push(elem);
    }
});
console.log(new_array2);

// Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'. Предложите два способа решения (цикл for и метод .forEach).

let get_new_array4 = (array) => {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 100) {
            new_array.push('> 100');
        } else if (array[i] === 100) {
            new_array.push('= 100');
        } else {
            new_array.push('< 100');
        }
    }
    return new_array;
}
console.log(get_new_array4(array));

let new_array3 = [];
array.forEach (elem => {
    if (elem > 100) {
        new_array3.push('> 100');
    } else if (elem === 100) {
        new_array3.push('= 100');
    } else {
        new_array3.push('< 100');
    }
});
console.log(new_array3);
