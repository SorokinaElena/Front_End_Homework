// 1. Напишите цикл for, который выводит числа в консоль от 100 до 130.

// for (let i = 100; i <= 130; i+= 1 ) {
//     console.log(i);
// }

// 2. Напишите цикл for, который выводит числа в консоль от 196 до 110 с шагом 3.

// for (let i = 196; i >= 110; i -= 3) {
//     console.log(i);
// }

// 3. Напишите цикл for, который выводит в консоль нечетные числа от 45 до 35.

// Мое решение:
// for (let i = 45; i >=35; i -=2) {
//     console.log(i);
// }

// Проверочное решение:
// for (let i = 45; i >= 35; i--) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// 4. В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// let getSum = (n, m) => {
//     if (n % 2 === 0) {
//         let sum = 0;
//         for (n; n <= m; n += 2) {
//             sum = sum + n;
//         }
//         return sum;
//     } else {
//         let sum = 0;
//         for (n; n <= m; n += 2) {
//            sum = sum + n;
//         }
//         return sum;
//     } 
// }
// console.log(getSum(3, 8));

let getSum = (n, m) => {

    let sum_even = 0;
    let sum_not_even = 0;

    for (n; n <= m; n += 1) {
        if (n % 2 === 0) {
            sum_even = sum_even + n;
        } else {
            sum_not_even = sum_not_even + n;
        }
    }
    console.log(sum_even);
    console.log(sum_not_even);
}
// getSum (1, 4);    


// В программе задана переменная n. Напишите программу, которая с помощью цикла считает сумму чисел от 1 до n и выводит в консоль.

let getSum_2 = (n) => {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum +=i;
    }
    console.log(sum);
}
getSum_2(3);