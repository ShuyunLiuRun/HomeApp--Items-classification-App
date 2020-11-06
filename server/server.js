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
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//home page's data
app.get('/', async (req, res, next) => {
    db.query('select * from master where contained_by = 0', [], function (result, fields) {
        console.log('查询结果：');
        console.log(result);

        res.end(JSON.stringify(result));
    });
});

//get specific item's data
app.get('/:id', function (req, res, next) {
    var id = req.params.id;
    db.query(`select * from master where contained_by = ${id}`, [], function (result, fields) {
        console.log('查询结果：');
        console.log(result);

        res.end(JSON.stringify(result));
    });
});

//add new item
app.post('/addItem', function (req, res) {
    console.log("request body:")
    console.table(req.body);
    var name = req.body.item_name;
    var adInfo = req.body.additional_information;
    var isC = req.body.is_container ? 1 : 0;
    var cB = parseInt(req.body.contained_by); 
    db.query("INSERT INTO master (item_name, contained_by, is_container, additional_json) VALUES (?,?,?,?);", [name, cB, isC, adInfo], function (result, fields) {
        console.log('查询Added Item：');
        console.log(result);

        res.end(JSON.stringify(result));
    });
});

app.post('/container', function (req, res) {
    db.query('select * from master', [], function (result, fields) {
        var toAdd = req.body;
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
