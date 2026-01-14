var http = require("http");


var onRequestHandler = function(request, response){
    response.writeHead(200,{"content-type": "text/html"})
    response.write("<h1>happy new year</h1>");
    response.end() ;
}

var server = http.createServer(onRequestHandler);

server.listen(5000);
console.log("server is listening on port number 5000");