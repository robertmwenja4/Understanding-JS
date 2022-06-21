// console.log('Hello World');
// //Type coersion
// let num1 = 7;
// let num2 = '6';
// num2 = parseInt(num2, 10);
// let c = num1 + num2;
// console.log(c);
//If statement
// var count = 3;
// if (count == 4) {
//     console.log('Count is 4');
// }
// else if(count>4){
//     console.log('Count is greater than 4');
// }
// else if(count<4){
//     console.log('Count is less than 4');
// }
// else{
//     console.log('UnKnown'); 
// }

// let count = 5;
// switch (count) {
//     case 1:
//         console.log('This is one');
//         break;
//     case 2:
//         console.log('This is two');
//         break;

//     default:
//         console.log('This is the Other');
//         break;
// }
// let a = 1, b = '1';
// let result = (a == b) ? 'equal' : 'inequal';
// console.log(result);
// console.log((a === b) ? 'equal' : 'inequal');
// console.log((a !== b) ? 'Not equal' : 'equal');

//Looping or iteration
/*let i =0;
while (i < 10) {
    console.log(i);
    if (i == 7) {
        break;
    }
    i++;
}
let a = [12,20,45,66,57,58,24,39];
for (let b = 0; b < a.length; b++) {
    const c = a[b];
    console.log(c);
}*/
//Fuction Scope
/*let a = 'First';
function scope() {
    //Inside function
    console.log(a);
    let b;
    if (a != '') {
        b = 'second';
    }
    console.log(b);
}
scope();
//console.log(b);*/
//Returning functions
// function one() {
//     return function (one){
//         return function (two){
//             return 'String '+one+' and '+two;
//         }
//     }
// }
// console.log(one()('one')('two'));

//Objects
let car = {
    name: 'BMW',
    model: '250C',
    year: 2015,
    getPrice: function (){
        return 5000;
    },
    priceDescription: function(){
        return this.name +' is a '+this.model;
    },
    engine: {
        cc: 500,
        type: '512cc'
    }
}
console.log(car.priceDescription());
console.log(typeof car);
console.log(car.engine.type);

var a = {
    myArray: [
        {b: 1},
        {c: 2},
        {d: 'Never'}
    ]
};
console.log(a.myArray[1].c);