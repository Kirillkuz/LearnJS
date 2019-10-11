// 'use strict';
// let number1;
// let number2;
// // number1=prompt("Ввведите первый операнд сложения",0);
// // number2=prompt("Введите второй операнд сложения",0);
// // number2=2;
// let i=1
// stupid:while(i)
// {
//     Number(number1)+Number(number2)==prompt(number1+"+"+number2+"=","")?i=0:i++;
// if(i==3)
// break stupid;

// }


var input = document.getElementById('input');
var res = document.getElementById('val');

// console.log(input.value);

input.addEventListener('change', () => {
    res.textContent = input.value;
})

//  alert(Number(number1)+Number(number2));


