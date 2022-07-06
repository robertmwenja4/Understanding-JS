//Requires fs -> File system
const fs = require('fs');
//This is asynchronous
/* fs.readFile('./dir/text', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log('Hello'); */

//Write Files
fs.writeFile('./dir/text1', 'Welcome to Nodejs', () => {
    console.log('File Written Successfully!!');
});
//Directories
/* if (!fs.existsSync('./assests')) {
    fs.mkdir('./assests', (err) => {
        if (err) {
            console.log('Folder Not created')
        }
        console.log('Folder Created');
    });
}
//Remove Dir
if (fs.existsSync('./assests')) {
    fs.rmdir('./assests', (err) => {
        if (err) {
            console.log('Folder Not removed')
        }
        console.log('Folder Removed');
    });
} */
//Delete files
if (fs.existsSync('./dir/text2')) {
    fs.unlink('./dir/text2', (err) => {
        if (err) {
            console.log('File not deleted')
        }
        console.log('File deleted')
    });
}