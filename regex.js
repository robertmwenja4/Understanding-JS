//Involves finding if a string exists in another string
let pattern = /xyz/;
console.log(pattern);
console.log(typeof pattern);

let value = 'This is xyz a text';
console.log(pattern.test(value));
console.log(value.match(pattern));
//console.log(value.replace(pattern, 'just'));
let match = value.match(pattern);
let pat = pattern.test(value);
console.log(match.index);
if (pat == true) {
    console.log("String exists");
}
console.log(pattern.lastIndex);