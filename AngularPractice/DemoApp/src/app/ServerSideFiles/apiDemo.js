const express = require('express');
const mongodb = require('mongodb').MongoClient;
const app = express();
const url = 'mongodb://127.0.0.1:27017';

app.get('/',function(req,res){
    mongodb.connect(url,function(err,db) {
        if (err){
            console.log(err);
        } else {
            var dbo = db.db('angulardb');
            dbo.collection('tblProduct').find({}).toArray(function(err,documents){
                if (err) {
                    console.log(err);
                } else {
                    res.send(documents);
                }
            }); 
        }
    });
});

app.listen(8080);
console.log('server started');