const express = require("express");
const router = express.Router();
const supabase = require("../supabaseClient");

// Register a new user
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
});

// Login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
});

module.exports = router;
