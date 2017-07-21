/* jshint esversion: 6 */


const DataStore = [];

function createProduct(product) {
  DataStore.push(product);
}

function getProductById(id) {
  console.log("DataStore", DataStore);
  console.log('DS get products by Id', id);
  var result;
  DataStore.forEach( (item) =>{
    console.log('loop item '+typeof item.id + '  '+ typeof id);
    if (item.id === id) {
      console.log('id forEach loop is ', item.id);
      result = item;
    }
  });
  return result;
}


module.exports = {
  createProduct,
  getProductById
};