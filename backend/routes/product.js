const { Router } = require("express");
const { ProductDB } = require("../models/productModel");
const { ProductValidation } = require("../validation/productValidate");

const product = Router();

// GET
product.get("/allProducts", async (req, res) => {
  try {
    let AllProducts = await ProductDB.find();
    if (!AllProducts.length) {
      return res.status(404).json({
        status: "warning",
        msg: "Product not found",
        innerData: AllProducts,
      });
    }
    res.status(200).json({
      status: "success",
      msg: "Product are found",
      innerData: AllProducts,
    });
  } catch (err) {
    res.status(500).json({ status: "error", msg: err, innerData: null });
  }
});

// POST

product.post("/create", [ProductValidation], async (req, res) => {
  try {
    let product = await ProductDB.create(req.body);
    let saved = await product.save();

    res
      .status(201)
      .json({ status: "success", msg: "Product is created", innerData: saved });
  } catch (err) {
    res.status(500).json({ status: "error", msg: err, innerData: null });
  }
});

// category

product.get("/category", async (req, res) => {
  try {
    let { category } = req.query;

    if (category === "yangi yil") {
      let products = await ProductDB.find();
      return res.status(200).json({
        status: "success",
        msg: "Product are found",
        innerData: products,
      });
    }

    let filteredData = await ProductDB.find({ category });

    if (!filteredData.length) {
      return res.status(404).json({
        status: "warning",
        msg: "Product not found",
        innerData: filteredData,
      });
    }

    res.status(200).json({
      status: "success",
      msg: "Product are found",
      innerData: filteredData,
    });
  } catch (err) {
    res.status(500).json({ status: "error", msg: err, innerData: null });
  }
});

// single page

product.get("/single/:id", async (req, res) => {
  try {
    let { id } = req.params;

    let singlePro = await ProductDB.findById(id);
    if (!singlePro) {
      res.status(404).json({ status: "warning", innerData: singlePro });
    }
    res.status(200).json({ status: "success", innerData: singlePro });
  } catch (err) {
    res.status(500).json({ status: "error", msg: err, innerData: null });
  }
});

product.post("/search", async (req, res) => {
  let { word } = req.body;
  let pros = await ProductDB.find();
  let result = pros.filter((i) =>
    i.name.toLowerCase().includes(word.toLowerCase())
  );
  if (result.length) {
    return res.status(200).json({
      status: "success",
      msg: "products are found",
      innerData: result,
    });
  }
  res.status(404).json({
    status: "warning",
    msg: "products are not found",
    innerData: null,
  });
});

module.exports = { product };
