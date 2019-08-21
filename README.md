# Bamazon

Welcome to Bamazon! Bamazon is a one of a kind command line interface node applicaiton that utilizes Javascript and SQL to display products for sale to the user, allow them to choose the quantity they would like to purchase, and then display the total cost of all the items chosen by the user. 

Some specific technologies used in this application include the node packages mysql and inquirer. The application itself is run in the termianl of the user's local machine with the use of node on the command line. We write our bamazonCustomer.js file along side the bamazon.sql in VS Code, however, while bamazonCustomer.js is run in VS Code, our bamazon.sql file is copied and ran in MySQLWorkbench to create our database. 

From a high-level perspective, this application takes user input from the command line and returns, as well as updates, data from our sql database through a function written in our main javascript file. 

To get into more detail, we take a look at some of the specifics. For one, the construction of the appliction began with the creation of our initial files: bamazon.sql, bamazonCustomer.js, package-lock.json, and README.md (See Figure 1).

The majority of the functionality of the application consists of just the buyProduct(), which is written in the bamazonCustomer.js file. This file starts off with a list of various node packages required, stored in const declerations since our variable identifier will not be reassigned. This is also where you can find the global constant variable cartArray, which will eventually hold the price amounts of each product chosen and total it up for the user once they are through shopping (See Figure 1).

![Figure 1 - Initial Files and Variables](https://github.com/Mutahir-Chaudhry/bamazon/blob/master/Images/Bamazon%20Initial%20Variables.png)

Next, the sql database code is written in the bamazon.sql file. It is copied and ran in MySQLWorkbench to create our bamazon database, and includes 10 different INSERT INTO statements to populate our database with 10 different products and their respective name, department, price, and quantity (See Figure 2). An auto-incremented ID is set to be assigned to each product in the order it is added to the database.

![Figure 2 - Initial SQL Database](https://github.com/Mutahir-Chaudhry/bamazon/blob/master/Images/Bamazon%20Initial%20SQL.png)

Once the database is created, we establish connection between our application and the database with the connection.connect method (See Figure 1). Within the callback function of this method, we not only handle the error, but console log the connection thread ID to confirm we have connection, as well as call for the buyProduct() to be run (See Figure 1).

This brings us to the buyProduct(). This function starts off by using the connection.query method to call to our database and pull the names of all our products, which are then listed in numerical order in the console through the use of inquirer (See Figure 3). Once the user makes a selection, the user is prompted to enter in a quantity of the product. 

![Figure 3 - Product List, Selection, and Quantity ](https://github.com/Mutahir-Chaudhry/bamazon/blob/master/Images/Bamazon%20Products%20List.png)


Once a product and its quantity have been selected, the database is immediately updated (See Figure 4), and through the use of inquirer once again, the user is asked if they'd like to continue shopping (See Figure 4). 

![Figure 4 - SQL Database Update and Continue Shopping?](https://github.com/Mutahir-Chaudhry/bamazon/blob/master/Images/Bamazon%20SQL%20Update%20and%20Continue%20Shopping.png)


If the user selects yes, they are again provided the list of products. The total price of the product they've already selected, in the quantity chosen, is calculated and stored in our global cartArray. (See Figure 5). The process continues until they no longer want to shop anymore.

![Figure 5 - If Yes Scenario, and Cart Update](https://github.com/Mutahir-Chaudhry/bamazon/blob/master/Images/Bamazon%20If%20Yes.png)


Once the user no longer wants to shop, they select "Check me out please!" when prompted after their latest product purchase. Once selected, the user will be given a message letting them know they're products will be delivered in the next 24 hours, along with the total price of all the products in their cart at the time of checkout (See Figure 6).

![Figure 6 - If No Scenario, and Transaction Complete](https://github.com/Mutahir-Chaudhry/bamazon/blob/master/Images/Bamazon%20If%20No.png)


I, Mutahir Chaudhry, created and maintain this Bamazon application, and can be contacted in you have any questions or need points of clarification. 

