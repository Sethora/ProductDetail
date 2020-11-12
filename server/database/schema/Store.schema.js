const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, dropDups: true },
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true }
});

module.exports = new mongoose.model('Store', storeSchema);