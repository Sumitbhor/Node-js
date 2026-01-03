var events = require ("events");
var emitter = new events.EventEmitter();
var Taxation = require("./taxcontrolle");
var Notification = require("./notificationcontroller");
var BankingOperation= require("./bankcontroller");


emitter.addListener('underBalance',Notification.sendEmail);
emitter.addListener('underBalance',Notification.sendSMS);
emitter.addListener('underBalance',BankingOperation.blockAccount);
emitter.addListener('overBalance',Taxation.payIncomeTax);

exports.Account = function(initialAmount){
    var balance = initialAmount ;
    var monitor = function (){
        if (balance <5000){
            emitter.emit("underBalance");
        }
        else if(balance> 250000){+
            emitter.emit("overBalance");
        }
    }
    var getBalance= function (){
        return balance ;
    }

    var withdraw = function (amount){
        balance = balance - amount ;
        monitor();
    }

    var deposite = function (amount){
        balance = balance + amount ;
        console.log("inserted");
        monitor();
    }
    
    return{
        checkBalance: getBalance ,
        debit : withdraw,
        credit : deposite  
    }
}

