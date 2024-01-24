const { Router } = require("express");
const user = Router();
const { userDB } = require("../models/userModel");
const { UserValidation } = require("../validation/userValidation");
const {
  getData,
  createUser,
  updateUser,
} = require("../controller/userControl");

user.get("/allUsers", getData);

user.post("/create", [UserValidation], createUser);

user.patch("/update", updateUser);
module.exports = { user };
