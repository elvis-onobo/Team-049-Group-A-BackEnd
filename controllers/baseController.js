"use strict";

exports.renderData = (req, res) => {
  res.json({
    status: "success",
    message: "You have successfully hit the base route",
  });
};