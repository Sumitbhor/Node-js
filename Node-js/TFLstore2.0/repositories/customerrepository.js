var connection = require("../config/db");

exports.insertCustomer=(firstname, lastname,email,contactNo, city,result)=>{
    var sql = "insert into customers (firstname, lastname,email,contactNo, city) values (?,?,?,?,?)";
    connection.query(sql, [firstname, lastname,email,contactNo, city],result);
};

exports.deleteCustomer=(customer_id,result)=>{
    var sql = "delete from customers where customer_id=?";
    connection.query(sql, [customer_id],result);
};

exports.getAllCustomers=(result)=>{
    var sql = "select * from customers";
    connection.query(sql, result);
    // console.log("hello 3");
};

exports.updateCustomer=(firstname, lastname,email,contactNo, city,customer_id,result)=>{
    var sql = "update customers set firstname=?, lastname=?,email=?,contactNo=?, city=? where customer_id=?";
    connection.query(sql, [firstname, lastname,email,contactNo, city,customer_id],result);
};