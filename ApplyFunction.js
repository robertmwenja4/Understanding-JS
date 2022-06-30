//The apply() method accepts arguments in an array\
const person = {
    fullName: function(city, country){
        return this.firstName +" "+ this.lastName+ "," +city+ "," +country;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.apply(person1, ['Nairobi', 'Kenya']));