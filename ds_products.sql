
DROP DATABASE IF EXISTS datastore;
DROP USER IF EXISTS productsuser;

CREATE USER productsuser WITH ENCRYPTED PASSWORD 'user';
CREATE DATABASE datastore WITH OWNER productsuser;

\c datastore productsuser

DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(45),
  price MONEY,
  inventory INTEGER
);

INSERT INTO products VALUES
(default, 'phone', '350', 25),
(default, 'not phone', '470', 13);