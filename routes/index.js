/**
 * Add all routes here
 */

const express = require("express");
const router = new express.Router();

const baseController = require("../controllers/baseController");
const RegisterController = require("../controllers/auth/RegisterController");
const VerifyEmail = require("../controllers/auth/VerifyEmail");

router.get("/", baseController.renderData);
router.post("/user/register", RegisterController.registerUser);
router.put("/user/verify/email/:key", VerifyEmail.verifyEmail);

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
