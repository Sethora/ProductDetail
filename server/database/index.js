const mongoose = require('mongoose');
const path = require('path');
const { StoreModel, ProductModel, BrandModel } = require('./schema');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


const getInstance = () => {
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(result => console.log('connected '))
    .catch(err => console.log('connection error ', err));
};

const shutDownInstance = () => {
  mongoose.connection.close();
};

const saveProduct = (product) => {
  return Promise.resolve(ProductModel.create(product))
    .then(result => result)
    .catch(error => error);
};

const getProducts = (cb) => {
  ProductModel.find({}, (err, items) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, items);
    }
  });
};

const saveStore = (store) => {
  return Promise.resolve(StoreModel.create(store))
    .then(result => result)
    .catch(error => error);
};

const saveBrand = (brand) => {
  return Promise.resolve(BrandModel.create(brand))
    .then(result => result)
    .catch(error => error);
};

module.exports = {
  getInstance,
  shutDownInstance,
  saveProduct,
  getProducts,
  saveStore,
  saveBrand
};

