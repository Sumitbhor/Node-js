var connection = require("../config/db");

exports.insertCustomer=(firstname, lastname,email,contactNo, city,resut)=>{
    var sql = "insert into customers (firstname, lastname,email,contactNo, city) values (?,?,?,?,?)";
    connection.query(sql, [firstname, lastname,email,contactNo, city],resut);
};

exports.deleteCustomer=(id,result)=>{
    var sql = "delete from customers where id=?";
    connection.query(sql, [id],result);
};

exports.getAllCustomers=(result)=>{
    var sql = "select * from customers";
    connection.query(sql, result);
    // console.log("hello 3");
};

exports.updateCustomer=(firstname, lastname,email,contactNo, city,id,result)=>{
    var sql = "update customers set firstname=?, lastname=?,email=?,contactNo=?, city=? where id=?";
    connection.query(sql, [firstname, lastname,email,contactNo, city,id],result);
};