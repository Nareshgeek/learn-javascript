// primitive data type
// 7 types - String, Number, Boolean, Null, Undefined, Symbol, Bigint

// reference type  (non-primitive data type)
// arrays, objects, functions

const user = "Naresh"
const userId = 123.4
const isLoggedIn = true
const city = null;
let state;
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);
console.log(typeof id)
console.log(id)
console.log(anotherId)

// arrays
const arr = ["red","yellow","blue","white"]

// object
const obj = {
    name: "Naresh",
    age : "30"
}

// function
const functionValue = function(){
    console.log(" My Function ")
}

console.log(typeof obj)

//-------------------------------------Memory in js----------------------------

// Stack (primitive) heap (non-primitive) 

let oneVariable = "Hello World"
let secondVar = oneVariable
secondVar = "Hello Universe"
console.log(oneVariable);
console.log(secondVar)

// in above both primitive type variable allocate different memory in stack. So even after refering one to another if we change any variable value other variable value will not be affected.

let firstObject = {
    name : "naresh",
    mail : "naresh@mail.com"
}

let secondObject = firstObject

secondObject.mail = "naresh@google.com" 
//becouse of above line email will be change in both objects

// above change will be impected in both the objects

console.log(firstObject);
console.log(secondObject)