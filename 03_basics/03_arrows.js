const obj1 = {
    name: "Naresh",
    city: "Faridabad",
    address: function(){
        console.log(`my name is ${this.name} and city is ${this.city}`)
    }
}
obj1.name = "Sam"
obj1.city = "Noida"
obj1.address()