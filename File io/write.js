var fs = require('fs');
var fileName="./data/info.txt";
var dataTObeWritten = "this data is written by node js";
var onFileWrite=function(err){
    if (err){
        throw err;
    }
    console.log("content hass been successfully written onto file ")
}

fs.writeFile(fileName, dataTObeWritten , onFileWrite);
console.log("Node js applicaton about to be terminated ");