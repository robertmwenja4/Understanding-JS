/* const names = prompt("What is your name?");
alert(`Your name is: ${names}`); */
const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.question("What is your name?: ", (names) =>{
    console.log(`My name is: ${names}`);
    rl.close();
});