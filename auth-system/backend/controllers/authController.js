const jwt = require("jsonwebtoken");

const users = [];
const SECRET_KEY = "mysecretkey";

// REGISTER
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields required" });
  }

  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.status(400).json({ error: "User already exists" });
  }

  users.push({ name, email, password });

  res.json({ message: "User registered successfully" });
};

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
};

// PROTECTED PROFILE
exports.profile = (req, res) => {
  res.json({
    message: "Welcome to protected profile 🔐",
    user: req.user
  });
};
