const mongodb = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

mongodb.connect(url, function(err,db) {
    if(err) {
        console.log(err);
    } else {
        let dbo = db.db('angulardb');
        dbo.collection('tblProduct').find({}).toArray(function(err,documents){
            if(err) {
                console.log(err);
            } else {
                console.log(documents);
            }
        });
    }
});