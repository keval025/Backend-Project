const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecretkey";

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token missing" });
  }

  try {
    const decoded = jwt.verify(authHeader, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};
