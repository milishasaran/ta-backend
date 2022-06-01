/*Fetch auth data from request (if available, else throw error)
Check if access token points to the particular user
If yes, allow access, else throw error
 */
exports.authenticatorToken = (req, res, next) => {
  try {
    const isToken =
      req.headers["authorisation"] &&
      typeof req.headers["authorisation"] === "string";
    if (!isToken) {
      return res.status(404).json({
        message: "Token not found",
      });
    }
    const accessToken = req.headers["authorisation"].split(" ")[1];
    const { userID } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.userID = userID;
    return next();
  } catch (err) {
    return res.status(400).json({
      err,
      message: "Authentication Failed",
    });
  }
};
