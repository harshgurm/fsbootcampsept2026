-- creating fssept2026 database
CREATE DATABASE fssept2026;

-- creating customers table
-- AUTO_INCREMENT to keep on adding +1 in the customer_id
CREATE TABLE `fssept2026`.`customers` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `customer_name_UNIQUE` (`customer_name`)
);

CREATE TABLE `fssept2026`.`orders` (
  `order_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `order_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `quantity` int DEFAULT NULL
);

SELECT * FROM fssept2026.customers;

-- Adding a single customer to customers table
INSERT INTO `fssept2026`.`customers` (`customer_name`, `age`) VALUES 
('Rob Stark', '10');

-- Multi insert
INSERT INTO `fssept2026`.`customers` (`customer_name`, `age`) VALUES 
('Rob Stark', '10'), 
('Mr Brown', '18'),
('Alex', '20');

-- specific columns
SELECT * FROM fssept2026.customers;

-- To add a column after the table is created
ALTER TABLE fssept2026.customers ADD COLUMN email VARCHAR(100) DEFAULT NULL;

ALTER TABLE fssept2026.customers ADD COLUMN city VARCHAR(50) DEFAULT NULL;

ALTER TABLE fssept2026.customers DROP COLUMN city;

-- to limit the number of records to select from a database
SELECT * FROM fssept2026.customers ORDER BY customer_id desc LIMIT 1 OFFSET 1;

SELECT * FROM fssept2026.customers ORDER BY customer_id DESC LIMIT 2;

-- to filter we use where clause
SELECT * FROM fssept2026.customers where customer_name = 'Alex';

-- Like clause to partially filter records
SELECT customer_name, age FROM fssept2026.customers WHERE customer_name LIKE 'Al__';

-- Like clause to partially filter records
SELECT customer_name, age FROM fssept2026.customers WHERE customer_name LIKE '%m';

-- Like clause working as a contain clause
SELECT customer_name, age FROM fssept2026.customers WHERE customer_name LIKE '%a%';

SELECT customer_name, age FROM fssept2026.customers ORDER BY customer_name DESC;

SELECT * FROM fssept2026.orders;

INSERT INTO `fssept2026`.`orders` (`order_date`, `quantity`) VALUES (NOW(), '5');

-- To update existing data
UPDATE fssept2026.customers SET age = 20 WHERE customer_id = 2;

-- To update existing data
UPDATE fssept2026.customers SET age = 20, customer_name = 'George Brown' WHERE customer_id = 2;

-- DELETE a record
DELETE FROM fssept2026.customers where customer_id = 3;

-- TO delete the data from a table without deleting the table
TRUNCATE fssept2026.customer_test;

-- TO delete a table
DROP TABLE fssept2026.customer_test;

DROP TABLE fssept2026.orders;

CREATE TABLE `fssept2026`.`orders` (
  `order_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `order_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `quantity` int DEFAULT NULL,
  customer_id int not null,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

select * from `fssept2026`.`orders`;

INSERT INTO `fssept2026`.`orders` (order_date, quantity, customer_id) VALUES 
(NOW(), 5, 4);

use fssept2026;
select * from customers c
INNER JOIN orders o
ON o.customer_id = c.customer_id;

select * from customers c
LEFT JOIN orders o
ON o.customer_id = c.customer_id
WHERE o.customer_id IS NULL;
