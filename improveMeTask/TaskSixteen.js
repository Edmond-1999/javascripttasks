const prompt = require("prompt-sync")();

let firstNumber = parseInt(prompt("Enter a number: "));
let secondNumber = parseInt(prompt("Enter another number: "));

function sumOfNumbers(firstNumber, secondNumber){
    let sum = firstNumber + secondNumber;
    return sum;
}

console.log(sumOfNumbers(firstNumber, secondNumber));

