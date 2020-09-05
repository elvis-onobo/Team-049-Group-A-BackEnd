"use strict";

// Packages
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const env = require("dotenv").config();
const randomstring = require("randomstring");

// models
const User = require("../../models/User");

exports.registerUser = async (req, res) => {
  try {
    const { firstname, lastname, phone, email, password } = req.body;

    const key = randomstring.generate({
      length: 10,
      charset: "alphanumeric",
    });

    const userData = await User.query().insert({
      firstname,
      lastname,
      phone,
      email,
      password: await bcrypt.hash(password, 10),
      key,
    });

    const token = jwt.sign(
      { user: userData },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.JWT_EXP,
      }
    );

    res.status(201).json({
      status: "success",
      message: "You have been registered",
      token,
    });
  } catch (errorCreatingUser) {
    console.log("There has been an error", errorCreatingUser);
    // errorHandler(errorCreatingUser, res)
    res.status(400).json({
      status: "error",
      message: errorCreatingUser.message,
    });
  }
};
