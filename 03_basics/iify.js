// IIFE Immediately invoked Function Expression

// this will run on start time of application as we use static block in java
(function show(){
    console.log("Database connection")
})();

( (value) => {
    console.log(`Second DB connected ${value}`)
})("MongoDB");