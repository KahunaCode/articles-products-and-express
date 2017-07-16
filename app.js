/* jshint esversion: 6 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;













const server = app.listen(PORT, () => {
  console.log(`server up on port ${PORT}`);
});