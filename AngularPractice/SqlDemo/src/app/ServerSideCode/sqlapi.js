const express = require ('express');
const mongodb = require ('mongodb');
const bodyParser = require ('body-parser');

const app = express();
const url = 'mongodb://127.0.0.1:27017';

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/api/getProducts', function(req,res){
    mongodb.connect(url, function(err, db) {
        if(!err) {
            var dbo = db.db('angulardb');
            dbo.collection('tblProduct').find({}).toArray(function(err, documents) {
                if(!err) {
                    res.send(documents);
                    console.log(documents);
                } else {
                    console.log(err);
                }
            }); 
        } else {
            console.log(err);
        }
    });
});
app.post('/api/addProduct', function(req, res) {    
    mongodb.connect(url, function(err, db) {
        if(!err) {
            var dbo = db.db('angulardb');
            dbo.collection('tblProduct').insertOne(req.body, function(err, result) {
                if(!err) {
                    console.log('Record inserted..');
                    res.send('Record inserted');
                } else {
                    console.log(err);
                }
            });
        } else {
            console.log(err);
        }
    });
});

app.listen(8080);
console.log('Server started');