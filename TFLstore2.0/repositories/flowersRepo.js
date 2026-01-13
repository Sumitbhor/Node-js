var connection = require("../config/db")

exports.inseretFlower=(name , quantity , price)=>{
    sql= "insert into flowers (name , quantity , price) values (?,?,?)";
    connection.query(sql,[name , quantity , price],result)
}

exports.deleteFlower=(id,result)=>{
    sql="delete from flowers where id=(?)";
    connection.query(sql,[id],result);
}