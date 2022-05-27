const express = require("express");
const { userLogin, userSignUp } = require("../controller");
const router = express.Router();

router.post("/login", userLogin);
router.post("/signup", userSignUp);

module.exports = router;
