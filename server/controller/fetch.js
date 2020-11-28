const path = require('path');
const { getProduct, getStore, getBrand } = require('../database');

exports.getIndex = (req, res, next) => res.sendFile(path.join(__dirname, '../../public/index.html'));

exports.getProduct = (req, res, next) => {
  console.log('heyerye')
  const id = (req.body.id === undefined) ? 2 : req.body.id;
  getProduct(id)
    .then(product => Promise.all([getStore(product.store_code), getBrand(product.brand_code), product]))
    .then(result => {
      const data = {
        store: result[0],
        brand: result[1],
        product: result[2]
      };
      res.status(200).end(JSON.stringify(data));
    })
    .catch(error => {
      console.log(error);
      res.status(500).send();
    });
};