/* jshint esversion: 6 */

const express = require('express');
const app = express();
const bp = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bp.json());

//{ name: String, price: String, inventory: String }


app.post('/products', (req,res) => {
  if (typeof req.body.name === "string" && typeof req.body.price === "string"){
    console.log(req.body);
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