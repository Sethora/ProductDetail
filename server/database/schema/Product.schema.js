const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  respresented_id: { type: Number, required: true, dropDups: true },
  code: { type: String, unique: true, required: true, dropDups: true },
  store_code: { type: String, required: true },
  brand_code: { type: String, required: true },
  name: { type: String, required: true },
  details: { type: Object, required: true },
  instructions: { type: Object, required: true },
  ingredients: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: Array, required: true }
});

module.exports = new mongoose.model('Product', productSchema);