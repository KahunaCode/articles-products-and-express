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
  //DataStore.push(product);
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
  // var result;
  // DataStore.forEach( (item) =>{
  //   console.log('loop item '+typeof item.id + '  '+ typeof id);
  //   if (parseInt(item.id) === id) {
  //     console.log('id forEach loop is ', item.id);
  //     result = item;
  //   }
  // });
  // return result;
  return db.one(`SELECT * FROM products WHERE id = '${id}'`);
}

function getAllProducts(){
  // var items = {};
  // DataStore.forEach( (item)=>{
  //   items.name += ' ' + item.name;
  // });
  // return items;
  //return DataStore;
  //console.log('getAllProducts function');
  return db.query('SELECT * FROM products');
}



module.exports = {
  createProduct,
  getProductById,
  getAllProducts
};