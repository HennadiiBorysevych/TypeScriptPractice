const btn = document.querySelector('#btn')! as HTMLButtonElement;
console.log("🚀 ~ file: app.ts:2 ~ btn:", btn);
const numberOne = document.querySelector('#value1')! as HTMLInputElement;
const numberTwo = document.querySelector('#value2')! as HTMLInputElement;

function add(value1: number, value2: number) {
    return value1 + value2;
}
btn.addEventListener('click', () => {
    console.log(add(+numberOne, +numberTwo));
})
function showMessage(message: string) {
    console.log(message);
}


function calc(num1: number, num2: number): number {
    return num1 + num2;
}

function customError(): never {
    throw new Error('Error');
}
let age: number;
let named: string;
let tog: boolean;
let empty: null;
let notInitialize: undefined;

// let callback = (a: number) => number;

let anything: any;

anything = -20;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {

    str = some;
}
let person: [string, number];
person = ['Max', 21];

// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };