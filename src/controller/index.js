const { hashPassword, verifyPassword } = require("../helpers");
const User = require("../models/index");

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const check = await verifyPassword(password, user.password);
    if (!check) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }
    return res.status(200).json({
      user,
      message: "Login Successful",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err,
      message: "Login Failed",
    });
  }
};

exports.userSignUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashed = await hashPassword(password);
    console.log(hashed);
    const user = new User({ email, password: await hashPassword(password) });
    await user.save();
    return res.status(200).json({
      message: "Sign Up Successful",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err,
      message: "SignUp Failed",
    });
  }
};
