const mongoose = require("mongooose");

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
