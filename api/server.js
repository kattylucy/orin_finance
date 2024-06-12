// api/server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const authenticate = require("./middleware/authenticate");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

// routes
app.use("/api/auth", authRoutes);

// Secure route example
app.get("/secure-data", authenticate, async (req, res) => {
  // Only accessible if authenticated
  res.json({ message: "This is secure data", user: req.user });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
