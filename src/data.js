const { MyLocationOutlined } = require('@material-ui/icons');
var mysql = require('mysql');

module.exports.getData = ()=>{
    var res;
    var connection = mysql.createConnection({
        host:"192.168.1.233",
        user:"root",
        password:"Server001_mysql",
        database:"home_app"
    });
    
    connection.connect(function(err){
        if(err) throw err;
        console.log("connected!");
        connection.query("SELECT * FROM master WHERE contained_by ='1'", function(err, result,fields){
            if(err) throw err;
            res = JSON.stringify(result);
            console.log(res);        
        })
    });

    return res;
}
