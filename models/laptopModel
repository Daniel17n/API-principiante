const mongoose = require('mongoose');

const { Schema } = mongoose;

const laptopSchema = new Schema({
  model: { type: String },
  builder: { type: String },
  cpu_model: { type: String },
  gpu_model: { type: String },
  ram: { type: String },
});

module.exports = mongoose.model('Laptop', laptopSchema);
