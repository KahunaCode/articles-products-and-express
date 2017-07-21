/* jshint esversion: 6 */

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bp = require('body-parser');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

const articles = require('./routes/articles.js');
const products = require('./routes/products.js');

app.use(bp.json());
app.use(express.static('products'));

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs'
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

app.use('/products', products);
app.use('/articles', articles);


const server = app.listen(PORT, () => {
  console.log(`server up on port ${PORT}`);
});