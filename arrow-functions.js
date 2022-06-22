/* let hi = () => {
    console.log('Hello Robert');
}
hi(); */
/* let hi = (names) => {
    console.log(`Hello ${names}`);
}
hi('Mwenja'); */
//Return value
/* let add = (a, b) => {
    result = a + b;
    return result;
}
console.log('Answer is: '+add(7,6));
//Map Function In array
names = ['david', 'moses', 'amos','peter','Jesus'];
let values = names.map((naming)=>{
    console.log(`Hello ${naming}`);
}); */
//console.log(values);
names = ['david', 'moses', 'amos','peter','Jesus'];
let values = names.map((naming)=>{
    return `Hello ${naming}`;
});
console.log(values);