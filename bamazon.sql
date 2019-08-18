-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30),
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Bat", "Sports", 40.00, 5)

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Basket Ball", "Sports", 20.00, 3)

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Vitamin C", "Health", 10.00, 8)

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Corn", "Food", 5.00, 7)

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Banana", "Food", 4.00, 6)

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Bread", "Food", 7.00, 3)

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("AA Batteries", "Electronics", 13.00, 4)

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Plate", "Houseware", 24.00, 12)

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Headphones", "Electronics", 60.00, 2)

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Spoons", "Houseware", 7.00, 10)

