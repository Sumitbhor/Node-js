var accounting = require("./Account");

var acc = new accounting.Account(50000);
 acc.debit(50000);

 var accbalance = acc.checkBalance();      