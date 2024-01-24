const { userDB } = require("../models/userModel");

const getData = async (req, res) => {
  try {
    let users = await userDB.find();
    if (!users.length) {
      return res.status(404).json({
        status: "warning",
        msg: "No users found",
        innerData: users,
      });
    }
    res.status(200).json({
      status: "success",
      msg: "users are found",
      innerData: users,
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "error", msg: "internal server error", innerData: null });
  }
};

// Create user

const createUser = async (req, res) => {
  try {
    let { phone } = req.body;
    let exactUser = await userDB.findOne({ phone: phone });
    if (exactUser) {
      return res.status(201).json({
        status: "success",
        text: "found",
        msg: "user is found",
        innerData: exactUser,
      });
    }
    let newUser = await userDB.create(req.body);
    let saved = await newUser.save();
    res.status(201).json({
      status: "success",
      msg: "user is created",
      innerData: saved,
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "error", msg: "internal server error", innerData: null });
  }
};

// Update user

const updateUser = async (req, res) => {
  try {
    let user = req.body;
    let exactUser = await userDB.findOne({ phone: user.phone });

    exactUser.stories.unshift({
      boughtTime: new Date().toLocaleString(),
      totalPrice: user.totalPrice,
      products: user.products,
    });

    let update = await userDB.findByIdAndUpdate(exactUser._id, exactUser);
    res.status(201).json({
      status: "success",
      msg: "products are bought",
      innerData: update,
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: "error", msg: "internal server error", innerData: null });
  }
};

module.exports = { getData, createUser, updateUser };
