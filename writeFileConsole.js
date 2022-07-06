const { stdin, stdout } = require("process");
const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.question("What is your name?: ", (names) => {
    const n = {
        name: names
    }
    console.log(n);
    fs.writeFile('./dir/text2', names, () => {

        console.log('File writen');
    })

    rl.close();
});