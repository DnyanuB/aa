var express = require('express');
var myapp = express();

var customerController=function (req, res) {
	//res.send("Corporate Customer's Details");
var customers=[
            {cust_id:1,name:"Mr.Prashant",acc_no:101,acc_type:"Current",bank_name:"Bank Of America",stats:"Paid"},
			{cust_id:2,name:"Mr.Narendra",acc_no:102,acc_type:"Current",bank_name:"Swiss Bank",stats:"Paid"},
			{cust_id:3,name:"Mr.Rohit",acc_no:103,acc_type:"Current",bank_name:"SBI",stats:"Not-Paid"},
			{cust_id:4,name:"Mr.Mahesh",acc_no:104,acc_type:"Current",bank_name:"SBI",stats:"Not-Paid"},
			{cust_id:5,name:"Mrs.Sarika",acc_no:105,acc_type:"Current",bank_name:"SBI",stats:"Not-Paid"},
			{cust_id:6,name:"Mrs.Bindu",acc_no:106,acc_type:"Current",bank_name:"Bank Of America",stats:"Paid"},
			{cust_id:7,name:"Mrs.Gayatri",acc_no:106,acc_type:"Current",bank_name:"Bank Of America",stats:"Paid"}
			
      ];

  res.send(customers);
};


myapp.get('/customers',customerController );

var server = myapp.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("InfoSystem listening at http://localhost:3000", host, port)
})