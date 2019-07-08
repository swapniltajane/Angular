const fs = require('fs');

let data = fs.readFile('help.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

console.log('Read complete..');