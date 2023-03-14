"use strict";
const btn = document.querySelector('#btn');
console.log(btn);
const numberOne = document.querySelector('#value1');
console.log("🚀 ~ file: app.ts:4 ~ numberOne:", numberOne);
const numberTwo = document.querySelector('#value2');
function add(value1, value2) {
    return value1 + value2;
}
btn.addEventListener('click', () => {
    console.log(add(+numberOne.value, +numberTwo.value));
});
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
let age;
let named;
let tog;
let empty;
let notInitialize;
// let callback = (a: number) => number;
let anything;
anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
let person;
person = ['Max', 21];
// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };
