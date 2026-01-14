var express = require("express");
const { request } = require("http");
var path = require("path");
var bodyParser = require("body-parser")
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
var staticMiddleware= express.static(path.join(__dirname, "public"));
app.use(staticMiddleware);
app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});

app.post("/login",(request,response)=>{
    console.log(request.body)   
    console.log("Login form is posted by browser is receive at server")
});

app.post("/register",(request,response)=>{
    console.log(request.body)
    console.log("register form is posted by browser is receive at server")
});
app.listen(5000);
console.log("Website is being hosted on port no 9000");