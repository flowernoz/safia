const { model, Schema } = require("mongoose");

const userModel = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  phone: { type: String },
  addedTime: { type: String, default: new Date().toLocaleString() },
  stories: [
    {
      boughtTime: { type: String, default: new Date().toLocaleString() },
      totalPrice: { type: Number, default: 0 },
      products: [
        {
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
        },
      ],
    },
  ],
});

const userDB = model("users", userModel);
module.exports = { userDB };
