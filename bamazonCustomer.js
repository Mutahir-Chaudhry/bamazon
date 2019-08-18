var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MySQLPassword",
    database: "bamazon_db"
  });

  connection.connect(function(err){
      if (err) throw err;
      console.log("connected as id " + connection.threadId + "\n");
      showProduct();
  });


  function showProduct() {
    console.log("Here are all the products we have to offer!\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  }
  