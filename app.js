/* jshint esversion: 6 */

const express = require('express');
const app = express();
const bp = require('body-parser');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

app.use(bp.json());
app.use(express.static('products'));


//{ name: String, price: String, inventory: String }

app.get('/products/:id', (req,res) => {
    res.send(req.params.id);
});

function parseWrite({name, price, inventory}){
  //writing basic html, should convert to hbs
  var id = name;

  var page = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Product - ${name}</title>
      </head>
      <body>
        <h1>${name}</h1>
        <h2>cost: ${price}</h2>
        <h2>current stock: ${inventory}</h2>
      </body>
    </html>`;
  fs.writeFile(`./products/${id}.html`, page, (err) =>{
    if (err) throw err;
    console.log(`./products/${id}.html`);
    console.log("file saved");
  });
}


app.post('/products', (req,res) => {
  if (typeof req.body.name === "string" && typeof req.body.price === "string"){
    console.log(req.body.name);
    parseWrite(req.body);
    // fs.writeFile(`./products/${req.body.name}.html`, req.body.name, (err) =>{
    //   if (err) throw err;
    //   console.log("file written");
    // });
    res.send(`{"success":true}`);
  }
  else{
    console.log('bad post criteria');
    res.send(`{"success":false}`);
  }
});











const server = app.listen(PORT, () => {
  console.log(`server up on port ${PORT}`);
});