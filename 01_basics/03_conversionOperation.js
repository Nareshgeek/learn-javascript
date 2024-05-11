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
