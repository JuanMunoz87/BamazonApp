DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;
CREATE TABLE products (
   id INT NOT NULL AUTO_INCREMENT,
   product_name VARCHAR(10) NULL,
   department_name VARCHAR(10) NULL,
   price DECIMAL(10,2) NULL,
   stock_quantity INT NULL,
   PRIMARY KEY (id)
);
SELECT * FROM products;


INSERT INTO products (product_name, department_name , price, stock_quantity )
VALUES ("table", "furnitures", 80.99, 5);

INSERT INTO products (product_name, department_name , price, stock_quantity )
VALUES ("desk", "furnitures", 40.50, 8);

INSERT INTO products (product_name, department_name , price, stock_quantity )
VALUES ("book", "library", 12.50, 30);

INSERT INTO products (product_name, department_name , price, stock_quantity )
VALUES ("lamp","furnitures", 15.99, 20);

INSERT INTO products (product_name, department_name , price, stock_quantity )
VALUES ("iphone 8", "electronic", 699.99, 200);

INSERT INTO products (product_name, department_name , price, stock_quantity )
VALUES ("TV", "electronic", 499.99, 130);

INSERT INTO products (product_name, department_name , price, stock_quantity )
VALUES ("chair","furnitures", 24.99, 11);

INSERT INTO products (product_name, department_name , price, stock_quantity )
VALUES ("labtop", "electronic", 1499.99, 16);

INSERT INTO products (product_name, department_name , price, stock_quantity )
VALUES ("XboxOne", "games", 499.99, 234);

INSERT INTO products (product_name, department_name , price, stock_quantity )
VALUES ("controller", "games", 24.99, 234);










