//Value was expected but was not found hence null
let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern);
console.log(typeof result);
console.log(result);