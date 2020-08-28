/**
 * Add all routes here
 */

const express = require("express");
const router = new express.Router();

const baseController = require("../controllers/baseController");

router.get("/", baseController.renderData);

// not found route
router.use((req, res, next) => {
  if (!req.route) {
    res.status(404).json({
      status: "not-found",
      message: "The page you're looking for was not found",
    });
  }
});

module.exports = router;
