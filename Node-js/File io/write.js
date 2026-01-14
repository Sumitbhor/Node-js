var fs = require('fs');
var fileName="./data/info.txt";
var dataTObeWritten = "this data is written by node js";
var onFileWrite=function(err){
    if (err){
        throw err;
    }
    console.log("content hass been successfully written onto file ")
}
/*first parameter : path of the file 
second parameter : data to be written 
third parameter : callback function name , which will be called automataically 
after write operation is done by system */

fs.writeFile(fileName, dataTObeWritten , onFileWrite);
console.log("Node js applicaton about to be terminated ");