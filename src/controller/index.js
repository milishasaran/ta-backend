const { hashPassword, verifyPassword } = require("../helpers");
const User = require("../models/index");
const jwt = require("jsonwebtoken");

/*Check to see email in DB. 
If yes, decrypt password from DB and compare with password from client.
Then set access token and send data to UI
*/
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

    const accessToken = jwt.sign(
      { userID: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10d" }
    );

    return res.status(200).json({
      user,
      accessToken,
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

/*Retrieve email and password from request body.
Hash the password using a helper function
Save the user ID and password in the DB.
Send success message*/
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
