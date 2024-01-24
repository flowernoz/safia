const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  weight: {
    type: Number,
  },
  category: {
    type: String,
  },
  type: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const ProductDB = model("cakes", productSchema);

module.exports = { ProductDB };
