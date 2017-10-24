var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'password',
  database : 'bamazon_db'
});

var inquirer = require('inquirer');

function start() {

  connection.query("SELECT * FROM productTable", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + ") " + res[i].product_name + " || " + res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity);
    }
    inquirer.prompt([
      {
        type: "input",
        message: "What is the ID of the product you would like to buy?",
        name: "productID"
      },
      {
        type: "input",
        message: "How many would you like to buy?",
        name: "stockSubtract"
      }
    ]).then(function(resp){
      var IDGrab = resp.productID - 1;
      var subThis =  resp.stockSubtract
      var priceTotal = res[IDGrab].price * resp.stockSubtract
      if (res[IDGrab].stock_quantity > resp.stockSubtract) {
        var newStock = (res[IDGrab].stock_quantity - resp.stockSubtract);
        connection.query("UPDATE productTable SET ? WHERE ?",
        [
          {
            stock_quantity: newStock
          },
          {
            item_id: resp.productID
          }
        ],
        function(err, respo) {
          console.log("Your total today will be $" + priceTotal)
          start();
        }) //end connection and function
      }
      else {
        console.log("Insufficient quantity!")
        start()
      }
    }) //then end
  }) //connection end
} //start() end

start();