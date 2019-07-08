const express = require('express');
const app = express();
const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

app.get('/',function(req,res) {
    res.send('Request for root');
});

app.get('/products',function(req,res) {
    res.send('Request for products');
});

app.get('/c*t',function(req,res) {
    res.send('Request for wild card page');
});

app.post('/addProduct',function(req,res) {
    res.send('Record Inserted....POST');
});

app.put('/updateProduct',function(req,res) {
    res.send('Record updated....PUT');
});

app.delete('/deleteProduct',function(req,res) {
    res.send('Product deleted');
});

app.get('/api/products',function(req,res) {
    mongodb.connect(url,function(err,db){
        if(err) {
            console.log(err);
        } else {
            let dbo = db.db('angulardb');
            dbo.collection('tblProduct').find({}).toArray(function(err,documents) {
                if(err) {
                    console.log(err);
                } else {
                    res.send(documents);
                }
            });
        }
    });
});

app.listen(8080);
console.log('Server started: http://127.0.0.1:8080');