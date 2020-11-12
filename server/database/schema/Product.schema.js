const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true, dropDups: true },
  store_code: { type: String, required: true },
  brand_code: { type: String, required: true },
  name: { type: String, required: true },
  details: { type: Object, required: true },
  images: { type: Array, required: true },
  instructions: { type: String, required: true }
});

module.exports = new mongoose.model('Product', productSchema);