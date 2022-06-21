let names = ['roba', 'mose', 'obed', 'beaty', 'steve'];
let a, b, c, d, e;
/* [a, b, c, d, e] = names;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); */
let others;
[a, b, ...others] = names;
console.log(a);
console.log(b);
console.log(others);

let year, model;
({year, model} = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    value: 5000
});
console.log('.......................');
console.log(year);
console.log(model);