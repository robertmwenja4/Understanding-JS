//Declaration of classes
class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    print(){
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

let myCar = new Car('BMW', '745li', 2015);
myCar.print();

class SportCar extends Car {
    engine(){
        console.log('The engine is: '+this.model);
    }
}
let mySportCar = new SportCar('Ferrari','250c', 2022);
mySportCar.print();
mySportCar.engine();