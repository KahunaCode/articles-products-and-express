/* jshint esversion: 6 */

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bp = require('body-parser');
const fs = require('fs');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;

const articles = require('./routes/articles.js');
const products = require('./routes/products.js');

app.use(bp.urlencoded());
app.use(express.static('products'));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(methodOverride(function (req, res) {
  console.log('please work', req.body);
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    console.log(method);
    delete req.body._method;
    return method;
  }
}));

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