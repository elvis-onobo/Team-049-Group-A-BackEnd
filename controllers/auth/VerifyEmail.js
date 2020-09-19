"use strict";

const randomstring = require("randomstring");

const User = require("../../models/User");

exports.verifyEmail = async (req, res) => {
  const { key } = req.params;

  const newKey = randomstring.generate({
    length: 10,
    charset: "alphanumeric",
  });

  try {
    const user = await User.query()
      .patch({ verified: 1, key: newKey })
      .where("key", key);

    res.status(200).json({ status: "success", message: "Email verified" });
  } catch (verifyEmailError) {
    console.log("Error verifying email", verifyEmailError);

    res.json({ status: "failed", message: verifyEmailError.message });
  }
};
