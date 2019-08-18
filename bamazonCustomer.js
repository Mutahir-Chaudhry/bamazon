const mysql = require("mysql");

const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MySQLPassword",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    buyProduct();
});

var cartArray = [];

function buyProduct(){
    connection.query("SELECT * FROM products", function(err, results){
        if (err) throw err;
        inquirer
        .prompt([
            {
                name:"choice",
                type: "rawlist",
                choices: function() {
                    var choicesArray = [];
                    for (var i = 0; i < results.length; i++){
                        choicesArray.push(results[i].product_name);
                    }
                    return choicesArray;
                },
                message: "What product would you like to purchase?"
            },
            {
                name:"quantity",
                type: "input",
                message: "What quantity of this product would you like to purchase?"
            }
        ]).then(function(answer){
            var chosenProduct;
            for (var i = 0; i <results.length; i++){
                if(results[i].product_name === answer.choice){
                    chosenProduct = results[i];
                } 
            }
            if (chosenProduct.quantity > parseInt(answer.quantity)){
               connection.query(
                   "UPDATE products SET ? WHERE ?",
                   [
                       {
                           quantity: chosenProduct.quantity - answer.quantity
                       },
                       {
                           item_id: chosenProduct.item_id
                       }
                   ], function(err){
                       if (err) throw err;
                       var price = answer.quantity * chosenProduct.price;
                       inquirer
                       .prompt([
                           {
                               name:"action",
                               type:"rawlist",
                               message:"Would you like to keep shopping?",
                               choices:[
                                   "Yes",
                                   "No"
                                ]
                           }
                       ]).then(function(answer){
                           if (answer.action === "Yes"){
                            cartArray.push(price)
                            console.log("Enjoy your shopping!\n")
                            buyProduct();
                           }else{
                            cartArray.push(price)
                            var add = (a, b) => a + b
                            var total = cartArray.reduce(add)
                            console.log("We appreciate your business! Your order will be shipped immediately and will arrive in the next 24 hrs! \nYour total cost today is : $" + (total) + "\n");
                            connection.end();
                           }
                       })
                   }
               );
            }else {
                console.log("Sorry, we don't have that many in stock :(")
                buyProduct();
            }
        });
    });
}

