DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL, 
  stock_quantity INTEGER(11) NOT NULL,
  PRIMARY KEY(item_id) 
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lotion", "beauty", 5.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("water bottles", "drinks", .99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("black clock", "home", 10.50, 20);