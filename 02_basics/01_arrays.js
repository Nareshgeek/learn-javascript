// Arrays
const myArray = [0,1,2,3,4,5]

// console.log(myArray);
// console.log(myArray.indexOf(4)); // it will return index of element if exist
// myArray.push(6) // it will push element in last
// console.log(myArray); 
// myArray.pop() // it will pop element from last
// console.log(myArray);
// myArray.unshift(8) // it will add an element in starting by shifting whole array
// console.log(myArray); 
// myArray.shift() // it will remove first element from array
// console.log(myArray); 
console.log(myArray.includes(5))

const arr = myArray.slice(1,3)
console.log(arr);
console.log("normal array :" + myArray)

const arr1 = myArray.splice(1,3) // it change the actual array and remove the splice elements
console.log(arr1)
console.log("normal array :" + myArray)