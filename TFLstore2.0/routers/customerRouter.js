const express = require('express');
const router = express.Router();
const controller = require("../controller/customerController");


router.post('/customers',controller.addCustomer);
router.delete('/delete/:id',controller.deleteCustomer);
router.get('/getAllcustomers',controller.getAllCustomers);
router.put('/updatecustomer/:id',controller.updateCustomer);


module.exports=router;
