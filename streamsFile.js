const fs = require('fs');

const readStream = fs.createReadStream('./dir/text0', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./dir/text5');

//Read and write stream of data
/* readStream.on('data', (chunk) => {
    console.log('------New Stream------')
    console.log(chunk);
    writeStream.write('\nNew Stream\n')
    writeStream.write(chunk);
}); */
//Piping is faster and easier
readStream.pipe(writeStream);