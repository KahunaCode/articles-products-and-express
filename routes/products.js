/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const DS_Products = require('../db/DS_Products.js');

router
.post('/', (req,res) =>{
  console.log('POST /products', req.body);
  //DS_Products.createProduct(req.body);
  DS_Products.createProduct(req.body)
    .then(() => {
      console.log('creating new prodcut', req.body);
      res.end();
    });
  // res.end();
})
.get('/:id', (req,res) =>{
  console.log('GET /products/:id', req.params.id);
  const productId = Number(req.params.id);
  // const product = DS_Products.getProductById(productId);
  // console.log(product);
  DS_Products.getProductById(productId)
    .then((product) => {
      console.log(product);
      res.render('home', product);
    });
  //res.render('home', product);
})
.get('/', (req,res) => {
  // const allProducts = DS_Products.getAllProducts();
  // console.log('get all products', allProducts);
  DS_Products.getAllProducts()
    .then((products) => {
      console.log(typeof products);
      res.render('index', products);
    });
  //res.render('index', allProducts);
})
.get('/:id/edit', (req,res) => {
  console.log('got an edit request');
  console.log('id is', req.params.id);
  const productId = {id: Number(req.params.id)};
  res.render('edit', productId);
})
.put('/:id/edit', (req,res) => {
  console.log('got an put request');
  console.log('id is', req.params.id);
  const productId = {id: Number(req.params.id)};
  res.render('edit', productId);
});

module.exports = router;