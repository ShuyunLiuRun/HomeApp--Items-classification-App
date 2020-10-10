var express = require('express');
var app = express();
const db = require('./mysql/data.js');

app.get('/', async (req, res) =>{
    console.log(req.body);
    db.query('select * from master where contained_by = 0', [],function(result,fields){
        console.log('查询结果：');
        console.log(result);

        res.end( JSON.stringify(result));
    });
});

app.get('/:id',function(req,res){
    var id = req.params.id;
    res.send(id);
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
