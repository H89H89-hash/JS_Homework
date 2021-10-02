"use strict";

const numbers = [];
let input = prompt("Введите число");

while (input !== null) {
  numbers.push(Number(input));
  input = prompt("Введите число");
}

let total = 0;

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
