const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  description: String
});

const Inventory = mongoose.model('Inventory', InventorySchema);

module.exports = Inventory;
