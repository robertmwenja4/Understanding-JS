//const req = require('./car');
//Using Destructuring
const { cars, years } = require('./car');

//console.log(req.cars[1], req.years[1]);
console.log(cars, years[1]);

const os = require('os');
console.log(os.platform(), os.homedir(), os.networkInterfaces());