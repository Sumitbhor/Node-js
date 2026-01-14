var fs = require("fs");
var fileName= "./data/readjsondata.js"

var onFileRead= function(err, data ){
    if(err){
        throw err ;
    }
    console.log("data from File available ");
    var jsondata = JSON.parse(data);
    console.log(jsondata);
}

fs.readFile(fileName, "utf8", onFileRead);