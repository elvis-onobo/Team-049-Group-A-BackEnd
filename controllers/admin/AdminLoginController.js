"use strict";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const randomstring = require("randomstring");
const env = require("dotenv").config();

const Admin = require("../../models/Admin");

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.query().findOne({ email });
    console.log("The logged out data", admin);
    if (email == admin.email) {
      const passwordsMatch = await bcrypt.compare(password, admin.password);
      if (passwordsMatch) {
        const token = jwt.sign({ admin }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: process.env.JWT_EXP,
        });

        res.status(302).json({ status: "success", admin, token });
      } else {
        res
          .status(401)
          .json({ status: "failed", message: "Incorrect Password" });
      }
    } else {
      res.status(404).json({
        status: "failed",
        message: "This email has not been registered as admin",
      });
    }
  } catch (loginError) {
    console.log("Error login in admin", loginError);

    res.status(400).json({ status: "failed", message: loginError.message });
  }
};
