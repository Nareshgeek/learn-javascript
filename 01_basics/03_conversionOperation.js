// 1. here we are converting value into number type
let value = "33"
let convertNumber = Number(value) 
//console.log(typeof convertNumber)
//console.log(convertNumber);

// "33" => number
// "33aa" => NaN
// true => 1, false => 0
// undefined => NaN
// null => 0

// 2. here we are converting value into String type
let strvalue = undefined
let stringValue = String(strvalue)
//console.log(stringValue);
//console.log(typeof(stringValue))

// 1234 => "1234"
// true => "true"
// null => "null"
// undefined => "undefined"

// 3. here we are converting value into boolean type
let isvalue = "null"
let boolValue = Boolean(isvalue)
console.log(boolValue)
console.log(typeof boolValue)

// 1 => true
// 0 => false
// "" => false
// "ab" => true
// null => false


// *********************** Operations ***********************

let valu = 3
let negValue = -valu
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion