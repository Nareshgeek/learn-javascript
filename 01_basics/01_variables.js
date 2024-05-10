const number = 123456
var email = "naresh@mail.com"
let password = "234788"
accountCity = "Faridabad"
let state;

// number = 2323 not allowed
email = "n@mail.com"
password = "776543"
accountCity = "Hyderabad"

console.log(number)
console.table([number,email,password,accountCity,state])

/*
    1. Prefer not to use var 
    because of issue in block scope and function scope
    
    2. Its our choice if we want to use semicolon (;) or not
 */