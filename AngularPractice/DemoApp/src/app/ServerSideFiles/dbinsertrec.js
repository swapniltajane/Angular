const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

mongodb.connect(url, function(err,db) {
    if(err) {
        console.log(err);
    } else {
        let dbo = db.db('angulardb');
        let data = {
            Name: 'mobile',
            Price: 21000
        }
        dbo.collection('tblProduct').insertOne(data, function (err,res){
            if(err) {
                console.log(err);
            } else {
                console.log('Record inserted');
            }
        });
    }
});