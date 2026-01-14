var http = require("http");
var onRequestHandler = function(request, response){
    
    response.write("happy new year");
    response.end() ;
}

var server = http.createServer(onRequestHandler);

server.listen(5000);
console.log("server is listening on port number 5000");