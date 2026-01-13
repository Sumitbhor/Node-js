
var customerRepo=require('../repositories/customerrepository');

exports.addCustomer=(firstname, lastname,email,contactNo, city,resut)=>{
    customerRepo.insertCustomer(firstname, lastname,email,contactNo, city,resut);
};

exports.deleteCustomer=(id,result)=>{
    customerRepo.deleteCustomer(id,result);
}

exports.getAllCustomers=(result)=>{
    // console.log("hello2");
    customerRepo.getAllCustomers(result);
    // console.log("hello2");
}

exports.updateCustomer=(firstname, lastname,email,contactNo, city,id,result)=>{
    customerRepo.updateCustomer(firstname, lastname,email,contactNo, city,id,result);
}