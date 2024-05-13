function name() {
    //console.log("this is a function")
}

name()

function parametrizedFunctionForAdd(number1,number2){
    console.log(number1+number2)
}
//parametrizedFunctionForAdd(4,6)

function returnSomething(name = "computer"){ // here we can provide default value
    return `Hi I am ${name}`
}

// let result = returnSomething("Naresh")
// console.log(result)

//console.log(returnSomething())

function calculateCartPrice(...price){ // here three dots(...) are called rest operator
    return price
}

//console.log(calculateCartPrice(30,20,10))


function calculateCartPriceDifferently(val1, val2, ...val3){ //first 2 args will go in val1 and val2 and rest all arguments will go in val3
    return val3
}

//console.log(calculateCartPriceDifferently(10,20,30,40,50)) 

const obj = {
    name:"Naresh",
    age:18
}

function passObject(anyObject){
    console.log(`my name is ${anyObject.name} and age is ${anyObject.age}`)
}

passObject(obj)
passObject({
    name:"Naresh",
    age:18
})

const arr = [10,20,30]

function passArray(anyArray){
    console.log(anyArray[1])
}

passArray(arr)