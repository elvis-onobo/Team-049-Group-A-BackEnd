"use strict";

// Packages
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const env = require("dotenv").config();
const randomstring = require("randomstring");
var mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

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

    const data = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_MAIL}>`,
      to: userData.email,
      subject: "Please verify your email",
      text: `Click the following link to verify your email!: 
      <a href="${req.hostname / userData.key}">Here</a> or click here ${
        req.hostname / userData.key
      }`,
    };

    mailgun.messages().send(data, function (errorSendingMail, body) {
      if (errorSendingMail) {
        console.log("There was an error sending mail", errorSendingMail);
        res.status(201).json({
          status: "failure",
          message:
            "You have been registered but we failed to send you an email",
        });
      } else {
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
      }
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
