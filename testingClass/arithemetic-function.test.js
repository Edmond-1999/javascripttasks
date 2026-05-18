
const { add, subtract } = require ('./arithemetic-function')


//import{ add, subtract } from './arithemetic-function.js'


test("test additiion of two positive numbers", () => {

    let firstNumber = 82;

    let secondNumber = 18;

    expect(add(firstNumber, secondNumber)).toBe(100);



})



test("test that addition of a postive and a negative number works arcurately", () =>{

    let firstNumber = 82;

    let secondNumber = -18;

    expect(add(firstNumber, secondNumber)).toBe(64);

})


test("test that addition of two negative numbers returns correct numbers", () =>{

   let firstNumber = -10;

    let secondNumber = -18;

    expect(add(firstNumber, secondNumber)).toBe(-28);

})


test("test that subtraction of two positive numbers returns correct numbers", () =>{

   let firstNumber = 10;

    let secondNumber = 5;

    expect(subtract(firstNumber, secondNumber)).toBe(5);

})

test("test that subtraction of two negative numbers returns correct numbers", () =>{

   let firstNumber = -10;

    let secondNumber = -5;

    expect(subtract(firstNumber, secondNumber)).toBe(-5);

})
