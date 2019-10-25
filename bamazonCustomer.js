var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Realmadrid7",
  database: "bamazonDB"
});
/*
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
*/
connection.connect();

var display = function(){
  connection.query("SELECT * FROM products",function(err,res){
    if (err) throw err;
    console.log("-----------------------");
    console.log( "This is Bamazon");
    console.log("------------------");
   
   var table = new Table({
      head: ["Product Id", "Product Name", "Department Name", "Price", "Stock Quantity"],
      colWidths: [12, 20, 20, 20, 20],
      colAligns: ["Center", "Left", "Right"],
      style:{
         head: ["aqua"],
         compact: true
      }
  });
  for ( var i = 0; i < res.length; i++){
     table.push([res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity ]);
  }
  console.log(table.toString());
  console.log("");
  shopping();
 
});
};
//display();

var shopping = function() {
  inquirer
    .prompt({
      name: "buyProduct",
      type: "input",
      message: "Select the product ID of your item you like to purchase."
    })
    .then(function(answer1) {
      var selection = answer1.buyProduct;
      connection.query("SELECT * FROM products WHERE Id=?", selection, function(err, res){
      if (err) throw err; 
      if (res.length===0){
        console.log("This product does not exist. Enter a product Id from the list");
      
      shopping();
      }
      else {
      //  console.log("good to go");
  inquirer
    .prompt({
      name: "quantity",
      type: "input",
      message: "How many do you wish to purchase?"
})
.then(function(answer2){
  var quantity = answer2.quantity;
  if (quantity > res[0].stock_quantity){
    console.log("We don't have that many items.");
    shopping();
  }
      else {
        console.log("");
        console.log(res[0].product_name + "PURCHASED");
        console.log(quantity + " price $" + res[0].price);

        var newQuantity = res[0].stock_quantity - quantity;
        connection.query("UPDATE products SET stock_quantity = " +
         newQuantity + 
         "Where id =" +
          res[0].id, 
          function(err, resUpdate){
          if (err) throw err;
          console.log("");
          console.log("PARCHASED");
          console.log("");
          connection.end();
        }
        );
      }
    });
}
});
});
};

display();
