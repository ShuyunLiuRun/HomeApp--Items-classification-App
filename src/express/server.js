var express = require('express');
var app = express();
var fs = require("fs");
const { get } = require('http');
const db = require('../mysql/data.js');
var promises =require('promises');
var Promise = require('promise');

app.get('/listUsers', async (req, res) =>{
    db.query('select * from master', [],function(result,fields){
        console.log('查询结果：');
        console.log(result);

        res.end( JSON.stringify(result));
    });
})

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})