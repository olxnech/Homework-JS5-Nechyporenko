'use strict'

// Завдання 1

function power(nam, n){
    return (n==1) ? nam : nam*power(nam, n-1);
}
console.log(power(2, 4));

// ***********************************************
// Завдання 2

// function maxDiv(a, b){
//     if(a<b) return maxDiv(b, a);    
//     if(!b) return a;
//     return maxDiv(b, a%b);
// }
// console.log(maxDiv(125, 25));

// ***********************************************
// Завдання 3

// function maxDigit(nam){
//     if(nam<10) return nam;
//     return Math.max(nam%10, maxDigit(parseInt(nam/10)))
// }
// console.log(maxDigit(1835));

// ***********************************************
// Завдання 4

// function primeNumber(nam, div=2){
//     if(nam<2){
//         return false;
//     } else if(nam==2){
//         return true;
//     } else if(nam%div==0){
//         return false;
//     } else if(div<nam/2){
//         return primeNumber(nam, div+1)
//     } else{
//         return true;
//     }

// }
// console.log(primeNumber(111));

// ***********************************************
// Завдання 5

// function factors(a, arr=[], b=2){
//     if(b>Math.sqrt(a)){
//         arr.push(a);
//         return arr;        
//     } else if(a%b==0){
//         arr.push(b);
//         factors(a/b, arr, b);
//     } else{
//         factors(a, arr, ++b)
//     }
//     return arr.join('*');
// }
// console.log(factors(18));

// ***********************************************
// Завдання 6

// function fibonachi(nam){
//     if(nam<2){
//         return nam;
//     }
//     return fibonachi(nam-1)+fibonachi(nam-2);
// };
// console.log(fibonachi(12));