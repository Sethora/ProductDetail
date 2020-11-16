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

const getProducts = () => {
  return Promise.resolve(ProductModel.find({}, { _id: 0, __v: 0 }))
    .then(result => result)
    .catch(error => error);
};

const saveStore = (store) => {
  return Promise.resolve(StoreModel.create(store))
    .then(result => result)
    .catch(error => error);
};

const getStore = (code) => {
  return Promise.resolve(StoreModel.findOne({ code }, { _id: 0, __v: 0 }))
    .then(result => result)
    .catch(error => error);
};

const saveBrand = (brand) => {
  return Promise.resolve(BrandModel.create(brand))
    .then(result => result)
    .catch(error => error);
};

const getBrand = (code) => {
  return Promise.resolve(BrandModel.findOne({ code }, { _id: 0, __v: 0 }))
    .then(result => result)
    .catch(error => error);
}

module.exports = {
  getInstance,
  shutDownInstance,
  saveProduct,
  getProducts,
  saveStore,
  getStore,
  saveBrand,
  getBrand
};

