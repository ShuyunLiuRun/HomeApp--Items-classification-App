var express = require('express');
var app = express();
const db = require('./mysql/data.js');
var bodyParser = require('body-parser');

/**
 * body-parser 是必须要有的！ 不然request body是空的！
 * Body-parser is the Node. js body parsing middleware.
 * It is responsible for parsing the incoming request 
 * bodies in a middleware before you handle it.
 */

app.use(function (req, res, next) {
    //add a header message to solve cors security policy access deny problem
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//get specific item's data
app.get('/container/:id', function (req, res, next) {
    var id = req.params.id;
    db.query(`select * from master where contained_by = ${id}`, [], function (result, fields) {
        console.log('查询结果：');
        console.log(result);

        res.end(JSON.stringify(result));
    });
});

//get current container info
app.get('/item/:id', function (req, res, next) {
    var id = req.params.id;
    db.query(`select * from master where item_id = ${id}`, [], function (result, fields) {
        console.log('查询结果：');
        console.log(result);

        res.end(JSON.stringify(result));
    });
});

//add new item
app.post('/item', function (req, res) {
    console.log("request body:")
    console.table(req.body);
    var name = req.body.item_name;
    var additionalInfo = req.body.additional_information;
    var isContainer = req.body.is_container === 'true' ? 1 : 0;
    var containerId = parseInt(req.body.contained_by);
    db.query("INSERT INTO master " +
        "(item_name, contained_by, is_container, additional_json) " +
        "VALUES (?,?,?,?);",
        [name, containerId, isContainer, additionalInfo],
        function (result, fields) {
            console.log('查询Added Item：');
            console.log(result);

            res.end(JSON.stringify(result));
        });
});

// delete item
app.delete('/item/:id', function (req, res) {    
    var id = req.params.id;
    db.query(`DELETE from master WHERE item_id = ${id}`, 
    [], function (result, fields) {
        console.log('查询结果：');
        console.log(result);
        res.end();
    });
});

var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});
