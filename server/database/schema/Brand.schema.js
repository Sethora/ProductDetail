const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
  code: { type: String, required: true, unique: true, dropDups: true },
  name: { type: String, required: true, unique: true },
  about: { type: String, required: true }
});

module.exports = new mongoose.model('Brand', brandSchema);