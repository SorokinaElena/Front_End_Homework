// 1. Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль.

function get_length (str) {
    return str.length
}
console.log(get_length(`Elena Sorokina!!!`));

let str_length = (str) => str.length; // если один аргумент, то можно убрать (str)
console.log(str_length(`Elena Sorokina!!!!`));


// 2. Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function make_pow (base_number) {
const extent = 2;
return base_number ** extent;
}
console.log(make_pow(4));

function get_exp (num1, num2 = 2) {
    return num1 ** num2; // return Math.pow(num1, num2)
    }
    console.log(get_exp(4));

let numExp = (num1, num2 = 2) => num1 ** num2;
console.log(numExp(4, 2));    
console.log(numExp(4));    

// 3. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение. Выведите результат в консоль. Предложите два варианта решения (через условный оператор и Math.max()).

function getMax (number_1, number_2) {
    if (number_1 > number_2) {
        return number_1;
    } else {return number_2}
}
console.log(getMax(100,100));

function getMax_1 (num1, num2) {
    return Math.max(num1, num2);
}
console.log(getMax_1(15,10));

let MaxNum = (num1, num2) => Math.max(num1, num2);
console.log(MaxNum(10,100));

let MaxNum_1 = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {return num2}
}
console.log(MaxNum_1(1,11));


// 4. Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль отсортированные числа по убыванию. Используйте условный оператор.

// function getNumMax (n1, n2, n3) {
//     let varNum = n1;
//     if (n2 > varNum) {
//         varNum = n2;
//     } 
//     if (n3 > varNum) {
//         varNum = n3;
//     }
//     return varNum;
// }
// console.log(getNumMaxMax(1,3,2));

function getNumMaxMin (n1, n2, n3) {
    let maxNum = Math.max(n1, n2, n3);
    let minNum = Math.min(n1, n2, n3);
    let middleNum;
    if (n1 > minNum && n1 < maxNum) {
        middleNum = n1;
    }
    if (n2 > minNum && n2 < maxNum) {
        middleNum = n2;
    }
    if (n3 > minNum && n3 < maxNum) {
        middleNum = n3;
    }
    return (`${maxNum}, ${middleNum}, ${minNum}`);
}
    console.log(getNumMaxMin(1, 30, 100));


    function sortNums(num1, num2,num3) {
        if (num1 > num2 && num1 > num3) {
            if (num2 > num3) {
                console.log(num1, num2, num3)
            }
            else {console.log(num1, num3, num2)}
        } else if (num2 > num1 && num2 > num3) {
            if (num1 > num3) {
            console.log(num2, num1, num3)
            } else {
            console.log(num2, num3, num1)
            }
        } else {
            if (num1 > num2) {
                console.log(num3, num1, num2)
            } else {
                console.log(num3, num2, num1)
            }
        }
        }
    console.log(sortNums(1, 30, 100));

        

// 5. Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них. Используйте условный оператор.
function getNumMax (n1, n2, n3, n4, n5) {
        let varNum = n1;
        if (n2 > varNum) {
            varNum = n2;
        } 
        if (n3 > varNum) {
            varNum = n3;
        }
        if (n4 > varNum) {
            varNum = n4;
        }
        if (n5 > varNum) {
            varNum = n5;
        }
        return varNum;
    }
    console.log(getNumMax(1, 3, 2, 100, -5));