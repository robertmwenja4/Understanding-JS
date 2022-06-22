let originalCar = {
    make: 'BMW',
    model: '745li',
    year: 2010
};

let anotherCar = Object.create(originalCar);
console.log(anotherCar.make);
originalCar.price = 5000;
console.log(originalCar);
//console.log(Object.getPrototypeOf(anotherCar));
let myPrototype = Object.getPrototypeOf(anotherCar);
myPrototype.doors = 4;
myPrototype.make = 'Audi';
console.log(originalCar);
console.log(myPrototype);
console.log("..............................................");
console.log(originalCar.hasOwnProperty('doors'));
console.log(anotherCar.hasOwnProperty('price'));