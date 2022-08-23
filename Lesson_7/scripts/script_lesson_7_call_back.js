// Call-back функции - это функция переданная в другую функцию в качестве аргумента

const multThree = () => {
    return 3 * 2;
}

const multFour = () => {
    return 4 * 2;
}

const multFive = () => {
    return 5 * 2;
}

const multNumber = (num) => {
    return num * 2;
}

multNumber(6);

let nums = [1, 2, 3, 4, 5];
let nums1 = [10, 20, 30, 40, 50];

const divideNums = (arr) => {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i] / 2);
    }
    return array;
}
// console.log(divideNums([1, 2, 3, 4, 5])); // => [0.5, 1, 1.5, 2, 2.5]
// console.log(divideNums(nums1)); // => [5, 10, 15, 20, 25]


const multNums = (arr) => {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i] * 2);
    }
    return array;
}
// console.log(multNums(nums)); // => [2, 4, 6, 8, 10]
// console.log(multNums(nums1)); // => [20, 40, 60, 80, 100]


// Функция высшего порядка (high-order-function) - функция, в которую в качестве аргумента передана другая функция:
const changeNums = (arr, callback) => {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(callback(arr[i])); // передаем инструкцию и работаем по инструкции с каждым элементом массива
    }
    return array;
}

// callback - function:
const divide = num => num / 2; // опускаем скобки и return {}
const mult = (num) => num * 2;
const plus = (num) => num + 2;
const change = (num) => num = 0;


console.log(changeNums(nums, (num) => num / 2));
console.log(changeNums(nums, mult));
console.log(changeNums(nums, plus));
console.log(changeNums(nums, change));

