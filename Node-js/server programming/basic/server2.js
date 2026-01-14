var person={
    'name':'sumit sudam bhor',
    'email': 'sumitbhor227@gmail.com',
    'contact': '8530086989'
}
var http = require("http");


var onRequestHandler = function(request, response){
    response.writeHead(200,{"content-type": "text/json"})
    response.write(JSON.stringify(person));
    response.end() ;
}

var server = http.createServer(onRequestHandler);

server.listen(5000);
console.log("server is listening on port number 5000");