var express = require('express');
var app = express();
var fs = require("fs");
const { get } = require('http');
const {getData} = require('./data.js')

app.get('/listUsers', function (req, res) {
    console.log( getData );
    res.end( getData );
})

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})