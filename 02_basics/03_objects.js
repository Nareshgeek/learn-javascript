// singleton

// object literals

const symb = Symbol("sym")

const jsUser = {
    [symb]: "mySymbol", // only thats how we can use symbol in object 
    name: "Naresh",
    "full name": "Naresh Kumar",
    age: 18,
    location: "Faridabad",
    mail:"naresh@mail.com",
    isLoggedIn:false,
    lastLogIn:[1,3,6]
}

// console.log(jsUser.name)// we should not use like this to access any element in an object
// console.log(jsUser["name"])// we shoud do like this to access any object
// console.log(jsUser["full name"]); // because in this case we cannot use dot to access the element
// console.log(jsUser[symb])

jsUser.mail = "naresh@chatgpt.com" // to override any value
//Object.freeze(jsUser) // to freez any object so no one can change its value
jsUser.mail = "naresh@microsoft.com"

//console.log(jsUser);

// below are the ways we can create functions in an object
jsUser.greeting = function(){
    console.log("hello greetings")
}

jsUser.greetingTwo = function(){
    console.log(`hello my name is ${this.name}`) // this we can use to access any variable of an object.
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())