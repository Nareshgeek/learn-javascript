const marvalHeros = ["spiderman", "thor", "ironman"]
const dcHeros = ["superman", "flash", "batman"]

// marvalHeros.push(dcHeros)// it will add dcHeros array as one element
// console.log(marvalHeros); 

// const allheros = marvalHeros.concat(dcHeros) //this will add all elements as seperate elements
// console.log(allheros);

// so we can use spread in js
const allNewHeros = [...marvalHeros,...dcHeros] // here three dots(...) is spread operator
console.log(allNewHeros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Naresh"))
console.log(Array.from("Naresh"))
console.log(Array.from({name: "Naresh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));