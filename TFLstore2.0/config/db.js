var mysql = require('mysql2');

var dbserver={
    host: "localhost",
    user: "root",
    password : "root123",
    database : "tflstore"
}

var connection = mysql.createConnection(dbserver);
connection.connect(function(err){
    if(err){
        console.log("connection failed:"+err)
    }
    else{
        console.log("connection succesful");
    }
});

// sql = "select * from customers"
// connection.query(sql, function(err,data){
//     if (err){
//         console.log(err);
//         return ;
//     }
//     else{
//         console.log(data)
//     }
// })

module.exports =connection ;