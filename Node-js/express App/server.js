var express = require("express");
var path = require("path");
var app = express(); //get global object
                     //global object contains http server 
var staticFolder= express.static(path.join(__dirname, "public"));
// expres framework configuration 
app.use(staticFolder);
// Express Framework setting handler 
// mapping incomming request to callback function 
app.get("/", (request,response)=>{
    response.sendFile(__dirname+ "/index.html");
});

app.get("aboutUs", (request,response)=>{
    responce.sendFile(__dirname + "/aboutUs.html")
})

app.get("/customers", (request, response)=>{
    var customers=[
        {"id":1,"firstName":"Sumit", "lastName":"Bhor"},
        {"id":2,"firstName":"yash", "lastName":"gawadee"},
        {"id":3,"firstName":"parikshit", "lastName":"shelorkar"},
        {"id":4,"firstName":"sanika", "lastName":"Bhor"}
    ];
    response.send(customers);
})
app.listen(5000);
console.log("Express web application is listening on port number 5000");

