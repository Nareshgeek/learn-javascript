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