const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  //Call function calls an method of an object, subtititution
  let p1 = person.fullName.call(person1, "Oslo", "Norway");
  console.log(p1);