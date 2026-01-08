const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// fake database (array)
let users = [];

/* =====================
   GET API
   ===================== */
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Backend 🚀",
    time: new Date().toLocaleTimeString(),
  });
});

/* =====================
   POST API
   ===================== */
app.post("/api/add-user", (req, res) => {
  const { name, age } = req.body;

  // backend validation
  if (!name || !age) {
    return res.status(400).json({
      error: "Name and Age are required",
    });
  }

  const newUser = { name, age };
  users.push(newUser);

  res.json({
    success: true,
    users,
  });
});

/* =====================
   GET ALL USERS
   ===================== */
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
