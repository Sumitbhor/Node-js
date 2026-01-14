//Implement for Mysql Database Connectivity 

//Mysql module to be imported 
var mysql = require("mysql");

//Database connection 
//step 1 : cerate connectivity 
// step 2 : define sql query 
// step 3 : send sql query 
// step 4 : on receive result collect data and display data
var dbserver ={
    host:'localhost',
    user:'root',
    password:'sumit123',
    database:'employee'
};

var connection =mysql.createConnection(dbserver)
connection.connect(function(err){
    console.log(err)
});

var selectQuery= "select * from tasks";

connection.query(selectQuery,function(err,data){
    if(err){
        console.log("error : "+err);
    }
    else{
        console.log(data);
    }

})