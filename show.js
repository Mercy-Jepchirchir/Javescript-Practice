//variable- storage for variables
let y = 2
console.log(y);
//variable- can be done in a line
var x = 2; y = 2; c= 4;

const greet = "Achieng"
const me = "Mercy"

console.log(greet ,+' '+me);

//data types in js
//undefined is a variable which is not initialized
let a;
//string
const school = "AkiraChix";
const my = "Mercykemboi";
const resultt = `I am in  ${school} and my name is ${my}`;
console.log(resultt);

const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;
console.log(result);

//object dataType- allows to store  collection of data
const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};
console.log(student);

//Arithmetic operator 
let num = 5;
let num2 = 6;

console.log(num + num2);//addition
console.log(num - num2);//subtraction
console.log(num* num2);//multiplication
console.log(num / num2);//division
console.log(num++);//increment
console.log(++num);
console.log(num--);//decrement
console.log(--num);
console.log(num ** num2);//exponentiation
console.log(num % num2);//modulus


//comparison operator
const num3 = 5, num4 =6;
console.log(num3 > num4);//compare two numbers and returns true or false

console.log(num3 != num4);//true
console.log(num3 == num4);//false
console.log(num3 === num4);//strictly equal always returns true if it equates, but it has returns false here
console.log(num3 !== num4);//strictly equal always returns false if it equates to the condition, but it has returns true

//logical operators perform logical oparation and returns a boolean value
//logical operator AND returns true if both operands are true hence false
const number1 = 7, number2 =8;
console.log((number1 >6)&&(number1 < number2));//true


//logical operator OR returns true if either operands are true and returns false if both operands are false
const akira = true;
const country = false;
console.log(akira||country);//true
console.log(akira||akira);//true
console.log(country||country);//false

//logical operator NOT , true if the operand is  false and vice versa
console.log(country != country);//false
console.log(country != akira);//false




