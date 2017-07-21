/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const DS_Products = require('../db/DS_Products.js');

router
.post('/', (req,res) =>{
  console.log('POST /products', req.body);
  DS_Products.createProduct(req.body);
  res.end();
})
.get('/:id', (req,res) =>{
  console.log('GET /products/:id', req.params.id);
  const productId = Number(req.params.id);
  const product = DS_Products.getProductById(productId);
  console.log(product);
  res.render('home', product);
});

module.exports = router;