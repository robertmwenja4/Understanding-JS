//Constructors
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('BMW', '745li', 2015);
console.log(myCar);

function myFun() {
    console.log("Hello Function");
}
let fun = new myFun();
console.log(typeof fun);