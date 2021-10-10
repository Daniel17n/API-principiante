const mongoose = require('mongoose');

const { Schema } = mongoose;

const laptopSchema = new Schema({
  model: { type: String },
  builder: { type: String },
  cpu: { type: String },
  gpu: { type: String },
  ram: { type: String },
});

module.exports = mongoose.model('Laptop', laptopSchema);
