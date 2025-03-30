const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  image: Buffer,
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: "",
  },
  bgcolor: {
    type: String,
    default: "purple",
  },
  owner: {
    type: Object,
    properties: {
      owner_id: { type: String },
      owner_name: { type: String },
    },
    default: {},
  },
});

module.exports = mongoose.model("product", productSchema);

