// Date

let date = new Date()

// console.log(typeof date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toLocaleString())

//let mycreatedDate = new Date(2023,0,23)
//let mycreatedDate = new Date(2023,0,23,15,31,56)
//let mycreatedDate = new Date("2024-05-11")
let mycreatedDate = new Date("05-11-2024")

//console.log(mycreatedDate.toLocaleString())

let mytimestamp = Date.now()
console.log(mytimestamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
}) 

// in above function we can customize the date and time format