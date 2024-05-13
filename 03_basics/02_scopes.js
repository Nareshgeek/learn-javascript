var variableOne = "var variable" // we should not use this anywhere because it does't work according to scpoes
const variableTwo = "const Variable"
let variableThree = "let variable"

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Naresh"
    function two(){
        const website = "Youtube"
        console.log(username + website)
    }
    //console.log(website)
    two()
}
one()


if(true){
    const user = "Naresh"
    if(user === "Naresh"){
        const lastName = " Kumar"
        console.log(user+lastName)
    }
    // console.log(lastName)
}
// console.log(user)


//++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

console.log(addOne(5)) // I can use this before function

// One way
function addOne(num){
    return num+1;
}

console.log(addOne(5))


//addTwo(5) // we cannot use this before initialize
// another way to create function
const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5)) // I cannot use it before addTwo variable decleration