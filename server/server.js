var express = require('express');
var app = express();
const db = require('./mysql/data.js');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', async (req, res, next) =>{
    console.log(req.body);
    db.query('select * from master where contained_by = 0', [],function(result,fields){
        console.log('查询结果：');
        console.log(result);

        res.end( JSON.stringify(result));
    });
});

app.get('/:id',function(req,res, next){
    var id = req.params.id;
    // db.query(`select * from master where contained_by = ${id}`, [],function(result,fields){
    //     console.log('查询结果：');
    //     console.log(result);

    //     res.end( JSON.stringify(result));
    // });

    res.end(id);
});

app.post('/addItem', function (req, res) {
    // 读取已存在的数据
    db.query('select * from master', [],function(result,fields){
        var toAdd = req.body;
        console.log('查询结果：');
        console.log(result);

        res.end();
    });
 });

 app.post('/container', function (req, res) {
    // 读取已存在的数据
    db.query('select * from master', [],function(result,fields){
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
