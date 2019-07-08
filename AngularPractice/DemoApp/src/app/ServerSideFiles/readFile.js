const fs = require('fs');

let data = fs.readFileSync('help.txt');
console.log(data.toString());