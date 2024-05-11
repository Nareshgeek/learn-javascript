let name = "Naresh"
let repoCount = 5

// console.log(name + " " +repoCount) // this is old but it will work
// now days we define string like below

console.log(`Hi my name is ${name} and my repocount is ${repoCount} .`)

// ` this symbol we call backticks and it is above tab key 


const str = new String("Naresh") // this is one more way to initialize a string

console.log(str.length)
console.log(str[1])
console.log(str.toUpperCase())
console.log(str.indexOf('s'))



const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   naresh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://naresh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));