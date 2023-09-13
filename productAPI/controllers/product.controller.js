var dbCon = require('../config/db_connection');

var connection = dbCon.getConnection();

connection.connect();

var express = require('express');
var router = express.Router();

router.get('/',(req, res) => {
    connection.query('select * from product',(error, records, fields)=> {
        if(error){
            console.log('error while featching the data')
        }else {
            res.send(records);
        }
    });
})

router.get('/:id',(req, res) => {
    connection.query('select * from product where id='+req.params.id,(error, records, fields)=> {
        if(error){
            console.log('error while featching the data')
        }else {
            res.send(records);
        }
    });
})

router.post('/', (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var description = req.body.description;
    var price = req.body.price;

    connection.query(
        "INSERT INTO product (id, name, description, price) VALUES (?, ?, ?, ?)",
        [id, name, description, price],
        (error, result) => {
            if (error) {
                console.log('Error while inserting the data: ' + error);
                res.status(500).send({ insert: "error" });
            } else {
                console.log('Data inserted successfully.');
                res.status(200).send({ insert: "success" });
            }
        }
    );
});

router.put('/', (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var price = req.body.price;

    connection.query(
        "update product set name='"+name+"',price="+price+" where id="+id,
        (error, result) => {
            if (error) {
                console.log('Error while updating the data: ' + error);
                res.status(500).send({ update: "error" });
            } else {
                console.log('Data updated successfully.');
                res.status(200).send({ update: "success" });
            }
        }
    );
});

router.delete('/:id',(req, res) => {
    connection.query('delete from product where id='+req.params.id,(error, records, fields)=> {
        if(error){ 
            console.log('error while deleting the data')
        }else {
            res.send({delete:"Delete success"});
        }
    });
})

module.exports = router;