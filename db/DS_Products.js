/* jshint esversion: 6 */

const DataStore = [];
const pgp = require('pg-promise')();
const {database, user, password} = require('../config/config.json');

const connectionOptions = {
  host: "localhost",
  port: 5432,
  database: database,
  user: user,
  password: password
};
const db = pgp(connectionOptions);


function createProduct(product) {
  console.log('the product name to insert is', product.name);
  let newProduct = {
    name: product.name,
    price: product.price,
    inventory: product.inventory
  };
  return db.none('INSERT INTO products VALUES (default, ${name}, ${price}, ${inventory})', newProduct);
}

function getProductById(id) {
  console.log("DataStore", DataStore);
  console.log('DS get products by Id', id);
  return db.one(`SELECT * FROM products WHERE id = '${id}'`);
}

function getAllProducts(){
  return db.query('SELECT * FROM products');
}

module.exports = {
  createProduct,
  getProductById,
  getAllProducts
};