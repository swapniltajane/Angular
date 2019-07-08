const mongodb = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

mongodb.connect(url,(err,db) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Connected successfully...');
    }
});