//Select an element from JSON object
function person() {
    let text = '{ "employees" : [' +
        '{ "firstName":"John" , "lastName":"Doe" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
    const obj = JSON.parse(text);
    let result = obj.employees[1].firstName+" "+obj.employees[1].lastName;
    return result;
}
console.log(person());
//Stringfy object or Convert object to JSON
let car ={
    make: "BMW",
    model: "245li",
    year: 2015,
    price: 25000
}
const obj = JSON.stringify(car);
console.log(obj);
//Return back to OBJECT and access it's elements
const cars = JSON.parse(obj);
console.log(cars.make);